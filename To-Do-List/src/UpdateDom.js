import arrayManipulator from "./projectArray";
import Selectioner from "./selector";
import htmlerSet from "./objectFormatter";

class domDisplayer{

    updateProjects(OBJ, inpt){
        let k = document.querySelector('.projectlist')
        k.innerHTML = ``
        for (let prop in OBJ){
            let lick = document.createElement('div');
            let listitem = document.createElement('li')
            listitem.innerText = prop;


            listitem.addEventListener('click', () => Selectioner.setSelector(listitem))
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
        let ar = document.getElementsByClassName('lick')
        for (let x of ar){

            if(inpt.replace(/\s+/g, '') == x.innerText.replace('-', '').replace(/\s+/g, '')){
                
                x.style.backgroundColor = 'purple'
            }
        }
    }


    updateTodolist(OBJ){
        let maruti = document.querySelector('.todo')
 
        maruti.innerHTML = ``
 
        

        for (let item of OBJ[Selectioner.selector]){
            let to_append = document.createElement('li')
            for(let bak of htmlerSet(item)){
                to_append.appendChild(bak)
                console.log(bak.classList)
            }

            maruti.appendChild(to_append)
        }


    }

    markSelected(inpt){
        let ar = document.getElementsByClassName('lick')
        for (let x of ar){

            if(inpt == x.innerText.replace('-', '').replace(/\s+/g, '')){
                
                x.style.backgroundColor = 'purple'
            }
        }
    }


}

let domController = new domDisplayer()
export default domController;