function checarSenha() {
  if(document.getElementById("senha").value == ""){
    alert("Porfavor preencha o comapo senha");
    document.getElementById("senha").focus();
    return false;
  }

}
