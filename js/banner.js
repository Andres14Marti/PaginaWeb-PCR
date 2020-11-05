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