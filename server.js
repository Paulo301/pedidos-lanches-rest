const express = require('express');

const app = express();

const porta = 3000;

const lanches = [];

const pedidos = [];

app.use(express.json());

app.post("/lanche", (req, res) => {
  console.log(req.body);

  const ids = lanches.map((lanche) => {
    return lanche.id;
  });

  if (ids.length > 0){
    let max = 0;
    ids.map((id) => {
      if (id > max){
        max=id;
      }
    });
    lanches.push({...req.body, id: max + 1});
  } else{
    lanches.push({...req.body, id: 0});
  }

  res.send("Lanche cadastrado");
});

app.get("/lanche", (req, res) => {
  console.log("Consulta de lanches");

  res.send(JSON.stringify(lanches));
});

app.delete("/lanche/:id", (req, res) => {
  const id = req.params.id;

  const temp = lanches.find((lanche) => lanche.id == id);
  if (temp !== undefined){
    lanches.splice(lanches.indexOf(temp),1);
    res.send("Deletado")
  } else{
    res.send("Id não encontrada");
  }

});

app.post("/pedido", (req, res) => {
  const ids = req.body.ids;

  const lanchesPedido = lanches.filter((lanche) => ids.indexOf(lanche.id)>-1);

  if (lanchesPedido.length == ids.length){
    const pedidosIds = pedidos.map((pedido) => {
      return pedido.id;
    });
  
    if (pedidosIds.length > 0){
      let max = 0;
      pedidosIds.map((id) => {
        if (id > max){
          max=id;
        }
      });
      pedidos.push({id: max + 1, lanches: lanchesPedido, status: ""});
    } else{
      pedidos.push({id: 0, lanches: lanchesPedido, status: ""});
    }

    res.send("Pedido cadastrado");
  }else {
    res.send("Um ou mais lanche(s) não encontrado(s)");
  }
});

app.get("/pedido", (req, res) => {
  console.log("Consulta de lanches");

  res.send(JSON.stringify(pedidos));
});

app.put("/pedido/entrega", (req, res) => {
  const id = req.body.id;

  const temp = pedidos.find((pedido) => pedido.id == id);
  if (temp !== undefined){
    pedidos.splice(pedidos.indexOf(temp),1);
    pedidos.push({...temp, status: "Sair para entrega"});
    res.send("Entrega solicitada");
  } else{
    res.send("Pedido não encontrado");
  }
});

app.listen(porta, () =>{
  console.log("Iniciado");
})