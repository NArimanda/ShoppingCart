import arrayManipulator from "./src/projectArray"
import storageManager from "./src/localStorage"
import Selectioner from "./src/selector"

document.getElementById('app').innerHTML = `
<div class='projects'>
  <h1>Projects</h1>
  <button id='add_project_button'>+</button>
  <section>
    <ul class='projectlist'>
  
    </ul>
  <section>
</div>


<div class='ToDoList'>
  <h1>To do List</h1>
  <button id ='addtodo'>+</button>
  <ol class='todo'>

  
  </ol>

</div>
`

if (storageManager.getStorage()){
  let stuff = JSON.parse(storageManager.getStorage())
  for(let x in stuff){
    arrayManipulator.AddProject(x)
    Selectioner.defineSelector(x)

    if(stuff[x][0] != undefined){
      for (let q of stuff[x])
        arrayManipulator.Addlistitme(q['title'], q['desc'], q['priority'])
    }

  }
  let p = document.createElement('div')
  p.innerText = String(Object.keys(arrayManipulator.Arr)[0])
  Selectioner.setSelector(p)
  //Selectioner.setSelector(p)
}


let addProjectButton = document.querySelector('#add_project_button')

addProjectButton.addEventListener('click', () => arrayManipulator.AddProject(prompt('Enter:')))

let addTodoButton = document.querySelector('#addtodo')

addTodoButton.addEventListener('click', () => arrayManipulator.Addlistitme(prompt('enter list item:'), prompt('desc:'), prompt('priority')))