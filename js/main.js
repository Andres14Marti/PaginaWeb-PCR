/*************** Efecto de las Tarjetas en DIMENSIONES ***************/

var altoTarjeta = "25px";
var nuevoAlto = "135px";

$(".contenidod .tarjetasd ul .samaritana").click(function() /* Click sobre samaritana */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
			/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent").css({
				"background-image": "url(img/samaritana.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent").css({
				"background-image": "url(img/samaritana.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
	}
});	

$(".contenidod .tarjetasd ul .pascual").click(function() /* click sobre pascual */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
		/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent").css({
				"background-image": "url(img/pascual.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent").css({
				"background-image": "url(img/pascual.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
	}
});
	
$(".contenidod .tarjetasd ul .comunidades").click(function() /* click sobre comunidades */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
		/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent").css({
				"background-image": "url(img/comunidades.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent").css({
				"background-image": "url(img/comunidades.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
	}
});
	
$(".contenidod .tarjetasd ul .misionera").click(function() /* click sobre misionera */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
		/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent").css({
				"background-image": "url(img/misionera.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent").css({
				"background-image": "url(img/misionera.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
		$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
	}
});

/*Tarjeta Pastorales */

var altoTarjeta = "25px";
var nuevoAlto = "135px";

$(".contenidod .tarjetasd ul .infantil").click(function() /* Click sobre  */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent2").css({
					"background-image": "url(img/n1.JPG)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent2").css({
					"background-image": "url(img/n1.JPG)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .juvenil").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .familiar").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
						
		}
	});	

	$(".contenidod .tarjetasd ul .juvenil").click(function() /* Click sobre  */
	{
		
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent2").css({
					"background-image": "url(img/J1.JPG)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent2").css({
					"background-image": "url(img/J1.JPG)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .infantil").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .familiar").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
						
		}
	});	
	
	$(".contenidod .tarjetasd ul .familiar").click(function() /* click sobre comunidades */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent2").css({
					"background-image": "url(img/ptf.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent2").css({
					"background-image": "url(img/ptf.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .juvenil").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .infantil").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
		}
	});


/*------------------------------------------------------SERVICIOS------------------------------------------------------------ */
/*************** Efecto de las Tarjetas en SERVICIOS ***************/

var altoTarjeta = "25px";
var nuevoAlto = "135px";

$(".contenidod .tarjetasd ul .actividadeslit").click(function() /* Click sobre actividades liturgicas */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
			/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent1").css({
				"background-image": "url(img/actlit.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent1").css({
				"background-image": "url(img/actlit.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .oficinaparroquial").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
	}
});	

$(".contenidod .tarjetasd ul .oficinaparroquial").click(function() /* click sobre oficina parroquial */
{
	if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
	{
		/* abre la tarjeta */
		$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

		if(screen.width >= 1024)
		{
			/* pone la imagen de fondo para escritorio*/
			$(".contenidod .imagent1").css({
				"background-image": "url(img/oficina1.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"max-width": "400px",
				"width": "400px",
				"min-height": "380px",
				"transition": "0.5s linear background-image"
			});
		}
		else
		{
			/* pone la imagen de fondo */
			$(".contenidod .imagent1").css({
				"background-image": "url(img/oficina1.jpg)",
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"width": "330px",
				"min-height": "330px",
				"transition": "0.5s linear background-image"
			});
		}

		/* cierra todas las demas */
		$(".contenidod .tarjetasd ul .actividadeslit").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
				
	}
});

/****************************** Slider Dimensiones *********************************/

//Todos los elementos img que tengan el atributo data-src
var images = document.querySelectorAll("img[data-src]");
var imagesLoaded = 0;

for(var i=0; i<images.length; i++)
{
	/* Saber cuando ya cargaron las imagenes para empezar a mover */
	images[i].addEventListener("load", function(e){
		imagesLoaded++;
		
		if(imagesLoaded == images.length)
		{
			init_slider(images);
		}
	}); /*function(e) directamente en el evento se llama Funcion anonima*/

	images[i].src = images[i].dataset.src; //data-src  dataset.src
}

var slides = 0;
var sliderTrack = null;
var timeMilliSeconds = 4000; //4 seg.
var timeLapsRef = null;

var dots = document.getElementsByClassName("dot"); //Obtener los Puntos de abajo

function init_slider(images)
{
    //La cantidad de slides que hay (imagenes). +1 porque la primera ya esta cargada
    slides = images.length + 1;

    //llama a todos los que tengan clase sliderTrack y el [0] toma solo el primero
    sliderTrack = document.getElementsByClassName("sliderTrack")[0];

    //Obtengo el ancho del dispositivo para siempre tener una imagen pegada a la otra
    sliderTrack.style.width = (100 * slides) + "vw";

    //Ir al Slide del Punto que se clickeo
    Ir();

    //Empezarse a mover. setTimeout() es un temporizador que cuenta desde x numero hasta 0
    //y ahi empieza a ejecutar lo que se le manda
    timeLapsRef = setTimeout(slideTick, timeMilliSeconds);
}

var currentSlide = 0; //Primer Slide Indice 0
var direction = 1;

function slideTick() 
{
    //Mover
    //currentSlide += 1;
    //currentSlide += direction;

    //Hace lo inverso a lo que estaba
    if( (currentSlide === slides - 1 && direction === 1) || (currentSlide === 0 && direction === -1) )
    {
        //currentSlide = 0;

        //Que cambie de direccion
        direction = direction * -1;
    }

    currentSlide += direction;

    moveTo(currentSlide);
}

function moveTo(to)
{
    //Se mueve cada 100vw a la izquierda
    sliderTrack.style.left = (-100 * to) + "vw";

    //Poner Color Punto. Le envio el currentSlide
    colorDot(to);

    //Se repite el ciclo cada vez LO CAMBIE, ESTABA DESPUES DEL LLAMADO DE moveTo en slideTick
    //PERO LO PUSE AQUI PARA QUE CONTINUARA DESPUES DE DAR CLICK A UN PUNTO
    timeLapsRef = setTimeout(slideTick, timeMilliSeconds);
}

function colorDot(to)
{
    //Recorre la cantidad de puntos que es la misma cantidad de slides
    for(let i=0; i<dots.length; i++)
    {
        //Si el punto coincide con el slide lo pinta, sino lo despinta
        if(i == to)
        {
            dots[i].style.backgroundColor = "#fff";
            dots[i].style.transition = "0.90s ease-in-out background-color";
        }
        else
        {
            dots[i].style.backgroundColor = "transparent";
            dots[i].style.transition = "0.90s ease-in-out background-color";
        }
    }
}

function Ir()
{
    //Recorre la cantidad de puntos que es la misma cantidad de slides
    for(let i=0; i<dots.length; i++)
    {
        //Se evalua si se da click en un punto y dependiendo de su posicion se lleva al slide
        dots[i].addEventListener("click", function onclick(){
            clearTimeout(timeLapsRef);
            moveTo(i);
        });
    }
}


/*************** Efecto de las Imagenes de la Galeria  ***************/

//Que se oscurezca la imagen y salga la lupa
		
var imgGal = document.querySelectorAll(".sec_galeria .cont_galeria li a img");
var lupaImgGal = document.querySelectorAll(".sec_galeria .cont_galeria li a i");
//var enlaceImgGal = document.querySelectorAll(".sec_galeria .cont_galeria li a");
	

//Se coloca let para que la variable i limite su valor al bloque de ejecucion. Como una variable Local. (Cuando use var no volvia a 0)
for(let i=0; i<imgGal.length; i++)
{	
	/*Ya que se retorna una lista de Nodos con querySelectorAll, se usa la funcion onmouseover y onmouseleave para que siempre verifique
	dentro de un ciclo si se tiene el mouse en alguna imagen o en alguna lupa*/

	imgGal[i].addEventListener("mouseover", function onmouseover(){ 
				
		imgGal[i].style.filter = "brightness(60%)";
		lupaImgGal[i].style.visibility = "visible";

		//Si se coloca el mouse en la lupa que se mantengan los valores
		if(lupaImgGal[i].addEventListener("mouseover", function onmouseover() {
					
			lupaImgGal[i].style.visibility = "visible";
			imgGal[i].style.filter = "brightness(60%)";
		}));
	});
	
	imgGal[i].addEventListener("mouseleave", function onmouseleave(){

		imgGal[i].style.filter = "none";
		lupaImgGal[i].style.visibility = "hidden";
				
		//Si se coloca el mouse en la lupa que se mantengan los valores
		if(lupaImgGal[i].addEventListener("mouseleave", function onmouseleave() {
					
			lupaImgGal[i].style.visibility = "hidden";
			imgGal[i].style.filter = "none";
		}));
	});			
}








	/*-------------script d pagina nuestra parroquia-----------------------*/
	let boton = document.getElementById("icono");/*varaible tipo let para el icono*/ 
	let enlaces = document.getElementById("enlaces");/*variable let para los enlaces*/
	let contador = 0;
	let cerrado = false;
	
	
	/*cuando hagan click en el boton hamburguesa*/ 
	boton.addEventListener('click',function(){
		if(contador == 0){
			enlaces.className = ('enlaces dos');
			contador=1;
			/*si el contador vale 0 que me cambie al enlace 2 que esta en css*/
		}else{
			/*caso contrario remueve enlace dos y pasa a uno*/
			enlaces.classList.remove('dos');//
			enlaces.className = ('enlaces uno');
			contador = 0;
		}
	});
	
	/*cuando la ventana cambie de tamaño*/ 
	window.addEventListener('resize', function(){
		if(screen.width > 1100){ // si la panatalla es mayor a 1100 px
			contador=0; // contador es 0 para que se oculte
			// se agrega lo siguiente para cambiar la funcion y se oculte el menu
			enlaces.classList.remove('dos');
			enlaces.className = ('enlaces uno');
	
		}
	});
	
	
	
	/* lo sigueinte es para que no se oculte mientras no se le de click al menu hamburguesa */
	window.addEventListener('click',function(e){ //lee el evento click dentro del menu hamburguesa
		console.log(e.target);
		if(cerrado==false){
			let span = document.querySelector('.links-header'); // elige el selectro del menu dentro del header
			if(e.target == span){
				contador=0;
			}
		}
	});
	
	/*funcion para boton hacia arriba*/
	
	window.onscroll = function(){
		if(document.documentElement.scrollTop>200){
			document.querySelector('.go-top-container').classList.add('show')
		}
		else{
			document.querySelector('.go-top-container').classList.remove('show')
		}
	}
	
	document.querySelector('.go-top-container')
	.addEventListener('click',() =>{
		window.scrollTo({
			top:0,
			behavior: 'smooth'
		});
	});












/*************** Efecto de las Jmagenes de la Galeria Samaritana ***************/

/*var imgSam = document.querySelector(".sec_galeria .cont_galeria li a img");
	
imgSam.addEventListener("click", function(){
	alert("ENTRO");
	textoImgSam.style.visibility = "visible"; 
});*/
