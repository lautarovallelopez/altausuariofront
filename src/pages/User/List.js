import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  fetchUserRequested,
  deleteUserRequested
} from '../../actions/user';
import Table from '../../components/Table';
import {Link} from 'react-router-dom';
class App extends Component {
  async componentDidMount(){
    this.props.userRequest();
  }
  render(){
    const {users, headers} = this.props;
    return (
      <div>
        <Link to='/user/new'>Nuevo Usuario</Link>
        <Table documents={users} headers={headers} linkTo='/user' onDelete={id=>this.props.userDelete(id)}/>
      </div>
    );
  }
}
const mapStateToProps = (state)=>({
  headers:state.user.headers,
  users: state.user.users
});

const mapDispatchToProps = (dispatch) => ({
  userRequest: () => dispatch(fetchUserRequested()),
  userDelete: (id)=>dispatch(deleteUserRequested(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
