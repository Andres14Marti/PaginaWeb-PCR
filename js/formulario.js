document.addEventListener("DOMContentLoaded", form_init);


function validateForm(){
    var nombre, correo, tel, edad,comen, regular,btnconfirmar;
    nombre = document.getElementById("txtnom").value;
    correo = document.getElementById("txtcorreo").value;
    tel= document.getElementById("txttel").value;
    edad= document.getElementById("txtedad").value;
    comen = document.getElementById("txtcom").value;
    btnconfirmar = document.getElementById("btnConfirmar").value;
    
    
    
    //regular expression
    regular=/\w+@\w+\.+[a-z]/;
    regulartelefono= /^[2-3-9-7-8]{1}+(-)+[2-3-9-7-8]{7}/;
    regularnombre= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
    
    if(nombre==="" || correo==="" || tel==="" || edad===""||comen===""){
        validado = false;
        alert("Informacion Incompleta");
        return false;
    }
    else if(!regularnombre.test(nombre)){
            validado = false;
            alert("El formato de nombre es incorrecto");
            return false;  
        }
    
    else if(nombre.length>25 || comen.length>50 ){
        validado = false;
        alert("Sobrepasa el nivel de caracteres");
        return false;
    }else if(correo.length>30 || tel.length>8){
        validado = false;
        alert("El Sobre el nivel de caracteres ");
        return false;
    }else if(!regular.test(correo)){
        validado = false;
        alert("El formato de correo es incorrecto");
        return false;
    }
    else if(isNaN(tel)){
        validado = false;
        alert("Ingrese solo numeros");
        return false;
    }
    else if(isNaN(edad)){
        validado = false;
        alert("Ingrese solo numeros");
        return false;
    }

 
}

if(validado){
    alert('Valores:' + nombre + ' , ' + correo + ' , ' + tel + ' , ' + edad + ' , ' + comen );
    document.forms[0].submit();
  }else{
    alert("Errores en el ingreso de datos");
  }
  return false;


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}