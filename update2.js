//VETORES DENTRO DO DOCUMENTO
db.blog.insertOne({
  titulo: "Atualizações"
});
db.blog.update(
  {
    titulo: "Atualizações"
  }
  {$set:
    {
      tags:["nosql", "mongodb"]
    }
  }
);
db.blog.find().pretty();
db.blog.find({tags: { $size: 2}});

db.blog.insertOne({
  titulo: "Atualizações - Parte 2",
  tags: ["software", "banco de dados"]
});
db.blog.find(tags: "software"});
db.blog.update(
  {titulo: "Atualizações"},
  {$push: {tags:{$each: ["segunça de dados", "Inteligêcia artificial"]}}}
);

db.blog.aggregate([
  {
    $match: {titulo: "Atualizações"}
  },
  {
    $addFields: {
      tags: { $sortArray: {input: "$tags", sortBy: 1}}
    }
  }
]);
