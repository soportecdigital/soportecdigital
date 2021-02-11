function validar(){
    var nombre, email, asunto, expresion ;
    nombre = document.getElementById("name").value;
    email = document.getElementById("email").value;
    asunto = document.getElementById("subject").value;
    expresion =/\w+@\w+\.+[a-z]/;

    if(nombre === "" || email ==="" || asunto ===""){
        alert("Todos los campos tienen que ser rellenados");
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