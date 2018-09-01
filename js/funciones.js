import Interviews from './classes/Interviews.js';
import UserInterface from './classes/UserInterface.js';
import {
    camperInput,
    psicologaInput,
    fechaInput,
    horaInput,
    resultadosInput,
    formulario
} from './selectores.js';
//6. Objeto con propiedades que almacenaran los valores de los input del formulario
const entrevistaObjeto = {
    imagen:``,
    camper: '',
    //9.  Agregar las demas propiedades equivalentes a los input formulario
    psicologa: '',
    fecha: '',
    hora: '',
    resultados: ''
}
console.log(entrevistaObjeto);

//5. Funcion input
export function datosEntrevista(e){
    //7. guarda en cada propiedad del objeto el valor del input o clikc del formulario
    entrevistaObjeto[e.target.name] = e.target.value;
    campers.forEach(camper => {
        const {imagen, nombre} = camper
        if(e.target.value === nombre)
        {
            entrevistaObjeto[`imagen`] = imagen

        }
    });
}



//11. Instanciar clases -> OBJETO
const interviewsManager = new Interviews();
const userInterface = new UserInterface();

//13. Funcion submit Validar y agragar nueva entrevista psicologica mediante formulario
export function nuevaEntrevista(e){
    e.preventDefault();
    //14. Extraer informacion del objeto de entrevistas- Destructuring
    const {camper, psicologa, fecha, hora, resultados} = entrevistaObjeto;

    //15. Validación

    if (camper === '' || psicologa === '' || fecha === '' || hora === '' || resultados === ''){
    //15.1 LLamado del metodo de la clase de user Interface
        userInterface.printAlert(`TODOS LOS CAMPOS SON OBLIGATORIOS`,'error')
        return;
    }

    //16.Nuevo Registro
    //16.1 Generar un ID unico
    entrevistaObjeto.id = Date.now();
    //console.log(entrevistaObjeto.id);
    //16.3 Añadir nueva entrevista
    interviewsManager.addInterview({...entrevistaObjeto});
    //16.4 Reiniciar Formulario
    formulario.reset();
    //16.5 reiniciar objeto
    reiniciarObjeto();

    //17. Imprimir el html de las entrevistas
    userInterface.printInterviews(interviewsManager);
}

export function reiniciarObjeto(){
    //16.6 reiniciar cada propiedad del objeto
    entrevistaObjeto.camper = '';
    entrevistaObjeto.psicologa = '';
    entrevistaObjeto.fecha = '';
    entrevistaObjeto.hora = '';
    entrevistaObjeto.resultados = '';
    entrevistaObjeto.id = '';
}

export function limpiar(){
    let m=document.querySelectorAll('p')
    for(let a=0;a<m.length;a++){
        m[a].remove()
    }
}

