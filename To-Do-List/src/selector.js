import arrayManipulator from "./projectArray"
import domController from "./UpdateDom";

class Selector{
    constructor(){
        this.selector = ''
    }

    resolveSelector(arr){
        console.log(arr)
        if(this.selector != ''){
            return this.selector;
        }
        else if(JSON.stringify(arr) == '{}'){
            console.log('success')
            arrayManipulator.AddProject('Default')
            this.selector = 'Default'
            return this.selector;
        }
        else{
            console.log('failure')
            this.selector = Object.keys(arr)[0]
            return this.selector
        }
    }

    setSelector(text){
        this.selector = text;
        domController.updateTodolist(arrayManipulator.Arr)
    }
}

let Selectioner = new Selector()
export default Selectioner