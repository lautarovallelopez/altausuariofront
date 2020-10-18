const API = 'http://localhost:3001';

class HTTP{
    static async get(url){
        let response = await fetch(`${API}/${url}`);
        try{
            response = response.json();
            return response
        }catch(err){
            return {erro:true}
        }
    }
    static async post(url, objeto){
        const init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        };
        let response = await fetch(`${API}/${url}`, init);
        try{
            response = response.json();
            return response
        }catch(err){
            return {erro:true}
        }
    }
    static async put(url, objeto){
        const init = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        };
        let response = await fetch(`${API}/${url}`, init);
        try{
            response = response.json();
            return response
        }catch(err){
            return {erro:true}
        }
    }
    static async delete(url){
        const init = {
            method: "DELETE"
        };
        let response = await fetch(`${API}/${url}`, init);
        try{
            response = response.json();
            return response
        }catch(err){
            return {erro:true}
        }
    }
    static async postMedia(url, file){
        const init = {
            method: "POST",
            body: file
        };
        let response = await fetch(`${API}/${url}`, init);
        try{
            response = response.json();
            return response
        }catch(err){
            return {erro:true}
        }
    }
}

export default HTTP;