function validacion(){
    var correos, expresion;
    correos = document.getElementById(correos);
    expresion =/\w+@\w+\.+[a-z]/;

    if(correos === ""){
        alert("El campo correo esta vacio");
        return false ;
    }
    else if(!expresion.test(email)){
        alert("El correo no es valido");
        return false ;
    }
    else if(correo.lenght > 100 ){
        alert("El correo es muy largo");
        return false ;
    }
}