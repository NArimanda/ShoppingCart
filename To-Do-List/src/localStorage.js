class Storage{
    updateStorage(array){
        localStorage.setItem('object', JSON.stringify(array))
    }
    getStorage(){
        try{return localStorage.getItem('object')}
        catch{
            return false
        }
    }
}

let storageManager = new Storage()

export default storageManager