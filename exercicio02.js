let nota1 = 7.5;
let nota2 = 8.5;
let media = (nota1 + nota2) / 2;
let frequencia = 80; // em %
let passouPorNota = media >=7.0;
let passouPorPresenca = frequencia>= 75;
let alunoAprovado = passouPorNota && passouPorPresenca;
console.log(`Média: ${media} | Aprovado: ${alunoAprovado}`);
