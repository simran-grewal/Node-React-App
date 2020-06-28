import React, { Component } from 'react'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
      }
    componentDidMount() {
        fetch('http://localhost:3000/name', {
            method: 'GET'
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
              }
            return response.json();
        }).then(res => {
            this.setState({name: res.name})
        }).catch(err => console.log(err));
    }
    render(){
        return (
            <div>{this.state.name}</div>
        )
    }
}

export default App;