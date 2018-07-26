import React, { Component } from 'react';
import './C2.css'

class C2_child extends Component{
    componentWillReceiveProps(){
        console.log("props更新了!")
    }
    
    componentWillUpdate(){
        console.log("更新了!")
    }
    
    render(){
        return <div>
                <span>这里是C2的子组件。{this.props.name}</span>
            </div>
        
    }
}

class Item extends Component{
    constructor(...args){
        super(...args);
    }
    render(){
        return(
            <li>{this.props.value}</li>
        );
    }
}

class C2 extends Component{
    constructor(...arg){
        super(...arg);
        this.state={
            i:0,
            arr:[12,8,5,9]
        }
        // this.arr=[12,8,5,9];
    }
    componentWillUpdate(){
        console.log("更新了!")
    }
    fn(){
        this.setState({
            i:this.state.i+1
        });
    }
    
    fn2(){
        this.setState({
            arr:this.state.arr.concat([Math.random()])
        })
        // this.arr.push(Math.random());
    }
    
    render(){
        var arr = this.state.arr;
        var result = [];
        for(var i=0; i<arr.length; i++){
            result.push(<Item key={i} value={arr[i]}/>);
        }
        
        return (
            <div className="c2">
                Hello,我是在src/myselfComponent目录下的C2.js文件中的C2组件 我引入了相同目录下的 C2.css 文件，用来给我包含的文字设为蓝色
                <button onClick={this.fn.bind(this)}>点点点</button>
                <C2_child name={this.state.i}/>
                
                <ul>
                    <button onClick={this.fn2.bind(this)}>aaa</button>
                    {result}
                </ul>
            </div>
        );
    }
}



export default C2;
