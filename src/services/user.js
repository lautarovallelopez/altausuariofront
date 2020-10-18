import HTTP from './http';
class User{
    static apiCall(){
        return HTTP.get('api/user');
    }
    static apiSave(user){
        if(user.id){
            return HTTP.put(`api/user/${user.id}`, user);
        }else{
            return HTTP.post('api/user', user);
        }
    }
    static apiCallOne(id){
        return HTTP.get(`api/user/${id}`);
    }
    static apiDelete(id){
        return HTTP.delete(`api/user/${id}`);
    }
}

export default User;