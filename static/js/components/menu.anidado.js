const vehiculoSelect = document.getElementById('vehiculo');
const patenteInput = document.getElementById('seleccionVehiculo');
const rutInput = document.getElementById('seleccionPie');

vehiculoSelect.addEventListener('change', toggleInput);

function toggleInput(){  
    rutInput.classList.toggle('hide')
    patenteInput.classList.toggle('hide')
}
