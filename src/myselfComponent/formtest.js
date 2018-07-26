import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        };
        this.change_value = this.change_value.bind(this);
        this.alert_info = this.alert_info.bind(this);
    }

    change_value(e){
        this.setState({
            value: this.refs.name.value,//e.target.value,
            value2:this.refs.comment.value,
            value3:this.refs.selects.value
        });
    }
    alert_info(e){
        e.preventDefault();
        // const comment = this.refs.comment.value;
        alert("你提交的名字叫做"+this.state.value+", comment:"+this.state.value2+", "+this.state.value3);
    }

    render(){
        const {value} = this.state;
        return(
            <form onSubmit={this.alert_info}>
                <label>
                    Name: <input type="text" ref="name" onChange={this.change_value}/>
                    {/*<textarea type="text" onChange={this.change_value}></textarea>*/}
                    <button type="submit">提交</button>
                    <p>你输入的名字为：{value}</p>
                    这里是内容comment:<input type="text" ref="comment"/>
                    <select ref="selects" onChange={this.change_value}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
            </form>

        );}
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 'conconut'
    // }
    //     this.change_value = this.change_value.bind(t his);
    //     this.alert_info = this.alert_info.bind(this);
    // }
    //
    // change_value(e) {
    //     this.setState({
    //         value: e.target.value
    //     })
    // }
    //
    // alert_info(e){
    //     e.preventDefault();
    //     alert("你提交的名字叫做" + this.state.value);
    //
    // }
    //
    // render(){
    //     return(
    //         <form onSubmit={this.alert_info}>
    //             <label>
    //                 Pick U up!
    //                 <select onChange={this.change_value}>
    //                     <option value="grapefruit">Grapefruit</option>
    //                     <option value="lime">Lime</option>
    //                     <option value="coconut">Coconut</option>
    //                     <option value="mango">Mango</option>
    //                 </select>
    //             </label>
    //             <input type="submit" value="提交"/>
    //         </form>
    //     );
    // }
}
export default NameForm;