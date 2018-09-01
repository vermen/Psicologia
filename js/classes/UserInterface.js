import {contenedorEntrevistas} from '../selectores.js';
import {limpiar} from '../funciones.js';
class UserInterface {
    //15.2 Metodo para gestion de errores en el objeto de interfaz de usuario
    printAlert(mensaje, tipo){
        //15.3 Crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        //15.4 si de de tipo error o de exito
        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //15.5 mensaje de error
        divMensaje.textContent = mensaje;
        //15.6 Insertar en el DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-entrevista'));
        //15.7 quitar el alert despues de 3 segundos
        setTimeout(()=>{
            divMensaje.remove();
        }, 3000);
    }
    //17.1 metodo que gestiona la impresion en html de las entrevistas
    printInterviews({interviews}){ // 17.2 se puede aplicar destructuring desde la funcion
        limpiar();
        interviews.forEach(interview=>{
            const {imagen, camper, psicologa, fecha, hora, resultados, id} = interview;
            const interviewHTML = document.createElement('p');
            interviewHTML.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="/img/${imagen}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${camper}</h5>
                    <p class="card-text">${psicologa}</p>
                    <p class="card-text"><small class="text-body-secondary">${resultados}</small></p>
                </div>
                </div>
                </div>
            </div>
            `;
            contenedorEntrevistas.appendChild(interviewHTML);
        })
    }
}

export default UserInterface;