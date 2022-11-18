import React from 'react';
import './Login.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title1: 'Username',
            title2: 'Password',
        }
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(e){
        e.preventDefault();
        this.setState({
           alertShow: alert('Login Success'),
        });
        const changeText1 = document.getElementById('1');
        changeText1.getElementsByClassName('button');
        (changeText1) ? changeText1.style.color ="red" : changeText1.style.color="brown";

        const changeText2 = document.getElementById('2');
        changeText2.getElementsByClassName('button');
        (changeText2) ? changeText2.style.color ="red" : changeText2.style.color="brown";
    }

    render(){
        return(
            <div className="container-login">
                <div className="login-data">
                    <div className="username">
                        <p id="1">{this.state.title1}</p>
                        <input type="text" value="Username"></input>
                    </div>
                    <div className="password">
                        <p id="2">{this.state.title2}</p>
                        <input type="text" value="password"></input>
                    </div>
                    <div className="button-submit">
                    <button type="button" className="button button2" onClick={this.clickHandle}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LoginPage;