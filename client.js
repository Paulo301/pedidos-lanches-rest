const axios = require('axios');

axios.get('http://127.0.0.1:3000/lanche')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// axios.post('http://127.0.0.1:3000/lanche', {
//     nome: "misto",
//     preco: 19.99
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios.delete('http://127.0.0.1:3000/lanche/1')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

axios.get('http://127.0.0.1:3000/pedido')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// axios.post('http://127.0.0.1:3000/pedido', {
//     ids: [0,2]
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios.put('http://127.0.0.1:3000/pedido/entrega', {
//     id: 1
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });