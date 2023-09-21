function raceanswer(){
  var password=document.getElementById("raceanswer");
  var passwordText=password.value.toUpperCase();
if (passwordText =="1500M") {
  return true;
}
  alert("wrong");
  return false;
}