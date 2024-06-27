import arrayManipulator from "./projectArray"
import domController from "./UpdateDom";

class Selector{
    constructor(){
        this.selector = ''
    }

    resolveSelector(arr){

        if(this.selector != ''){

            return this.selector;
        }
        else if(JSON.stringify(arr) == '{}'){

            arrayManipulator.AddProject('Default')
            this.selector = 'Default'
            return this.selector;
        }
        else{

            this.selector = Object.keys(arr)[0]
            return this.selector
        }

    }

    newSelector(arr){

        if(JSON.stringify(arr) == '{}'){

            arrayManipulator.AddProject('Default')
            this.selector = 'Default'
            return this.selector;
        }
        else{

            this.selector = Object.keys(arr)[0]
            return this.selector
        }


    }
    
    setSelector(text){
        this.selector = text.innerText;
        domController.updateTodolist(arrayManipulator.Arr)
        domController.updateProjects(arrayManipulator.Arr, this.selector)

    }
}

let Selectioner = new Selector()
export default Selectioner