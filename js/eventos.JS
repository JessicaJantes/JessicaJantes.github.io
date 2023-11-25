var val1 = document.getElementById("texval1");
var val2 = document.getElementById("txtval2");

alert(typeof val1);
var suma=0;


function btnSumar(){
    suma = parseInt(val1.value) + parseInt(val2.value);
    document.form1.txtRes.value = suma;
}