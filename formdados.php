<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Recebendo e exibindo dados do formulário</title>
</head>
<body>
<?php
$nome = $_POST['Nome'];
$email = $_POST['Email'];
$mensagem = $_POST['Mensagem'];
echo "Olá, " .$nome ."<br>Seu email é: " .$email ."<br>Sua mensagem é: ".$mensagem ."<br>";
?>
<tr>
<td id ="botao"><a href="formulario.html">Voltar para a página inicial</td>
</tr>
</body>
</html>
