// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO
// ─────────────────────────────────────────────────────────────

// Cole aqui a URL do Google Sheets publicado como CSV.
// Como publicar: Arquivo → Compartilhar → Publicar na web → CSV
// Deixe vazio ('') para usar os dados embutidos abaixo.
const SHEETS_URL = '';

// Fórmula do preço de venda ideal (calculado sobre o preço da DÚZIA).
// Exemplos:
//   preco_dz => preco_dz * 1.5          (50% de margem sobre custo)
//   preco_dz => preco_dz + 20           (markup fixo de R$20)
//   preco_dz => preco_dz / 0.65         (margem de 35% sobre venda)
// Deixe null até definir.
const FORMULA_VENDA_IDEAL = null;

// ─────────────────────────────────────────────────────────────
// DADOS EMBUTIDOS — Tabela Bell Corpus Abr/2026
// ─────────────────────────────────────────────────────────────
const DADOS = [
  // Bababell
  { nome: 'Sabonete Íntimo Bababell (Tutti-Frutti, Uva e Melancia) 200ml',              preco_dz: 36.20, cat: 'Bababell' },
  { nome: 'Sabonete Íntimo (Aroeira, Barbatimão, Morango, Menta, Ice-Black, Bell-Man) 200ml', preco_dz: 36.20, cat: 'Bababell' },
  { nome: 'Hidratante Corporal Bababell T.Frutti / Pistache / Pitaya / Tangerina 200g', preco_dz: 59.30, cat: 'Bababell' },
  { nome: 'Shampoo Bababell 380ml',                                                      preco_dz: 47.90, cat: 'Bababell' },
  { nome: 'Condicionador Bababell 380ml',                                                preco_dz: 47.90, cat: 'Bababell' },
  { nome: 'Máscara Bababell 500ml',                                                      preco_dz: 47.90, cat: 'Bababell' },
  { nome: 'Mousse Micelar Bababell T.Frutti e Rosa Mosqueta 150ml',                     preco_dz: 126.50, cat: 'Bababell' },
  { nome: 'Gel / Creme Aromatizante Morango e Menta 250g',                              preco_dz: 85.80, cat: 'Bababell' },
  { nome: 'Gelatina Bababell T.Frutti e I Love Cachos 500g',                            preco_dz: 103.40, cat: 'Bababell' },
  { nome: 'Óleo Reparador Bababell T.Frutti 60ml',                                      preco_dz: 88.00, cat: 'Bababell' },

  // Fruit Bell
  { nome: 'Água Micelar com Ácido Hialurônico 200ml',                                   preco_dz: 52.30,  cat: 'Fruit Bell' },
  { nome: 'Body Splash Fruit Bell 200ml (Ameixa, Arabian, Dubay, Passione, Vanilla Dreams)', preco_dz: 102.90, cat: 'Fruit Bell' },
  { nome: 'Body Splash Gliter Fruit Bell 200ml (Secrets Night / Secret Summer)',         preco_dz: 118.70, cat: 'Fruit Bell' },
  { nome: 'Esfoliante Fruit Bell 300ml (Ameixa, Melancia, T.Frutti, Tangerina)',        preco_dz: 79.20,  cat: 'Fruit Bell' },
  { nome: 'Hidratante Fruit Bell 200ml (Ameixa, Melancia, T.Frutti, Tangerina)',        preco_dz: 63.80,  cat: 'Fruit Bell' },
  { nome: 'Sabonete Líquido Corpo e Rosto Fruit Bell 200ml',                            preco_dz: 63.80,  cat: 'Fruit Bell' },
  { nome: 'Sabonete Líquido 500ml (Alfazema / Aroeira / Erva Doce)',                    preco_dz: 64.90,  cat: 'Fruit Bell' },

  // Géis & Pomadas
  { nome: 'Gel (Preto, Branco, Black, Azul, Copaíba, 17E, 27E) 200–240g',              preco_dz: 36.20, cat: 'Géis & Pomadas' },
  { nome: 'Gel 30 Ervas 300g',                                                           preco_dz: 72.10, cat: 'Géis & Pomadas' },
  { nome: 'Gel Alecrim Super Refrescante 100g',                                          preco_dz: 64.90, cat: 'Géis & Pomadas' },
  { nome: 'Natgel Bisnaga 150g / Pomada Super Premium Bisnaga 150g',                    preco_dz: 71.50, cat: 'Géis & Pomadas' },
  { nome: 'Gel Redutor de Medidas 200g',                                                 preco_dz: 67.70, cat: 'Géis & Pomadas' },
  { nome: 'Pomada Canela de Velho 150g Bisnaga / Pomada Fortbell 150g Bisnaga',         preco_dz: 46.20, cat: 'Géis & Pomadas' },
  { nome: 'Gel Canela de Velho 250g Pote',                                               preco_dz: 47.30, cat: 'Géis & Pomadas' },
  { nome: 'Natgel Spray 120ml / Gel 30 Ervas Spray 120ml',                              preco_dz: 69.30, cat: 'Géis & Pomadas' },

  // Corpo & Saúde
  { nome: 'Castanha da Índia 250g — Creme para as Pernas',                              preco_dz: 42.40, cat: 'Corpo & Saúde' },
  { nome: 'Cartilagem de Tubarão 240g',                                                  preco_dz: 36.20, cat: 'Corpo & Saúde' },
  { nome: 'Esfoliante Hidratapé 200g',                                                   preco_dz: 69.90, cat: 'Corpo & Saúde' },
  { nome: 'Hidratante Corporal (Amêndoas, Aveia e Mel, Elastina, Frutas Vermelhas, Rosa Mosqueta, Talco, Vit.E) 200g', preco_dz: 59.30, cat: 'Corpo & Saúde' },
  { nome: 'Sebo de Carneiro Bisnaga 200g / Pote 240g',                                  preco_dz: 48.40, cat: 'Corpo & Saúde' },
  { nome: 'Gotinha Milagrosa — Loção Hidratante para Pés 30ml',                         preco_dz: 35.80, cat: 'Corpo & Saúde' },
  { nome: 'Bell Creme',                                                                   preco_dz: 39.60, cat: 'Corpo & Saúde' },

  // Cabelos
  { nome: 'Shampoo 380ml — Demais Fragrâncias',                                          preco_dz: 47.90, cat: 'Cabelos' },
  { nome: 'Condicionador 380ml — Demais Fragrâncias',                                   preco_dz: 47.90, cat: 'Cabelos' },
  { nome: 'Máscara 500ml — Demais Fragrâncias',                                          preco_dz: 47.90, cat: 'Cabelos' },
  { nome: 'Shampoo / Condicionador Bell Man Anticaspa',                                  preco_dz: 47.90, cat: 'Cabelos' },
  { nome: 'Leave-In Finalizador 200ml — Todas as Fragrâncias',                          preco_dz: 63.80, cat: 'Cabelos' },
  { nome: 'Leite Siliconizado Sem Enxague 400g',                                         preco_dz: 57.80, cat: 'Cabelos' },
  { nome: 'Kit Piolho c/ Pente Fino (Shampoo + Condicionador + Pente)',                 preco_dz: 128.70, cat: 'Cabelos' },
  { nome: 'Spray Cachos Perfeitos / Liso Imediato',                                      preco_dz: 110.00, cat: 'Cabelos' },
  { nome: 'Óleo de Mamona Spray 60ml',                                                   preco_dz: 69.30, cat: 'Cabelos' },
  { nome: 'Óleo Reparador Argan, Coco e Rícino 60ml',                                   preco_dz: 90.80, cat: 'Cabelos' },
  { nome: 'Óleo de Menta 10ml (caixa com 3 dúzias)',                                    preco_dz: 35.20, cat: 'Cabelos' },
  { nome: 'Shampoo / Condicionador 1 Litro — Liso e Bomba',                             preco_dz: 180.00, cat: 'Cabelos' },
  { nome: 'Máscara 1kg — Liso e Bomba',                                                  preco_dz: 180.00, cat: 'Cabelos' },
  { nome: 'Spray Finalizador (Cavalo Preto / Banho Brilhante / Liso / Penteia Cabelo)', preco_dz: 75.00, cat: 'Cabelos' },
];

// ─────────────────────────────────────────────────────────────
// UTILITÁRIOS
// ─────────────────────────────────────────────────────────────
const R$ = v => 'R$ ' + v.toFixed(2).replace('.', ',');

function parseCsv(csv) {
  const linhas = csv.trim().split('\n');
  const headers = linhas[0].split(',').map(h => h.trim().replace(/"/g, '').toLowerCase());
  return linhas.slice(1)
    .map(linha => {
      const cols = linha.split(',').map(c => c.trim().replace(/"/g, ''));
      const obj = {};
      headers.forEach((h, i) => obj[h] = cols[i] ?? '');
      return {
        nome:     obj.nome || '',
        preco_dz: parseFloat(obj.preco_dz) || 0,
        cat:      obj.categoria || 'Geral',
        foto:     obj.foto || '',
        ativo:    (obj.ativo || 'sim').toLowerCase() !== 'nao',
      };
    })
    .filter(p => p.nome && p.ativo && p.preco_dz > 0);
}

// ─────────────────────────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────────────────────────
let todos = [];
let catAtiva = 'todas';
let termoBusca = '';

// ─────────────────────────────────────────────────────────────
// RENDER — CATEGORIAS
// ─────────────────────────────────────────────────────────────
function renderCategorias() {
  const cats = ['todas', ...new Set(todos.map(p => p.cat))];
  const el = document.getElementById('categorias');
  el.innerHTML = cats.map(c => `
    <button class="cat-btn${c === catAtiva ? ' active' : ''}" data-cat="${c}">
      ${c === 'todas' ? 'Todas' : c}
    </button>`).join('');
  el.querySelectorAll('.cat-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      catAtiva = btn.dataset.cat;
      renderCategorias();
      renderGrid();
    })
  );
}

// ─────────────────────────────────────────────────────────────
// RENDER — CARDS
// ─────────────────────────────────────────────────────────────
function cardHtml(p) {
  const dz   = p.preco_dz;
  const seis = dz / 2;
  const tres = dz / 4;
  const um   = dz / 12;

  let venda = null;
  if (FORMULA_VENDA_IDEAL) {
    try { venda = FORMULA_VENDA_IDEAL(dz); } catch {}
  }

  const foto = p.foto
    ? `<img src="${p.foto}" alt="${p.nome}" loading="lazy">`
    : `<span class="foto-placeholder">📦</span>`;

  return `
    <div class="card">
      <div class="card-topo">
        <div class="foto-wrap">${foto}</div>
        <div class="card-info">
          <div class="card-nome">${p.nome}</div>
          <span class="card-cat">${p.cat}</span>
        </div>
      </div>

      <div class="card-custos">
        <div class="bloco-titulo">Custo de compra</div>
        <div class="preco-linha dz">
          <span class="preco-label">Dúzia (12 un)</span>
          <span class="preco-valor">${R$(dz)}</span>
        </div>
        <div class="preco-linha">
          <span class="preco-label">6 unidades</span>
          <span class="preco-valor">${R$(seis)}</span>
        </div>
        <div class="preco-linha">
          <span class="preco-label">3 unidades</span>
          <span class="preco-valor">${R$(tres)}</span>
        </div>
        <div class="preco-linha">
          <span class="preco-label">1 unidade</span>
          <span class="preco-valor">${R$(um)}</span>
        </div>
      </div>

      <div class="card-venda">
        <div class="venda-label">
          Venda ideal
          <small>por dúzia</small>
        </div>
        ${venda !== null
          ? `<span class="venda-valor">${R$(venda)}</span>`
          : `<span class="venda-valor pendente">a definir</span>`}
      </div>
    </div>`;
}

function renderGrid() {
  const grid   = document.getElementById('grid');
  const vazio  = document.getElementById('vazio');
  const contagem = document.getElementById('contagem');
  const termo  = termoBusca.toLowerCase();

  const filtrados = todos.filter(p =>
    (catAtiva === 'todas' || p.cat === catAtiva) &&
    (!termo || p.nome.toLowerCase().includes(termo) || p.cat.toLowerCase().includes(termo))
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }

  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardHtml).join('');
}

// ─────────────────────────────────────────────────────────────
// BUSCA
// ─────────────────────────────────────────────────────────────
function initBusca() {
  const input = document.getElementById('busca');
  const clearBtn = document.getElementById('clear-busca');

  input.addEventListener('input', () => {
    termoBusca = input.value;
    clearBtn.classList.toggle('hidden', !termoBusca);
    renderGrid();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    termoBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderGrid();
  });
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
async function init() {
  const loading = document.getElementById('loading');

  if (SHEETS_URL) {
    try {
      const r = await fetch(SHEETS_URL);
      const csv = await r.text();
      todos = parseCsv(csv);
    } catch {
      console.warn('Sheets indisponível, usando dados embutidos.');
      todos = DADOS;
    }
  } else {
    todos = DADOS;
  }

  loading.classList.add('hidden');
  renderCategorias();
  renderGrid();
  initBusca();
}

init();
