/*
FORMA 01 de fazer mostrar o preço de algo via console e alert.

switch  modelo de condicional no codigo. Funciona como um if . É um if escrito de forma diferente*/ 

function verificarPreco (alimento) {
    switch(alimento){  /* Switch: coloco o switch, abro parenteses e declaro a variavel que vai estar sendo
                       validade e abre as chaves. Depois coloca os casos de uso com um default*/
       case 'laranja': /* Um parenteses aqui: pode usar mais de um alimento no mesmo return se o preço for o memso
                       No caso estou usando banana e laranja para o mesmo preço. Cuidar para as letras Maisc e Minusc. Usar as propriedades
                       to upercase e lowecase
       
                       Uso 2 - Dentro do switch pode ser usado true/false para expressoes condicionais nos cases. Ex: switch (true)
                       case (a >8) (a =< 9), onde o 'a' é a variavel a ser determinada : aprovado, reprovado, passou,
                       obrigatorio, nao obrigatorio, é maior de idade, é menor de idade... etc
       
                        */

       
       case 'banana':
           return 'R$ 4,99 /Kg'
       
       break; /* Uso o break para interromper o loop. Não é obrigatório */
       case 'morango':
           return 'R$ 11,99/Kg'
       case 'uva':
           return 'R$ 4,67/ Kg'
       default:
           return'Não encontramos o produto no sistema'
    }

}

const resultado = verificarPreco('maca')
alert(resultado) /* Aqui forma 1 de fazer e mostrar os preços no alert.*/ 


/*FORMA 02 de fazer e mostar o valor no HTML via DOM*/


/*switch  modelo de condicional no codigo. Funciona como um if . É um if escrito de forma diferente*/ 

function verificarPreco (alimento) {
    switch(alimento){  /* Switch: coloco o switch, abro parenteses e declaro a variavel que vai estar sendo
                       validade e abre as chaves. Depois coloca os casos de uso com um default*/
       case 'laranja': /* Um parenteses aqui: pode usar mais de um alimento no mesmo return se o preço for o memso
                       No caso estou usando banana e laranja para o mesmo preço. Cuidar para as letras Maisc e Minusc. Usar as propriedades
                       to upercase e lowecase
       
                       Uso 2 - Dentro do switch pode ser usado true/false para expressoes condicionais nos cases. Ex: switch (true)
                       case (a >8) (a =< 9), onde o 'a' é a variavel a ser determinada : aprovado, reprovado, passou,
                       obrigatorio, nao obrigatorio, é maior de idade, é menor de idade... etc
       
                        */

       
       case 'banana':
           return 'R$ 4,99 /Kg'
       
       break; /* Uso o break para interromper o loop. Não é obrigatório */
       case 'morango':
           return 'R$ 11,99/Kg'
       case 'uva':
           return 'R$ 4,67/ Kg'
       default:
           return'Não encontramos o produto no sistema'
    }

}

const resultado = verificarPreco('banana')
document.querySelector('#header').innerHTML = resultado
