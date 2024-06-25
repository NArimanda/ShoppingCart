import domController from "./UpdateDom";

class manipulateArray{
    constructor(){
        this.Arr = {};
    }

    AddProject(projectName) {
        this.Arr[projectName] = ''
        domController.updateProjects(this.Arr)
        console.log(this.Arr)
    }

    RemoveProject(projectName){
        delete this.Arr[projectName]
        (console.log(this.Arr))
    }
}

let arrayManipulator = new manipulateArray();

export default arrayManipulator;