//10. Clases
class Interviews{
    //11.1
    constructor(){
        this.interviews = [];
    }
    //16.2 metodo que agrega una entrevista
    addInterview(interview){
        this.interviews = [...this.interviews, interview];
        console.log(this.interviews);
    }
}

export default Interviews;