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
// CATÁLOGO — DADOS
// ─────────────────────────────────────────────────────────────
const CATALOGO = [
  {codigo:"323", nome:"Kit Hidratação",                    tag:"3 peças",              desc:"Shampoo Hidratante + Máscara Hidratante + Defrizante. Leite Siliconado.",                                         cat:"hidratacao", vista:54.99, prazo:58.50},
  {codigo:"322", nome:"Kit Hidratação com Escova",         tag:"3 peças + escova",     desc:"Kit Hidratação completo acompanhado de escova capilar.",                                                           cat:"hidratacao", vista:64.39, prazo:68.50},
  {codigo:"305", nome:"Kit Liso Perfeito",                 tag:"3 peças · 1 litro",    desc:"Máscara Hidratante + Shampoo Reparador + Defrizante. 12 benefícios.",                                             cat:"liso",       vista:54.99, prazo:58.50},
  {codigo:"320", nome:"Kit Liso Perfeito com Escova",      tag:"3 peças + escova",     desc:"Kit Liso Perfeito completo acompanhado de escova capilar.",                                                        cat:"liso",       vista:64.39, prazo:68.50},
  {codigo:"315", nome:"Kit Liso Perfeito c/ Body Splash",  tag:"3 peças + body splash",desc:"Kit Liso Perfeito com Body Splash incluso.",                                                                       cat:"liso",       vista:62.50, prazo:66.49},
  {codigo:"307", nome:"Kit Cachos Perfeitos",              tag:"3 peças · 1 litro",    desc:"Shampoo + Máscara + Ativador de Cachos. 10 benefícios.",                                                          cat:"cachos",     vista:54.99, prazo:58.50},
  {codigo:"312", nome:"Kit Nutrição",                      tag:"3 peças · 1 litro",    desc:"Shampoo Fortalecedor + Máscara Fortalecedora + Defrizante. Pantenol, pró-vitaminas B5, queratina, arginina.",    cat:"nutricao",   vista:54.99, prazo:58.50},
  {codigo:"298", nome:"Kit 3 Máscaras Cronograma 2kg",     tag:"3 potes · 2kg cada",   desc:"Pós Química + Restauração dos Fios + Nutrição Capilar.",                                                          cat:"nutricao",   vista:98.60, prazo:104.98},
  {codigo:"83",  nome:"Moxil Turbo · Blend Pro A e B5",    tag:"tônico capilar",       desc:"Estimulante do crescimento de barba, cabelo e bigode.",                                                            cat:"crescimento",vista:46.90, prazo:49.90},
  {codigo:"13",  nome:"Kit Óleo Argan",                    tag:"12 unidades · 60ml",   desc:"Argan Oil Repair — Reparador de Pontas.",                                                                          cat:"tratamento", vista:89.29, prazo:94.99},
  {codigo:"281", nome:"Kit Paradox Prime",                 tag:"4 peças",              desc:"Hair Nutrition System. Shampoo + Máscara + Defrizante + Spray. Rejuvenescimento capilar.",                        cat:"tratamento", vista:58.99, prazo:62.75},
  {codigo:"290", nome:"Kit Cronograma Capilar 4 Passos",   tag:"4 × 500ml",            desc:"Shampoo + Reconstrução + Hidratação + Nutrição Capilar.",                                                          cat:"nutricao",   vista:46.95, prazo:49.95},
  {codigo:"292", nome:"Kit Perfume Corporal c/6",          tag:"6 unidades · 100ml",   desc:"Paradox · Smooth Million · Smell Scandal · Urban Silver · Sweet Girl.",                                           cat:"perfume",    vista:101.46,prazo:107.94},
  {codigo:"284", nome:"Monovin Pro A e B5 · 4 Passos",     tag:"4 peças",              desc:"Máscara Hidratante + Shampoo Nutritivo + Leave-in + Moxil Turbo. Vitaminas A e B5.",                             cat:"tratamento", vista:62.50, prazo:66.49},
  {codigo:"79",  nome:"Monovin Pro A e B5 · 3 Passos",     tag:"3 peças",              desc:"Máscara Hidratante + Shampoo Nutritivo + Moxil Turbo. Vitaminas A e B5.",                                        cat:"tratamento", vista:44.98, prazo:47.85},
  {codigo:"265", nome:"Perfume Capilar · Kit 10un",        tag:"10 unidades · 5 fragrâncias",desc:"Cabelos cheirosos, leves e marcantes. 5 fragrâncias diferentes.",                                           cat:"perfume",    vista:79.90, prazo:85.00},
  {codigo:"269", nome:"Sebo de Carneiro c/ Ureia · Kit 6", tag:"6 unidades · 250ml",   desc:"Creme para pés, mãos e cotovelos. Previne aspereza e ressecamento.",                                             cat:"outros",     vista:46.90, prazo:49.90},
  {codigo:"257", nome:"Banho de Colágeno",                 tag:"3 peças",              desc:"Shampoo Reparador + SOS Reconstrutor Instantâneo + Máscara Reconstrutora. Resultado desde a 1ª lavagem.",        cat:"tratamento", vista:51.98, prazo:55.30},
  {codigo:"260", nome:"Kit Pistache",                      tag:"3 peças · 1 litro",    desc:"Máscara Reconstrutora + Shampoo Reparador + Tônico. Reduz queda, fortalece e garante brilho.",                  cat:"tratamento", vista:44.98, prazo:47.85},
  {codigo:"264", nome:"Sweet Life · Linha Completa",       tag:"3 peças",              desc:"Reparação pós colorações, progressivas e processos químicos. Cabelos com frizz e opacos.",                        cat:"tratamento", vista:58.99, prazo:62.75},
  {codigo:"262", nome:"Lumière Blond Matizador",           tag:"3 peças · 500ml",      desc:"Matiza os tons loiro e elimina o alaranjado. Pós-química.",                                                       cat:"tratamento", vista:34.68, prazo:36.90},
  {codigo:"231", nome:"Bio Therapy Cauter",                tag:"3 peças",              desc:"Máscara + Spray Keratin + Shampoo Purificante. Repara, devolve brilho e protege do calor.",                      cat:"tratamento", vista:51.98, prazo:55.30},
  {codigo:"244", nome:"Kit Body Splash · 6 unidades",      tag:"6 un · 3 fragrâncias", desc:"Smell Scandal + Smooth Million + Sweet Girl. 200ml cada.",                                                        cat:"perfume",    vista:104.90,prazo:111.60},
  {codigo:"105", nome:"Cresce Mais · Kit 1 Litro",         tag:"3 peças · 1 litro",    desc:"Máscara Hidratante + Shampoo Nutritivo + Tônico Capilar. Blend Vit A e B5.",                                    cat:"crescimento",vista:44.98, prazo:47.85},
  {codigo:"KIT4",nome:"Cresce Mais · Kit 500ml",           tag:"3 peças · 500ml",      desc:"Shampoo Nutritivo + Máscara Hidratante + Tônico Capilar. 500ml.",                                               cat:"crescimento",vista:29.99, prazo:31.90},
  {codigo:"107", nome:"Cresce Mais Cachos · 1 Litro",      tag:"3 peças · linha vegana",desc:"Máscara + Shampoo Linha Vegana + Ativador. Cachos definidos e modelados.",                                      cat:"cachos",     vista:44.98, prazo:47.85},
  {codigo:"02",  nome:"Cresce Mais Cachos · 500ml",        tag:"2 peças · linha vegana",desc:"Shampoo + Ativador Linha Vegana. 500ml.",                                                                        cat:"cachos",     vista:29.99, prazo:31.90},
  {codigo:"113", nome:"Kit Tônico Cresce Mais · 6un",      tag:"6 unidades · 100ml",   desc:"Tônico Capilar A, B5 e D-Pantenol. Estimula crescimento intenso de fios, barba e bigode.",                      cat:"crescimento",vista:46.90, prazo:49.90},
  {codigo:"3",   nome:"Kit Banana e Mel",                  tag:"2 peças · 1 litro",    desc:"Máscara de Hidratação + Shampoo Hidratante. Hidratação profunda, nutrição intensa.",                             cat:"hidratacao", vista:33.82, prazo:35.98},
  {codigo:"11",  nome:"Kit Fruit Therapy Coco",            tag:"2 peças · 1 litro",    desc:"Máscara + Shampoo Umectante. Óleo de coco, manteiga de karité e aminoácidos.",                                  cat:"hidratacao", vista:33.82, prazo:35.98},
  {codigo:"16",  nome:"Kit Fruit Therapy Abacate",         tag:"2 peças · 1 litro",    desc:"Máscara + Shampoo Hidratante. Nutrição intensa, elimina frizz, extrato de abacate.",                            cat:"hidratacao", vista:33.82, prazo:35.98},
  {codigo:"27",  nome:"Kit Babosa · 2 Passos",             tag:"2 peças · 1 litro",    desc:"Máscara + Shampoo Restauração Profunda. Ideal para cabelos danificados e quebradiços.",                          cat:"hidratacao", vista:33.82, prazo:35.98},
  {codigo:"237", nome:"Kit Babosa · 3 Passos",             tag:"3 peças",              desc:"Máscara + Shampoo + Finalizador. Efeito restaurador e hidratante.",                                               cat:"hidratacao", vista:44.98, prazo:47.85},
  {codigo:"26",  nome:"Kit Bamboo",                        tag:"2 peças · 1 litro",    desc:"Shampoo Nutritivo + Máscara Reconstrutora. Silicone e extrato de bambu.",                                        cat:"hidratacao", vista:33.82, prazo:35.98},
  {codigo:"206", nome:"Kit Uso Obrigatório",               tag:"3 peças · 1 litro",    desc:"Shampoo Nutrition + Máscara Restore + Magic Repair Finish. Nutrição intensa e proteção térmica.",               cat:"tratamento", vista:44.98, prazo:47.85},
  {codigo:"117", nome:"Plástica dos Fios",                 tag:"3 peças",              desc:"Shampoo + Máscara SOS + Óleo Bifásico. Redução de volume, realinhamento capilar.",                               cat:"liso",       vista:47.93, prazo:50.99},
  {codigo:"119", nome:"Desmaia Cabelo",                    tag:"3 peças",              desc:"Máscara Reconstrutora + Shampoo Reconstrutora + Defrizante. Controla frizz, proteção térmica.",                  cat:"tratamento", vista:47.93, prazo:50.99},
  {codigo:"151", nome:"Banho de Verniz",                   tag:"3 peças",              desc:"Shampoo + Máscara Brilho Intenso + Finish Touch. Óleo de Goji Berry, ação antioxidante.",                       cat:"tratamento", vista:47.93, prazo:50.99},
  {codigo:"142", nome:"Kit Baba de Quiabo",                tag:"3 peças",              desc:"Máscara + Shampoo + Finalizador Bifásico. Hidratação intensa, brilho e maciez.",                                 cat:"tratamento", vista:47.93, prazo:50.99},
  {codigo:"10",  nome:"Kit Botox Mais Liso",               tag:"2 peças · 1 litro",    desc:"Botox Shampoo + Botox Reestruturador. 0% formol. Efeito liso duradouro.",                                        cat:"liso",       vista:53.49, prazo:56.90},
  {codigo:"6",   nome:"Kit Progressiva Evolux Peônia",     tag:"2 peças · 1 litro",    desc:"Shampoo Nutritivo + Amino Reestruturador. Sem formol, reduz volume com brilho.",                                 cat:"liso",       vista:58.75, prazo:62.50},
];

// ─────────────────────────────────────────────────────────────
// CATÁLOGO — ESTADO E RENDER
// ─────────────────────────────────────────────────────────────
let catFiltro = 'todos';
let catBusca  = '';

function cardCatHtml(p) {
  return `
    <div class="card-cat">
      <div class="card-cat-header">
        <div class="card-cat-codigo">Cód. ${p.codigo}</div>
        <div class="card-cat-nome">${p.nome}</div>
        <span class="card-cat-tag">${p.tag}</span>
      </div>
      <div class="card-cat-body">
        <div class="card-cat-desc">${p.desc}</div>
        <div class="card-cat-precos">
          <div class="preco-bloco">
            <div class="preco-bloco-label">À vista</div>
            <div class="preco-bloco-val">${R$(p.vista)}</div>
          </div>
          <div class="preco-bloco prazo">
            <div class="preco-bloco-label">A prazo</div>
            <div class="preco-bloco-val">${R$(p.prazo)}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderCatalogo() {
  const grid    = document.getElementById('grid-cat');
  const vazio   = document.getElementById('vazio-cat');
  const contagem = document.getElementById('contagem-cat');
  const termo   = catBusca.toLowerCase();

  const filtrados = CATALOGO.filter(p =>
    (catFiltro === 'todos' || p.cat === catFiltro) &&
    (!termo || p.nome.toLowerCase().includes(termo) ||
               p.desc.toLowerCase().includes(termo) ||
               p.codigo.toLowerCase().includes(termo))
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }
  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardCatHtml).join('');
}

function initCatalogo() {
  // Filtros
  document.getElementById('filtros-cat').querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('filtros-cat').querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      catFiltro = btn.dataset.cat;
      renderCatalogo();
    });
  });

  // Busca
  const input    = document.getElementById('busca-cat');
  const clearBtn = document.getElementById('clear-busca-cat');
  input.addEventListener('input', () => {
    catBusca = input.value;
    clearBtn.classList.toggle('hidden', !catBusca);
    renderCatalogo();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    catBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderCatalogo();
  });
}

// ─────────────────────────────────────────────────────────────
// DEPILE PLUS — DADOS
// ─────────────────────────────────────────────────────────────
const DEPILE = [
  // Cera 600g (cx/24)
  { ref:'-',   nome:'Kit Cera 600g',         cat:'cera600', catNome:'Cera 600g',  preco:21.67 },
  { ref:'8',   nome:'Mel 600g',            cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'7',   nome:'Camomila 600g',        cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'9',   nome:'Algas Marinhas 600g',  cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'11',  nome:'Hortelã 600g',         cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'10',  nome:'Extra Menta 600g',     cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'21',  nome:'Maracujá 600g',        cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'22',  nome:'Argan 600g',           cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'24',  nome:'Cravo 600g',           cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'992', nome:'Rosa Mosqueta 600g',   cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'991', nome:'Diamante Negro 600g',  cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'993', nome:'Power Men 600g',       cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'42',  nome:'Chocolate 600g',       cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  { ref:'23',  nome:'Canela 600g',          cat:'cera600', catNome:'Cera 600g',  preco:7.65 },
  // Cera 290g (cx/24)
  { ref:'1',   nome:'Mel 290g',             cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'2',   nome:'Camomila 290g',        cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'5',   nome:'Algas Marinhas 290g',  cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'3',   nome:'Hortelã 290g',         cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'-',   nome:'Rosa Mosqueta 290g',   cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'4',   nome:'Extra Menta 290g',     cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'6',   nome:'Canela 290g',          cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'25',  nome:'Cravo 290g',           cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'41',  nome:'Chocolate 290g',       cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'994', nome:'Power Men 290g',       cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'27',  nome:'Argan 290g',           cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  { ref:'26',  nome:'Maracujá 290g',        cat:'cera290', catNome:'Cera 290g',  preco:4.32 },
  // Roll-on 140g (cx/24)
  { ref:'13',  nome:'Roll-on Mel 140g',           cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'12',  nome:'Roll-on Camomila 140g',       cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'14',  nome:'Roll-on Algas Marinhas 140g', cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'16',  nome:'Roll-on Hortelã 140g',        cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'15',  nome:'Roll-on Extra Menta 140g',    cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'19',  nome:'Roll-on For Men 140g',         cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'30',  nome:'Roll-on Cravo 140g',           cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'31',  nome:'Roll-on Canela 140g',          cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'28',  nome:'Roll-on Maracujá 140g',        cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  { ref:'29',  nome:'Roll-on Argan 140g',           cat:'rollon', catNome:'Roll-on 140g', preco:3.98 },
  // Cera em Barra
  { ref:'89',   nome:'Cera em Barra Negra 1Kg',          cat:'barra', catNome:'Cera em Barra', preco:29.00 },
  { ref:'34',   nome:'Cera em Barra Mel 1Kg',            cat:'barra', catNome:'Cera em Barra', preco:29.00 },
  { ref:'88',   nome:'Cera em Barra Algas Marinhas 1Kg', cat:'barra', catNome:'Cera em Barra', preco:29.00 },
  { ref:'92',   nome:'Cera em Barra Negra 500g',         cat:'barra', catNome:'Cera em Barra', preco:17.00 },
  { ref:'90',   nome:'Cera em Barra Mel 500g',           cat:'barra', catNome:'Cera em Barra', preco:17.00 },
  { ref:'91',   nome:'Cera em Barra Algas Marinhas 500g',cat:'barra', catNome:'Cera em Barra', preco:17.00 },
  { ref:'4774', nome:'Cera em Barra Negra 250g',         cat:'barra', catNome:'Cera em Barra', preco:11.00 },
  { ref:'4772', nome:'Cera em Barra Mel 250g',           cat:'barra', catNome:'Cera em Barra', preco:11.00 },
  { ref:'4773', nome:'Cera em Barra Algas Marinhas 250g',cat:'barra', catNome:'Cera em Barra', preco:11.00 },
  // Papel Depilatório
  { ref:'17', nome:'Papel Depilatório c/20 TNT',      cat:'papel', catNome:'Papel Dep.',  preco:2.48  },
  { ref:'18', nome:'Papel Depilatório c/50 TNT',      cat:'papel', catNome:'Papel Dep.',  preco:6.00  },
  { ref:'44', nome:'Papel Depilatório c/100 TNT',     cat:'papel', catNome:'Papel Dep.',  preco:11.64 },
  { ref:'43', nome:'Papel Depilatório Rolo 50m TNT',  cat:'papel', catNome:'Papel Dep.',  preco:15.98 },
  // Espátula
  { ref:'33',  nome:'Espátula de Madeira c/15',   cat:'espatula', catNome:'Espátula', preco:2.38 },
  { ref:'105', nome:'Espátula de Madeira c/100',  cat:'espatula', catNome:'Espátula', preco:9.60 },
  // Folhas Prontas
  { ref:'838', nome:'Folhas Prontas Facial 16un',         cat:'folhas', catNome:'Folhas Prontas', preco:6.48  },
  { ref:'839', nome:'Folhas Prontas Pernas e Braços 16un',cat:'folhas', catNome:'Folhas Prontas', preco:10.68 },
  // Parafina Miss Bronze
  { ref:'56',  nome:'Parafina Urucum 200g',    cat:'parafina', catNome:'Parafina', preco:14.00 },
  { ref:'519', nome:'Parafina Cenoura 200g',   cat:'parafina', catNome:'Parafina', preco:14.00 },
  { ref:'58',  nome:'Parafina Beterraba 200g', cat:'parafina', catNome:'Parafina', preco:14.00 },
  { ref:'59',  nome:'Parafina Urucum 340g',    cat:'parafina', catNome:'Parafina', preco:19.20 },
  { ref:'900', nome:'Parafina Cenoura 340g',   cat:'parafina', catNome:'Parafina', preco:19.20 },
  { ref:'523', nome:'Parafina Beterraba 340g', cat:'parafina', catNome:'Parafina', preco:19.20 },
  // Diversos
  { ref:'32',   nome:'Nutre Creme dos Pés 110g',              cat:'diversos', catNome:'Diversos', preco:13.28 },
  { ref:'4795', nome:'Talco Dolomita 200g',                   cat:'diversos', catNome:'Diversos', preco:3.60  },
  { ref:'525',  nome:'Talco Dolomita 1Kg',                    cat:'diversos', catNome:'Diversos', preco:9.60  },
  { ref:'5026', nome:'Amolecedor de Cutículas 150ml',         cat:'diversos', catNome:'Diversos', preco:4.50  },
  { ref:'793',  nome:'Sabonete Líquido Frutas Vermelhas 500ml',cat:'diversos', catNome:'Diversos', preco:7.90 },
  { ref:'795',  nome:'Sabonete Líquido Erva Doce 500ml',      cat:'diversos', catNome:'Diversos', preco:7.90  },
  { ref:'794',  nome:'Sabonete Líquido Maçã Verde 500ml',     cat:'diversos', catNome:'Diversos', preco:7.90  },
  { ref:'4796', nome:'Óleo Removedor Algodão 100ml',          cat:'diversos', catNome:'Diversos', preco:5.20  },
  { ref:'705',  nome:'Óleo Removedor Algodão 500ml',          cat:'diversos', catNome:'Diversos', preco:14.60 },
  { ref:'704',  nome:'Óleo Rosa Mosqueta Puro 60ml',          cat:'diversos', catNome:'Diversos', preco:13.60 },
  { ref:'4787', nome:'Óleo Coco Puro Capilar 100ml',          cat:'diversos', catNome:'Diversos', preco:10.20 },
];

// ─────────────────────────────────────────────────────────────
// DEPILE PLUS — RENDER
// ─────────────────────────────────────────────────────────────
let depileFiltro = 'todas';
let depileBusca  = '';

function cardDepileHtml(p) {
  return `
    <div class="card-depile">
      <div class="card-depile-left">
        <div class="card-depile-ref">Ref. ${p.ref}</div>
        <div class="card-depile-nome">${p.nome}</div>
      </div>
      <div class="card-depile-right">
        <span class="card-depile-cat">${p.catNome}</span>
        <div class="card-depile-preco">${R$(p.preco)}</div>
      </div>
    </div>`;
}

function renderDepile() {
  const grid     = document.getElementById('grid-depile');
  const vazio    = document.getElementById('vazio-depile');
  const contagem = document.getElementById('contagem-depile');
  const termo    = depileBusca.toLowerCase();

  const filtrados = DEPILE.filter(p =>
    (depileFiltro === 'todas' || p.cat === depileFiltro) &&
    (!termo || p.nome.toLowerCase().includes(termo) ||
               p.ref.toLowerCase().includes(termo) ||
               p.catNome.toLowerCase().includes(termo))
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }
  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardDepileHtml).join('');
}

function initDepile() {
  document.getElementById('filtros-depile').querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('filtros-depile').querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      depileFiltro = btn.dataset.cat;
      renderDepile();
    });
  });

  const input    = document.getElementById('busca-depile');
  const clearBtn = document.getElementById('clear-busca-depile');
  input.addEventListener('input', () => {
    depileBusca = input.value;
    clearBtn.classList.toggle('hidden', !depileBusca);
    renderDepile();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    depileBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderDepile();
  });
}

// ─────────────────────────────────────────────────────────────
// COPAG — DADOS
// ─────────────────────────────────────────────────────────────
const COPAG = [
  { nome: 'Blister Unitário Pokémon ME03 Equilíbrio Perfeito',          cat: 'Pokémon', fornecedores: [{ nome: 'Custo', preco: 8.26   }] },
  { nome: 'Box Display Pokémon Mega Evolução E03 Equilíbrio Perfeito',   cat: 'Pokémon', fornecedores: [{ nome: 'Custo', preco: 297.22 }] },
];

// ─────────────────────────────────────────────────────────────
// COPAG — RENDER
// ─────────────────────────────────────────────────────────────
let copagBusca = '';

function renderCopag() {
  const grid     = document.getElementById('grid-copag');
  const vazio    = document.getElementById('vazio-copag');
  const contagem = document.getElementById('contagem-copag');
  const termo    = copagBusca.toLowerCase();

  const filtrados = COPAG.filter(p =>
    !termo || p.nome.toLowerCase().includes(termo) || p.cat.toLowerCase().includes(termo)
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }
  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardOutrosHtml).join('');
}

function initCopag() {
  const input    = document.getElementById('busca-copag');
  const clearBtn = document.getElementById('clear-busca-copag');
  input.addEventListener('input', () => {
    copagBusca = input.value;
    clearBtn.classList.toggle('hidden', !copagBusca);
    renderCopag();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    copagBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderCopag();
  });
}

// ─────────────────────────────────────────────────────────────
// PANINI — DADOS
// ─────────────────────────────────────────────────────────────
const PANINI = [
  { nome: 'Álbum Dourado',              cat: 'Álbuns',     fornecedores: [{ nome: 'Custo', preco: 63.92 }, { nome: 'Venda', preco: 70.00 }] },
  { nome: 'Álbum Prata',                cat: 'Álbuns',     fornecedores: [{ nome: 'Custo', preco: 63.92 }, { nome: 'Venda', preco: 70.00 }] },
  { nome: 'Álbum Capa Dura Normal',     cat: 'Álbuns',     fornecedores: [{ nome: 'Custo', preco: 59.92 }, { nome: 'Venda', preco: 65.00 }] },
  { nome: 'Álbum Normal',               cat: 'Álbuns',     fornecedores: [{ nome: 'Custo', preco: 19.92 }, { nome: 'Venda', preco: 22.00 }] },
  { nome: 'Blister de Figurinhas',      cat: 'Figurinhas', fornecedores: [{ nome: 'Custo', preco: 67.20 }] },
  { nome: 'Pacote de Figurinha Unidade',cat: 'Figurinhas', fornecedores: [{ nome: 'Custo', preco:  5.60 }, { nome: 'Venda', preco: 6.00 }] },
  { nome: 'Box Sacola',                 cat: 'Box',        fornecedores: [{ nome: 'Custo', preco: 187.92 }] },
  { nome: 'Box Luva / Dourado',         cat: 'Box',        fornecedores: [{ nome: 'Custo', preco: 287.92 }] },
];

// ─────────────────────────────────────────────────────────────
// PANINI — RENDER
// ─────────────────────────────────────────────────────────────
let paniniBusca = '';

function renderPanini() {
  const grid     = document.getElementById('grid-panini');
  const vazio    = document.getElementById('vazio-panini');
  const contagem = document.getElementById('contagem-panini');
  const termo    = paniniBusca.toLowerCase();

  const filtrados = PANINI.filter(p =>
    !termo || p.nome.toLowerCase().includes(termo) || p.cat.toLowerCase().includes(termo)
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }
  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardOutrosHtml).join('');
}

function initPanini() {
  const input    = document.getElementById('busca-panini');
  const clearBtn = document.getElementById('clear-busca-panini');
  input.addEventListener('input', () => {
    paniniBusca = input.value;
    clearBtn.classList.toggle('hidden', !paniniBusca);
    renderPanini();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    paniniBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderPanini();
  });
}

// ─────────────────────────────────────────────────────────────
// OUTROS — DADOS
// ─────────────────────────────────────────────────────────────
const OUTROS = [
  {
    nome: 'Lençol Solteiro Liso', cat: 'Lençóis',
    fornecedores: [
      { nome: 'Eduardo', preco: 22.00 },
      { nome: 'Fred',    preco: 21.00 },
    ]
  },
  {
    nome: 'Lençol Casal Liso', cat: 'Lençóis',
    fornecedores: [
      { nome: 'Eduardo', preco: 31.50 },
      { nome: 'Fred',    preco: 30.00 },
    ]
  },
  {
    nome: 'Lençol Queen Liso', cat: 'Lençóis',
    fornecedores: [
      { nome: 'Eduardo', preco: 35.50 },
      { nome: 'Fred',    preco: 32.00 },
    ]
  },
  { nome: 'Fronha',             preco: 33.60, cat: 'Lençóis', fornecedores: [{ nome: 'Eduardo', preco: 33.60 }] },
  { nome: 'Colcha de Retalhos', preco: 60.00, cat: 'Colchas', fornecedores: [{ nome: 'Eduardo', preco: 60.00 }] },
  {
    nome: 'Biscoito de Doce e Sal', cat: 'Biscoitos',
    fornecedores: [
      { nome: 'Cx/6',  preco: 34.00 },
      { nome: 'Cx/12', preco: 60.00 },
    ]
  },
  { nome: 'Kit Rachaduras', cat: 'Saúde', fornecedores: [{ nome: 'Preço', preco: 7.61 }] },
  { nome: 'Kit Cera 600g', cat: 'Depilação', fornecedores: [{ nome: 'Preço', preco: 21.67 }] },
  {
    nome: 'Gota Milagrosa · Naty Vida', cat: 'Saúde',
    fornecedores: [
      { nome: 'Dúzia',   preco: 43.00 },
      { nome: 'Unidade', preco:  3.58 },
    ]
  },
];

// ─────────────────────────────────────────────────────────────
// OUTROS — RENDER
// ─────────────────────────────────────────────────────────────
let outrosBusca = '';

function cardOutrosHtml(p) {
  const multi = p.fornecedores.length > 1;
  const precosHtml = p.fornecedores.map(f => `
    <div class="preco-bloco${multi ? ' forn' : ''}">
      <div class="preco-bloco-label">${f.nome}</div>
      <div class="preco-bloco-val">${R$(f.preco)}</div>
    </div>`).join('');

  return `
    <div class="card-outros">
      <div class="card-outros-topo">
        <div class="card-outros-nome">${p.nome}</div>
        <span class="card-outros-cat">${p.cat}</span>
      </div>
      <div class="card-outros-precos">${precosHtml}</div>
    </div>`;
}

function renderOutros() {
  const grid     = document.getElementById('grid-outros');
  const vazio    = document.getElementById('vazio-outros');
  const contagem = document.getElementById('contagem-outros');
  const termo    = outrosBusca.toLowerCase();

  const filtrados = OUTROS.filter(p =>
    !termo || p.nome.toLowerCase().includes(termo) ||
              p.cat.toLowerCase().includes(termo) ||
              p.fornecedores.some(f => f.nome.toLowerCase().includes(termo))
  );

  if (!filtrados.length) {
    grid.innerHTML = '';
    vazio.classList.remove('hidden');
    contagem.textContent = '';
    return;
  }
  vazio.classList.add('hidden');
  contagem.textContent = `${filtrados.length} produto${filtrados.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtrados.map(cardOutrosHtml).join('');
}

function initOutros() {
  const input    = document.getElementById('busca-outros');
  const clearBtn = document.getElementById('clear-busca-outros');
  input.addEventListener('input', () => {
    outrosBusca = input.value;
    clearBtn.classList.toggle('hidden', !outrosBusca);
    renderOutros();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    outrosBusca = '';
    clearBtn.classList.add('hidden');
    input.focus();
    renderOutros();
  });
}

// ─────────────────────────────────────────────────────────────
// CONTATOS DOS FORNECEDORES
// ─────────────────────────────────────────────────────────────
const MSG_WHATS = 'Oi, Vim pela Tabela do Alvaro';

// Telefones no formato 55 + DDD + número (com o 9 do celular).
const CONTATOS = {
  bellcorpus: { nome: 'MG Atacadista',            tel: '5537991357520'  },
  glamour:    { nome: 'Gilda Oliveira (Atacado)', tel: '5537999185656'  },
  depile:     { nome: 'Hebert · Depile Plus',     tel: '5534991335424'  },
  copag:      { nome: 'José Dias Avelar',         tel: '5531996114266', email: 'josediasavelar@gmail.com' },
};

function telBonito(tel) {
  // 55DDDNUMERO → (DD) XXXXX-XXXX
  const d = tel.replace(/^55/, '');
  const ddd = d.slice(0, 2);
  const resto = d.slice(2);
  if (resto.length === 9) return `(${ddd}) ${resto.slice(0,5)}-${resto.slice(5)}`;
  if (resto.length === 8) return `(${ddd}) ${resto.slice(0,4)}-${resto.slice(4)}`;
  return `(${ddd}) ${resto}`;
}

function renderContato(marca) {
  const c = CONTATOS[marca];
  const el = document.getElementById('contato-' + marca);
  if (!c || !el) return;

  const wa = `https://wa.me/${c.tel}?text=${encodeURIComponent(MSG_WHATS)}`;
  const emailHtml = c.email
    ? `<a href="mailto:${c.email}" class="card-contato-item">
         <span class="contato-icon">✉</span> ${c.email}
       </a>`
    : '';

  el.innerHTML = `
    <div class="card-contato">
      <div class="card-contato-nome">${c.nome}</div>
      ${emailHtml}
      <a href="${wa}" target="_blank" rel="noopener" class="card-contato-item whats">
        <span class="contato-icon">💬</span> ${telBonito(c.tel)}
        <span class="whats-tag">WhatsApp</span>
      </a>
    </div>`;
}

function renderContatos() {
  Object.keys(CONTATOS).forEach(renderContato);
}

// ─────────────────────────────────────────────────────────────
// ABAS DE MARCA
// ─────────────────────────────────────────────────────────────
const MARCAS = {
  bellcorpus: { titulo: 'Bell Corpus', sub: 'Cosméticos Atacadista' },
  glamour:    { titulo: 'Glamour',     sub: 'Distribuidora'          },
  depile:     { titulo: 'Depile Plus', sub: 'Cosméticos'             },
  copag:      { titulo: 'Copag',       sub: 'Cards e Jogos'          },
  panini:     { titulo: 'Panini',      sub: 'Álbuns e Figurinhas'    },
  outros:     { titulo: 'Outros',      sub: 'Produtos'               },
};

function initAbas() {
  const abas = document.querySelectorAll('.aba-btn');

  const views   = {
    bellcorpus: document.getElementById('view-bellcorpus'),
    glamour:    document.getElementById('view-glamour'),
    depile:     document.getElementById('view-depile'),
    copag:      document.getElementById('view-copag'),
    panini:     document.getElementById('view-panini'),
    outros:     document.getElementById('view-outros'),
  };
  const headers = {
    bellcorpus: document.getElementById('header-bellcorpus'),
    glamour:    document.getElementById('header-glamour'),
    depile:     document.getElementById('header-depile'),
    copag:      document.getElementById('header-copag'),
    panini:     document.getElementById('header-panini'),
    outros:     document.getElementById('header-outros'),
  };

  abas.forEach(btn => {
    btn.addEventListener('click', () => {
      abas.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const aba = btn.dataset.aba;

      // atualiza título
      document.getElementById('header-titulo').textContent = MARCAS[aba].titulo;
      document.getElementById('header-sub').textContent    = MARCAS[aba].sub;

      // mostra/esconde views e headers
      Object.keys(views).forEach(k => {
        views[k].classList.toggle('hidden', k !== aba);
        headers[k].classList.toggle('hidden', k !== aba);
      });
    });
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
  renderCatalogo();
  initCatalogo();
  renderDepile();
  initDepile();
  renderCopag();
  initCopag();
  renderPanini();
  initPanini();
  renderOutros();
  initOutros();
  renderContatos();
  initAbas();
}

init();
