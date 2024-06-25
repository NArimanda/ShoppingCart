class domDisplayer{

    updateProjects(OBJ){
        let k = document.querySelector('.projectlist')
        k.innerHTML = ``
        for (let prop in OBJ){
            let lick = document.createElement('li');
            lick.innerText = prop;
            k.appendChild(lick)
        }
    }

    
}

let domController = new domDisplayer()
export default domController;