const planImgs = ['pack1.svg', 'pack2.svg', 'pack3.svg'];
const planValor = [500, 1000, 1500];
const planNombre = ['Básico', 'Intermedio','Premium'];
const planDescripcion = [
    'Una opción rentable diseñada para proporcionar cobertura esencial. El Plan Básico es una elección ideal para aquellos que desean una red de seguridad sin agotar sus recursos, brindando tranquilidad en momentos de necesidad.',
    
    'Una opción equilibrada que busca un compromiso entre la asequibilidad y la cobertura integral. Adecuado para aquellos que desean una protección más completa sin los costos elevados asociados con los planes premium, lo que lo convierte en una elección popular para familias y grupos numerosos.',
    
    'La opción de nivel superior, que proporciona  beneficios adicionales, incluyendo: acceso a una red de proveedores de atención médica de primer nivel, cobertura dental y de visión, y cobertura para viajes internacionales. Diseñado para quienes buscan la máxima tranquilidad y el más alto nivel de atención.'
];


function mostrarTipoSeguro() {
    let indice = document.getElementById('tipoSeguro').value;
    if (indice != ''){
        document.getElementById("planSeleccionado").style.opacity = "1";
        document.getElementById('planSeleccionado').innerHTML = '<img class="planImg" src="assets/' + planImgs[indice]+'"/><p class="planNombre">Plan ' + planNombre[indice] + '<p><p class="valorPlan">Valor del Seguro: <strong>$' + planValor[indice] + '</p><p>'+ planDescripcion[indice] + '</p>';    
    }else{
        document.getElementById("planSeleccionado").style.opacity = "0";
        document.getElementById('planSeleccionado').innerHTML = '';
    }
}
