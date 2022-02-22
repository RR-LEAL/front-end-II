var nomeCompleto = prompt ("Qual é o seu nome completo?");
var telefone = prompt("Qual é o seu telefone?");

if (nomeCompleto == "") {

  while (nomeCompleto == ""){
    nomeCompleto = alert("Campo nome completo é obrigatório!");
    nomeCompleto = prompt("Qual é o seu nome completo?")
  }

} else if (telefone == "") {
  
  while (telefone == "") {
    telefone = alert("Campo telefone é obrigatório!");
    telefone = prompt("Qual é o seu telefone?");
  }

} else {
  var telefoneWhats = confirm("Seu telefone é whatsapp?");
}

alert(`Muito obrigado ${nomeCompleto}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);


