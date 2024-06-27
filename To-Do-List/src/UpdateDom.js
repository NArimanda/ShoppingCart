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
            listitem.addEventListener('click', () => Selectioner.setSelector(listitem.innerText))
            listitem.style.marginLeft = '5px'


            let button = document.createElement('button')
            button.type = 'submit'
            button.innerText = '-'

            button.addEventListener('click', () => button.parentElement.remove())
            button.addEventListener('click', () => arrayManipulator.RemoveProject(button.parentElement.innerText.replace('-', '')))
            lick.className = 'lick'

            lick.appendChild(listitem)
            lick.appendChild(button)


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