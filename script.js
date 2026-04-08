document.getElementById("formuAdocao").addEventListener("submit", function (e) { e.preventDefault();
//captação
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let telefone = document.getElementById("telefone").value;
let cpf = document.getElementById("cpf").value;
let idade = document.getElementById("idade").value;
let cidade = document.getElementById("cidade").value;
let quintal = document.querySelector('input[name="espaco"]:checked');
let moradia = document.getElementById("moradia").value;
let pet = document.querySelector('input[name="pet"]:checked');
let tempo = document.getElementById("tempo").value;
let horas = document.getElementById("horas").value;
let motivo = document.getElementById("motivo").value;
let permite = document.getElementById("permite").checked;
let financeiro = document.getElementById("financeiro").checked;
let seguro = document.getElementById("seguro").checked;
let impulso = document.getElementById("impulso").checked;
let termo = document.getElementById("termos").checked;
let cpfCadastrados = ["125678900", "1111111111"];
// Teste de Campo
// console.log("Hello Test");
//validações erros padrão
if (nome.length < 3) return alert("Nome Inválido");
if (!email.includes("@")) return alert("Email Invalido")
if (telefone.length <8) return alert("Telefone Inválido");
if (cpfCadastrados.includes (cpf)) return alert("CPF já cadastrado");
if (cpf =="") return alert("CPF Obrigatório");
if (idade < 18) return alert("Deve ser maior de 18!"); 
if (cidade == "") return alert("Cidade obrigatória");
if (moradia == "") return alert("Moradia");
if (!quintal) return alert("Informe sobre Quintal!");
if (!pet) return alert(" Informe se ja teve pet!");
if (horas =="" || isNaN(horas)) return alert("Horas Inválidas");
if (motivo.length < 10) return alert("Motivo muiot curto!");
if (!termo) return alert("Aceite os termos para a adoção!");
// regra de negocio
if (moradia == "apartamento" && quintal.value == "sim") { return alert("Apartamento não pode ter quintal!");
}
if (moradia == "Apartamento" && !permite) {
return alert("Apartamento não permite animais!");
}
if (moradia == "casa" && !seguro) {
return alert("Informe se o quintal é seguro!");
}
if (horas > 8) {
return alert("Animal ficará muito tempo sozinho!");
}
if (pet.value == "nao") {
return alert("A ONG poderá acompanhar sua adaptação!");
}
let motivosInvalidos = ["quero", "porque sim"];
if (motivosInvalidos.includes (motivo.toLowerCase())) {
return alert("Motivo inválido");
}
if (!financeiro) {
return alert("Sem condições financeiras");
}
if (impulso) {
return alert("Cuidado com sua decisão impulsiva");
}
document.getElementById("resultado").innerHTML =
"Cadastro realizado com sucesso!<br>" +
"Nome: " + nome + "<br>" +
"Email: " + email + "<br>" +
"Telefone: " + telefone + "<br>" +
"Cidade: " + cidade;
});