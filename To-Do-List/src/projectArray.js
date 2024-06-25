import domController from "./UpdateDom";
import Selectioner from "./selector";

class manipulateArray{
    
    constructor(){
        this.Arr = {};
    }


    AddProject(projectName) {
        this.Arr[projectName] = []
        domController.updateProjects(this.Arr)
        console.log(this.Arr)
    }

    RemoveProject(projectName){
        console.log(projectName)
        delete this.Arr[projectName]
        domController.updateTodolist(this.Arr)
        console.log(this.Arr)
    }

    Addlistitme(title){
        console.log(title)
        this.Arr[Selectioner.resolveSelector(this.Arr)].push(title);
        console.log(this.Arr)
        domController.updateTodolist(this.Arr)
    }
}

let arrayManipulator = new manipulateArray();

export default arrayManipulator;