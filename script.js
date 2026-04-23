alert('Hola, soy Isaaac, bienvenido a mi portafolio!');

const aboutbtn = document.getElementById('btn-about');
const aboutText = document.getElementById('texto-sobre-mi');

aboutbtn.addEventListener('click', function() {
    if(aboutText.style.display === 'none') {
        aboutText.style.display = 'block';
        
        aboutbtn.textContent = 'Ver menos';
    } else {
        aboutText.style.display = 'none';
        aboutbtn.textContent = 'Ver más';   }
    });

const btntoggle = document.querySelector('.toggle');
//const mensaje = document.getElementById('mensaje');
const proyectos = document.querySelector('.lista-project');


btntoggle.addEventListener('click', function() {
    console.log('btntoggle adentro ->',  btntoggle.textContent);

    if(proyectos.className == 'lista-project') {
        proyectos.className = 'ocultar-lista-project';
        btntoggle.textContent = 'Mostrar';
    } else {
        proyectos.className = 'lista-project';
        btntoggle.textContent = 'Ocultar';
    }
});


