import React, {Component} from 'react';
import {InputText, InputEmail} from '../../components/Form';
import {updateUser, submitUserRequested, fetcheOneUserResquested} from '../../actions/user';
import {updateFile, saveFileRequested} from '../../actions/file';
import {connect} from 'react-redux';
class Edit extends Component{
    handleChange(obj){
        const {current}=this.props;
        Object.assign(current, obj);
        this.props.updateU(current);
        this.forceUpdate();
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        if(id){
            this.props.fetchOne(id);
        }
    }
    formDat(files, name){
        const {currentFiles} = this.props;
        currentFiles.append('id', 'fffff-ssssss')
        currentFiles.append(name, files[0]);
        this.props.updateFiles();
    }
    render(){
        const {name, surname, email, gender, avatar, birthdate} = this.props.current;
        console.log(this.props.currentFiles.get('id'));
        return(
            <div>
                <InputText
                    key='name'
                    label='NOMBRE'
                    value={name}
                    onChange={({target:{value}})=>this.handleChange({name:value})}
                />
                <br />
                <br />
                <InputText
                    key='surname'
                    label='APELLIDO'
                    value={surname}
                    onChange={({target:{value}})=>this.handleChange({surname:value})}
                />
                <br />
                <br />
                <InputEmail
                    key='email'
                    label='EMAIL'
                    value={email}
                    onChange={({target:{value}})=>this.handleChange({email:value})}
                />
                <br />
                <br />
                <InputText
                    key='gender'
                    label='GENERO'
                    value={gender}
                    onChange={({target:{value}})=>this.handleChange({gender:value})}
                />
                <br />
                <br />
                <InputText
                    key='avatar'
                    label='AVATAR'
                    value={avatar}
                    onChange={({target:{value}})=>this.handleChange({avatar:value})}
                />
                <br />
                <br />
                <InputText
                    key='birthdate'
                    label='CUMPLEAÑOS'
                    value={birthdate}
                    onChange={({target:{value}})=>this.handleChange({birthdate:value})}
                />
                <br />
                <br />
                <button onClick={()=>this.props.submitU()}>Enviar</button>
                <br />
                <br />
                <form>
                    <input type='file' id='sendFile' multiple name='archivitoprueba' onChange={({target:{files, name}})=>this.formDat(files, name)}/>
                    <button onClick={()=>this.props.saveFile()}>Subir imagen</button>
                </form>
            </div>
        )
    }
};
const mapStateToProps = (state) =>({
    current: state.user.currentUser,
    currentFiles: state.file.selectedFiles
});
const mapDispatchToProps = (dispatch)=>({
    updateU: (obj) => (dispatch(updateUser(obj))),
    submitU: () => (dispatch(submitUserRequested())),
    fetchOne: (id)=>(dispatch(fetcheOneUserResquested(id))),
    updateFiles : (files) => dispatch(updateFile(files)),
    saveFile : ()=>dispatch(saveFileRequested())
})
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
