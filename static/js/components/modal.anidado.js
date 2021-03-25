const vehiculoSeleccion = document.getElementById('vehiculoSeleccion');
const ppuRow = document.getElementById('ppuRow');
const notaRow = document.getElementById('notaRow');
const submitRow = document.getElementById('submitRow');
const buttonSend = document.getElementById('submitButton');

vehiculoSeleccion.addEventListener('change', toggleForm)

submitRow.classList.remove('hide')

function toggleForm(){
    if(Number(vehiculoSeleccion.value) !== 0 ){
        submitRow.classList.add('hide')
        ppuRow.classList.remove('hide')
        notaRow.classList.remove('hide')
        ppuRow.addEventListener('change', function(){ submitRow.classList.remove('hide')})
    }else{
        ppuRow.classList.add('hide')
        notaRow.classList.add('hide')
        submitRow.classList.remove('hide')
    }
}

buttonSend.addEventListener('click', function(evt){
    evt.preventDefault();
    let rutFormatter = document.getElementById('rutPersonal').value
    let patente = document.getElementById('patente')
    let observacion = document.getElementById('observacion')
    let newUrl;
    if(Number(vehiculoSeleccion.value) !== 0){
        newUrl = `http://192.168.10.31/aforo-system/actions/post/post_entrada-salida.php?rut=${rutFormatter}&vehiculo=${vehiculoSeleccion.value}&ppu=${patente.value}&ob=${observacion.value}`;
    }else{
        newUrl = `http://192.168.10.31/aforo-system/actions/post/post_entrada-salida.php?rut=${rutFormatter}&vehiculo=${vehiculoSeleccion.value}&ppu=pie&ob=null`;
    }
    window.location.replace(newUrl);
    return false; 
})