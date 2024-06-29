let htmlerSet = function(item){
    let arr = []
    for (let x in item){
        console.log(x)
        let p = document.createElement('p')

        switch(x){
            case 'title':
                p.className='title'
                break;
            case 'desc': 
                p.className = 'desc'
                break
            case 'priority':
                p.className = 'priority'
                break
        }

        p.innerText = `${x}: ${item[x]}`
        arr.push(p)
    }
    return arr

}
export default htmlerSet