import React, { Component } from 'react';
import './C1.css'
class C1 extends Component {
    constructor(...arg){
        super(...arg);
        this.state={
            value:'',
            display:'block',
            h:0,
            m:0,
            s:0
        };
        var _this = this;
        setInterval(function(){
            _this.tick();
        },1000);
    }

    // 生命周期钩子
    componentDidMount(){
        this.tick();
    }
    // componentWillUpdate(){
    //     console.log("即将更新");
    // }
    // componentDidUpdate(){
    //     console.log("更新完成！");
    // }
    // componentWillUnmount(){
    //     console.log("即将销毁！");
    // }

    tick() {
        var oDate = new Date();
        this.setState({
            h: oDate.getHours(),
            m: oDate.getMinutes(),
            s: oDate.getSeconds()
        });
    }

    fn(ev){
        this.setState({
            value:ev.target.value
        });
    }

    nice(){
        this.setState({
            display:this.state.display == "block"?"none":"block"
        })
    }

    render() {
        return (
            <div className="c1">
                Hello,我是在src/myselfComponent目录下的C1.js文件中的C1组件 我引入了相同目录下的 C1.css 文件，用来给我包含的文字设为红色
                <br/>
                这里传了个参数{this.props.name},传第二个参数{this.props.num};<br/>
                事件：<input type="text" onChange={this.fn.bind(this)}/>
                <span>{this.state.value}</span><br/>
                <button onClick={this.nice.bind(this)}>点击隐藏</button>
                <div className="box" style={{display:this.state.display}}></div>
                <div>
                    时钟:
                    <span>{this.state.h}:</span>
                    <span>{this.state.m}:</span>
                    <span>{this.state.s}</span>{/*注意单括号和双括号*/}
                </div>

            </div>
        );

    }

}

export default C1;


