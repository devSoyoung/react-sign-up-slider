import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form className="form" action="#">
                    <h1 className="form-title">Welcome Back!</h1>

                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="패스워드" />

                    <button className="form-button">sign in</button>
                    <a className="find-password" href="#">패스워드 찾기</a>
                </form>
            </div>
        );
    }
}

export default SignIn;
