function armazenarValor(){

//armazena o valor que o usuario digitou
var userInput = document.getElementById("userInput").value;


//exibe o valor armazenado
console.log("O valor da variavel é:"+ userInput);


//atualizar o conteúdo da página
document.getElementById("valorInserido").innerText = " o valor inserido é:" + userInput;
}