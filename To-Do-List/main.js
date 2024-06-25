import arrayManipulator from "./src/projectArray"

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
  <ol class='todo>

  
  <ol>

</div>
`

let addProjectButton = document.querySelector('#add_project_button')

addProjectButton.addEventListener('click', () => arrayManipulator.AddProject(prompt('Enter:')))