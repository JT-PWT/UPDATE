db.blog.insertOne({
  titulo: "Atualização",
  autor: "Julia",
  tags: ["tecnologia","inovação"],
  adicionadoEm: "2025-03-11"
});
db.blog.find().pretty();

db.blog.update(
  {titulo: "Atualização"},//filtro
  {//o que quero que apareça
  titulo: "Atualização",
  autor: "Julia",
  tags: ["software","bonco de dadosNoSQL"]
  },
  {upsert: true}
);
db.blog.find().pretty();
db.blog.update(
  {titulo: "Atualização"},
  {$set:
    {
      adicionadoEm:"2025-03-11"
    }
  }
);
db.blog.find().pretty();

db.blog.update(
  {titulo: "Atualização"},
  {$inc: {viewCount: 1}} //incremento, contador de visualização de incremento
);
db.blog.find(
  {titulo: "Atualização"}
).pretty();

//renomear campo
db.blog.update(
  {titulo: "Atualização"},
  {$rename:{viewCount: "views"}}
);
db.blog.find(
  {titulo: "Atualização"}
).pretty();

db.blog.update(
  {titulo: "Atualização"},
  {$unset: {views:0}}
);

db.blog.find(
  {titulo: "Atualização"}
).pretty();
