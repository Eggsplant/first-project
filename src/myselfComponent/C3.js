import React, { Component } from 'react';

function User1(props){
    return<h1>登录了！</h1>
}
function User2(props){
    return<h1>注销了！</h1>
}
// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>登录</button>
//     )
// }
// function LogoutButton(props){
//     return(
//         <button onClick={props.onClick}>注销</button>
//     )
// }

class Greeting extends Component{
    render(){
        if(this.props.isLoggedIn){
            return <User1></User1>;
        }else{
            return <User2></User2>;
        }
    }
}

class C3 extends Component{
    constructor(props){
        super(props);
        this.state={
            // numbers:[1,2,3,4,5],
            isLoggedIn:false
        }
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        });
    }
    handLeLogoutClick(){
        this.setState({
            isLoggedIn:false
        });
    }
    
    render(){
        const {isLoggedIn} = this.state;
        // const numbers = [1,2,3,4,5];
        // const doubled = numbers.map( num=> num*2);
        // const ListItem = numbers.map( (num,i)=>
        //     <li key={num.i}>{num}</li>
        // );
        
        let button = null;
        if(!isLoggedIn){
            // button = <LogoutButton onClick={this.handLeLogoutClick.bind(this)}/>
            button = <button onClick={this.handleLoginClick.bind(this)}>登录</button>
        }else{
            // button = <LoginButton onClick={this.handleLoginClick.bind(this)}/>
            button = <button onClick={this.handLeLogoutClick.bind(this)}>注销</button>
        }
        
        return(
            <div>
                {/*<ul>{ListItem}</ul>*/}
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )}
}

export default C3;