import App from './classes/App.js';
const app = new App();

//0. Ordenar Base de datos (Array campers)
console.log(campers);
campers.sort((a , b)=>{
    if (a.nombre < b.nombre ){
        return -1
    }
    if (a.nombre > b.nombre){
        return 1
    }
})
//1.  LLenar dinamicamente el select con los nombres de los campers
campers.forEach((camper)=>{
    const option = document.createElement('option');
    option.value = camper.nombre;
    option.textContent = camper.nombre;
    document.querySelector('#camper').appendChild(option)

})


//12. Listener Formulario


//4.  eventListeneres input
/* eventListeners();

function eventListeners(){
  
} */

