import HTTP from './http';

class File{
    static saveFile(id, file){
        return HTTP.postMedia(`api/document/${id}`, file)
    }
}
export default File;