const btnUno = document.querySelector('#btn-1');
const btnDos = document.querySelector('#btn-2');
const btnTres = document.querySelector('#btn-3');
const body = document.querySelector('#body')
const divUno = document.querySelector('#divUno')

btnUno.addEventListener('click', () =>{
    body.classList.add('fondoUno');
    body.classList.toggle('fondoDos');
})

btnDos.addEventListener('click', () =>{
    body.classList.remove('fondoDos', 'fondoUno');
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