import domController from "./UpdateDom";
import Selectioner from "./selector";

class manipulateArray{
    
    constructor(){
        this.Arr = {};
    }


    AddProject(projectName) {
        this.Arr[projectName] = []
        Selectioner.resolveSelector(arrayManipulator.Arr)
        domController.updateProjects(this.Arr, Selectioner.selector)



    }

    RemoveProject(projectName){
        delete this.Arr[projectName]
        Selectioner.resolveSelector(this.Arr)
        if (this.Arr[Selectioner.selector] == undefined){
            Selectioner.newSelector(this.Arr)
        }
        domController.updateTodolist(this.Arr)
        domController.updateProjects(this.Arr, Selectioner.selector)
   

    }

    Addlistitme(title){
 
        this.Arr[Selectioner.resolveSelector(this.Arr)].push(title);

        domController.updateTodolist(this.Arr)
    }
}

let arrayManipulator = new manipulateArray();

export default arrayManipulator;