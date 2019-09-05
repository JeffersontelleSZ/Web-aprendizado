const car = {
  type: "GOL",
  modelo: "G5",
  cor: "Branco",
  dono: "Unico"
};

console.log(car.modelo);

const Pessoa = {
  nome: "Jefferson",
  idade: 25,
  sexo: "Masc",
  estudos: {
    materia: "Javascript",
    dia: new Date(),
    professor: "Jeff"
  }
};

Pessoa.estudos.city = "Goiania";

console.log(Pessoa.estudos.city);
