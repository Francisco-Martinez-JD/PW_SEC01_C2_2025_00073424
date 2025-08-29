    document.addEventListener("DOMContentLoaded", () => {
    const elementSubtitulo = document.querySelector("#titulo_descripcion > h2");
    const elementParrafos = document.querySelector("#parrafos");
    const elementTituloMain = document.querySelector("#titulo_principal > h1");
    const elementParrafosDescripcion = document.querySelector("#parrafos_descripcion");
    const imagen = document.querySelector("#datos_del_libro > #imagen");



    function cambiarColumnas(){

        elementParrafos.style.display = 'flex';
        elementParrafos.style.flexDirection = 'column';
        elementParrafos.style.columns = '1';
        elementParrafos.style.gap = '0.4em';

    }

    function cambiarTitulo() {
        elementTituloMain.textContent = "std::cout << 'Hola, mundo!';";
    }

    function cambiarColor() {
        elementSubtitulo.style.color = "blue";
        elementParrafosDescripcion.style.fontFamily = "Noto Sans, sans-serif";
    }

    function agregarImagen() {
        imagen.src = "imagen.jpg";
    }

    document.querySelector(".wrapButtons button:nth-child(1)").onclick = cambiarColumnas;
    document.querySelector(".wrapButtons button:nth-child(2)").onclick = cambiarTitulo;
    document.querySelector(".wrapButtons button:nth-child(3)").onclick = cambiarColor;
    document.querySelector(".wrapButtons button:nth-child(4)").onclick = agregarImagen;
    });