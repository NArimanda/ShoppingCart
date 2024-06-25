import arrayManipulator from "./projectArray";
import Selectioner from "./selector";

class domDisplayer{

    updateProjects(OBJ){
        let k = document.querySelector('.projectlist')
        k.innerHTML = ``
        for (let prop in OBJ){
            let lick = document.createElement('div');
            let listitem = document.createElement('li')
            listitem.innerText = prop;
            let button = document.createElement('button')
            button.type = 'submit'
            button.innerText = 'delete'
            button.addEventListener('click', () => button.parentElement.remove())
            button.addEventListener('click', () => arrayManipulator.RemoveProject(button.parentElement.innerText.replace('delete', '')))


            lick.appendChild(listitem)
            lick.appendChild(button)

            lick.style.display = 'flex'
            lick.style.flexDirection = 'row'

            k.appendChild(lick)
        }
    }


    updateTodolist(OBJ){
        let maruti = document.querySelector('.todo')
        console.log(maruti)
        maruti.innerHTML = ``
        console.log(Selectioner.selector)
        
        for (let item of OBJ[Selectioner.selector]){
            let to_append = document.createElement('li')
            to_append.innerText = String(item)
            maruti.appendChild(to_append)
        }


    }
}

let domController = new domDisplayer()
export default domController;