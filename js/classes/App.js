import { datosEntrevista, nuevaEntrevista } from "../funciones.js";
import {
    camperInput,
    psicologaInput,
    fechaInput,
    horaInput,
    resultadosInput,
    formulario
} from '../selectores.js';

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        camperInput.addEventListener('change', datosEntrevista)
        //8.  añado los demas eventListeners
        psicologaInput.addEventListener('change', datosEntrevista);
        fechaInput.addEventListener('change', datosEntrevista);
        horaInput.addEventListener('change', datosEntrevista);
        resultadosInput.addEventListener('change', datosEntrevista);
        formulario.addEventListener('submit',nuevaEntrevista)
    }
}

export default App;
