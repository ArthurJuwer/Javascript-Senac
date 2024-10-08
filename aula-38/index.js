function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

// 10
// 50

// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// não apareceria nada, pois não estaria sendo chamado, apenas retornado

    
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade

// a função transforma o texto para minusculas e verifica se possui a palavra "cenoura", caso for verdadeiro a afirmação retorna true

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
        // true
//      ii.  `CENOURA é bom pra vista`
        // true
//      iii. `Cenouras crescem na terra`
        // 