function validarnome(){
var nome = form.Nome.value;
if (nome.length<=1){
	alert ("Preencha seu nome!");
	form.Nome.focus();
}
if(nome.length>=2 && nome.length<=40){
validaremail();
}
if (nome.length>40){
	alert("Nome inválido, limpar dados!");
	form.Nome.focus();
}
}
function validaremail(){
	var email = form.Email.value;
	if ((email.length != 0) && (email.indexOf("@") < 1) || (email.indexOf(".") <3)){ //O email precisa ter tamanho diferente de zero e os caracteres "@" e "." ocuparem no mínimo, as posições 1 e 3, respectivamente.
		alert ("Email vazio ou inválido!");
		form.Email.focus();
	}
	else{
		validarmensagem();
	}
}
function validarmensagem(){
	var mensagem = form.Mensagem.value;
	if (mensagem.length>=5 && mensagem.length<=80){
		document.forms[0].submit();
		//exibir();
}
	else{
		alert ("Mensagem inválida ou vazia!");
		form.Mensagem.focus();
}
}
//function exibir() {
//	var nome = form.Nome.value;
//	var email = form.Email.value;
//	var msg = form.Mensagem.value;
//	document.write("Nome: "+nome);
//	document.write("<br>Email: "+email);
//	document.write("<br> Mensagem: "+msg);
//	setTimeout(function(){
	//window.location.href = "confirmacao.html"}, 3000);
//}
function validar(){
	validarnome();
}
