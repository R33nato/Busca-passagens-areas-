const form = document.querySelector('form');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Coletar dados do formulário
  const origem = document.getElementById('origem').value;
  const destino = document.getElementById('destino').value;
  const dataIda = document.getElementById('dataIda').value;
  const dataVolta = document.getElementById('dataVolta').value;

  // Construir a URL da API do Skyscanner
  const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave de API
  const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/BR/BRL/en-US/${origem}/${destino}/${dataIda}/${dataVolta}?apiKey=${apiKey}`;

  // Fazer a requisição à API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Processar os dados da API e exibir os resultados
      console.log(data); // Exibir os dados da API no console para debugging
      // Aqui você pode iterar sobre os dados e criar elementos HTML para exibir os resultados
    })
    .catch(error => {
      console.error('Erro ao buscar voos:', error);
      resultados.innerHTML = '<p>Ocorreu um erro ao buscar voos. Tente novamente mais tarde.</p>';
    });
});