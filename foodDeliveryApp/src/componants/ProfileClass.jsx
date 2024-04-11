import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userINFO : {
            name: "dummy Name",
            location: "Dummy Location",
            }, 
          }

       console.log("child - constructor" + this.props.name)
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/Krishna0302")
        const json = await data.json();
        console.log(json)

        this.setState({
        userINFO: json,
    });

    console.log("child - componentDidMount" + this.props.name)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {

        // const {userINFO} = this.state;

        console.log("child - render" + this.props.name);

        const {count} = this.state;

        return (
            <div>
            <h1>Profile class Componant</h1>
            <h2>Name: {this.state.userINFO.name}</h2>
            <h2>Location: {this.state.userINFO.location}</h2>
            </div>
        )
    }
}

export default Profile