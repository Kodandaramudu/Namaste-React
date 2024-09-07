import React from "react";

class UserInfo extends React.Component {
constructor(props){
    super(props);
    // this.state = {
    //     userInfo:{
    //               login:"fake",
    //               avatar_url:" "}
    // }
    console.log("constructor");
}

async componentDidMount(){
    // const data = await fetch("https://api.github.com/users/Kodandaramudu");
    // const json = await data.json();
    // this.setState({
    //     userInfo: json
    //            });
    console.log("DidMount");
}
componentDidUpdate(){
    console.log("Didupdate");
}

componentWillUnmount(){
    console.log("WillMount"); 
}

render(){
     console.log("rendered");
    // return <div className="about-container">
    //    <h3>name:{this.state.userInfo.login}</h3>
    //    <img src={this.state.userInfo.avatar_url}/>
    //    <h3>Contact:ayyappa_05</h3>
    //  </div>
}
}

export default UserInfo;