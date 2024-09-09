const form = document.querySelector('form');
const resultados = document.getElementById('resultados');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Coletar dados do formulário
  const origem = document.getElementById('origem').value;
  const destino = document.getElementById('destino').value;
  const dataIda = document.getElementById('dataIda').value;
  const dataVolta = document.getElementById('dataVolta').value;
  // ... outros dados ...

  // Simular uma requisição para uma API de viagens (substituir por uma chamada real)
  
 // Simular uma busca (substituir por uma chamada real à API)
 const resultadosSimulados = [
  { companhia: 'Azul', preco:500 },
  { companhia: 'Gol', preco: 450 },
  { companhia: 'Latam', preco: 600 }
];

// Exibir os resultados
resultados.innerHTML = '';
resultadosSimulados.forEach(voo => {
  const divVoo = document.createElement('div');
  divVoo.innerHTML = `
    <h2>${voo.companhia}</h2>
    <p>Preço: R$ ${voo.preco}</p>
  `;
  resultados.appendChild(divVoo);
});
});