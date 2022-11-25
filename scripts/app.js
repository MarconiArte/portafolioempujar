const btnUno = document.querySelector('#btn-1');
const btnDos = document.querySelector('#btn-2');
const btnTres = document.querySelector('#btn-3');
const body = document.querySelector('#body')
const divUno = document.querySelector('#divUno')

btnUno.addEventListener('click', () =>{
    body.classList.remove('fondoTres');
    body.classList.add('fondoUno');
    body.classList.toggle('fondoDos');
    divUno.innerHTML = `
        <div class="presentacion-contenedor">
            <div class="presentacion">
                <h2>Marcos Niz Developer front-end</h2>
                <p>¡Bienvenido a mi portafolio!<p>
                <p>Podras encontrar todos mis trabajos, tanto de ilustrador como desarrollador.
            </div>
        </div>
    
    `
})

btnDos.addEventListener('click', () =>{
    body.classList.remove('fondoDos', 'fondoUno');
    body.classList.add('fondoTres');
    divUno.innerHTML = `
        <div class="presentacion-contenedor">
            <div class="presentacion">
                <h2>Marcos Niz Developer front-end</h2>
                <p>Hola, soy Marcos Niz! 
                Soy desarrollador web orientado a FrontEnd con experiencia en diseño, instalacion y mantenimiento de plataformas web aplicando HTML, CSS y JS.
                Además, tengo experiencia y formación en Diseño Gráfico e Ilustración, utilizando el paquete ADOBE y Clip Studio.<p>
            </div>
        </div>
    
    `
})

btnTres.addEventListener('click', () =>{
    divUno.innerHTML = `
    <div class="presentacion-contenedor">
            <div class="presentacion">
                <h2>Marcos Niz Developer front-end</h2>
                <p>Botón inútil por el momento</p>
            </div>
        </div>`
})