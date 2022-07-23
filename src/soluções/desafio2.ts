export{}

enum Profissao{
  Atriz,
  Padeiro
}

interface Pessoas{
  nome: string,
  idade: number,
  profissao: Profissao
}

let pessoa1: Pessoas = {
  nome: "maria",
  idade: 29,
  profissao: Profissao.Atriz
}

let pessoa2: Pessoas = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro
}
let pessoa3: Pessoas = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}