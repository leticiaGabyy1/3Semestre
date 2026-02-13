const pais = {
    "nome": "Brasil",
    "capital": "Brasilia",
    "população": 211000000,
    "idioma": "Português",
    "região": {
        "sudeste": "São Paulo / Rio de Janeiro / Minas / ES",
        "sul": "PR RS SC",
        "norte": "AM AC RR RO PA AP TO"
    }
}

console.log(pais.capital);
console.log(pais.região.sul);

//let nome = pais.nome;
//let capital = pais.capital;
//let população = pais.população;
//let idioma = pais.idioma;

let {nome, capital, população, idioma} = pais;
console.log(nome, capital, população, idioma);




