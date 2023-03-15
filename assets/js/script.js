fetch('data.json').then(response => { // Faz uma requisição para o arquivo "data.json" e retorna uma promessa
    return response.json(); // Converte a resposta em um objeto JSON e retorna uma nova promessa
  })
    .then((data) => { // Recebe o objeto JSON como argumento
      for (let i = 0; i < data.length; i++) { // Loop sobre cada item do objeto JSON
        let strong = document.querySelectorAll('strong'); // Seleciona todos os elementos "strong" na página
        let values = document.querySelectorAll('i'); // Seleciona todos os elementos "i" na página
  
        strong[i].innerHTML = `<img src="${data[i].icon}" alt="${data[i].category}" />${data[i].category}`; // Define o conteúdo do elemento "strong" com uma imagem e a categoria do item
        values[i].innerText = data[i].score; // Define o texto do elemento "i" com a pontuação do item
      }
    });
  