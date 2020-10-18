import React, {Component} from 'react';

class UploadFile extends Component{
    constructor(props){
        super(props);
        this.state = {
            file : null
        }
    }
    handleFile(files){
        this.setState({file : files[0]})
    }
    handleSubmit(){
        var formdata = new FormData();
        formdata.append("archivito", this.state.file, this.state.file.name);

        var init = {
            method: 'POST',
            body: formdata
        };
        
        fetch("http://localhost:3001/api/document?name=lautaro", init)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    render(){
        return(
            <>
                <input type='file' name='archivito' onChange={({target:{files}})=>this.handleFile(files)}/>
                <button onClick={()=>this.handleSubmit()}>Enviar</button>
            </>
        )
    }
}

export default UploadFile;