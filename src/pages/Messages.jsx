import React, { Component } from "react";
import axios from "axios";

class Messages extends Component {
  state = {
    title: "",
    body: ""
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <textarea
            placeholder="Body" value={this.state.body}
            onChange={this.onBodyChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default Messages;




import react from "react";
import React from "react";
import UserService from "../service/UserService";

class UserComponent extends react.Component{

constructor() { 
    super();
    this.state={
        users:[]
    }
}

componentDidMount(){
    UserService.getUsers().then((response) => {
        this.setState({users: response.data});
    
});
}

render(){
    return(
    <div>
            <h1 className="text-center">UserList</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>user_id</td>
                        <td>first_name</td>
                        <td>last_name</td>
                        <td>phone_number</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            users =>
                            <tr key ={users.id}>
                                <td>{users.id}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.phoneNumber}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </div>);
}
}



export default UserComponent;
