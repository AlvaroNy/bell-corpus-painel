# HANDOFF — Painel de Preços (multi-marca)

Documento de continuidade para LLMs. Leia inteiro antes de editar.

## 1. O que é
App **estático** (HTML/CSS/JS puro, sem build, sem framework) de consulta de preços/catálogo
para o Alvaro (Atacado Sul América). Mobile-first. Cada **marca/fornecedor** é uma aba.

- **Pasta:** `C:\Claude\bell-corpus-painel`
- **Arquivos:** `index.html`, `style.css`, `app.js`, `logo.png`, `favicon.ico`, este `HANDOFF.md`
- **Repo:** `github.com/AlvaroNy/bell-corpus-painel` (branch `master`)
- **No ar:** https://extraordinary-ganache-0fcc3e.netlify.app/
- **Deploy:** `git push` no `master` → Netlify publica sozinho em ~30s. **Sempre testar no preview local antes de commitar.**

## 2. Identidade visual
Marca Bell Corpus = verde. Paleta em `:root` no `style.css` (`--verde #1e5c28`, `--verde-dark #133d1a`,
`--verde-accent #6ab820`, `--verde-claro #eaf6e4`, etc.). Header com gradiente verde, logo branco em
quadrado arredondado. NÃO usar roxo/rosa (paleta antiga, já removida).

## 3. Estrutura de navegação
6 abas de marca (`.nav-abas` é scrollável horizontal). Cada marca tem **3 peças paralelas**:
- `<button class="aba-btn" data-aba="X">` na nav
- `<div id="header-X">` com busca (+ filtros de categoria, se aplicável)
- `<main id="view-X">` com `#contato-X` (opcional), `#contagem-X`, `#grid-X`, `#vazio-X`

`initAbas()` (app.js) tem os mapas `views{}` e `headers{}`, alterna `.hidden`, e atualiza o título
via `MARCAS{ X: {titulo, sub} }`.

Abas atuais: `bellcorpus`, `glamour`, `depile`, `copag`, `panini`, `outros`.

## 4. Modelos de dados (cada marca = 1 array em app.js)
| Marca | Array | Card | Campos do produto |
|---|---|---|---|
| Bell Corpus | `DADOS` | custo DZ / 6 / 3 / 1 un + "venda ideal" | `{nome, preco_dz, cat}` |
| Glamour | `CATALOGO` | código + desc + à vista / a prazo | `{codigo, nome, tag, desc, cat, vista, prazo}` |
| Depile Plus | `DEPILE` | ref + preço único + tag categoria | `{ref, nome, cat, catNome, preco}` |
| Outros | `OUTROS` | nome + N blocos de preço | `{nome, cat, fornecedores:[{nome, preco}]}` |
| Panini | `PANINI` | idem Outros (usa Custo/Venda) | idem |
| Copag | `COPAG` | idem Outros | idem |

- **Bell Corpus:** preços derivados de `preco_dz` (÷2, ÷4, ÷12). Categorias renderizadas
  dinamicamente a partir de `cat`. "Venda ideal" = `FORMULA_VENDA_IDEAL` (atualmente `null` →
  mostra "a definir"; é sobre a **dúzia**). Suporta Google Sheets via `SHEETS_URL` (vazio = usa `DADOS`).
- **Glamour/Depile:** filtros de categoria são **fixos no HTML** (`data-cat`); o valor tem que
  bater com o campo `cat` do produto.
- **Outros/Panini/Copag:** compartilham `cardOutrosHtml(p)`. O array `fornecedores` vira blocos de
  preço lado a lado (1 a N). Use para "preço por fornecedor", "Custo/Venda", "cx/6 e cx/12", "dúzia/unidade".

## 5. Contatos de fornecedor (WhatsApp)
- Objeto `CONTATOS{}` + `MSG_WHATS = 'Oi, Vim pela Tabela do Alvaro'`.
- Cada entrada: `{nome, tel, email?}`. `tel` no formato **55 + DDD + 9 + 8 dígitos** (13 dígitos).
  ⚠️ Celular BR no wa.me PRECISA do 9 após o DDD. Confira sempre o tamanho.
- `renderContato(marca)` injeta o card em `#contato-X` com link `wa.me/<tel>?text=<MSG_WHATS>`.
- Tem contato: `bellcorpus, glamour, depile, copag`. (Copag também tem email.)

## 6. Receitas

### Adicionar produto
Inserir um objeto no array da marca (seção 4). Nada mais. Testar no preview, commitar.

### Adicionar/editar contato
`CONTATOS{}` + garantir `<div id="contato-X"></div>` no topo do `<main id="view-X">`.

### Adicionar uma marca nova (checklist completo)
1. `index.html`: `<button class="aba-btn" data-aba="X">`; bloco `#header-X` (copiar de outra);
   `<main id="view-X">` com `#contagem-X`, `#grid-X`, `#vazio-X` (+ `#contato-X` se tiver contato).
2. `app.js`: array de dados; `renderX()` + `initX()` (copiar de marca similar — reusar
   `cardOutrosHtml` se for preço simples/por-fornecedor); entrada em `MARCAS{}`; entradas em
   `views{}` e `headers{}` no `initAbas()`; chamar `renderX(); initX();` no `init()`.
3. `style.css`: adicionar `#busca-X` aos 2 seletores agrupados da busca (`#busca, #busca-cat, ...`).
4. Se a marca tem filtros de categoria, os botões `.cat-btn[data-cat]` vão no `#header-X`.

## 7. Convenções / armadilhas
- Helper `R$(v)` formata `R$ 1.234,56` (vírgula decimal pt-BR).
- IDs de busca já existentes: `busca, busca-cat, busca-depile, busca-panini, busca-copag, busca-outros`.
  Qualquer `#busca-*` novo TEM que entrar nos seletores CSS senão a barra fica sem estilo.
- Preview local: servidor `bell-corpus` no `.claude/launch.json` (porta 3456). Após editar, recarregar
  com cache busting. Iframes/preview do servidor às vezes não rolam sozinhos após `.click()`.
- Commits: mensagem em PT, terminar com `Co-Authored-By: Claude ...`. Branch `master`.
- Tabela vigente: **Abr/2026** (badge fixo no header, em `index.html`).

## 8. Pendências conhecidas
- **Fórmula do preço de venda ideal (Bell Corpus)** ainda não definida pelo usuário →
  `FORMULA_VENDA_IDEAL = null`. Quando ele passar (ex.: `preco_dz => preco_dz * 1.5`), basta
  preencher a constante no topo do `app.js`.
- Integração Google Sheets (`SHEETS_URL`) existe mas está desativada (string vazia) — todos os dados
  estão embutidos no `app.js`.
