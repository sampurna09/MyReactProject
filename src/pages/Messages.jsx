 import React from 'react'



class Messages extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() { 
  return(<div>  
  <form onSubmit={this.handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form></div>) ;
  }
};

export default Messages;
