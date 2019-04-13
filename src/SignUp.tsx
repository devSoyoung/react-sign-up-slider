import React, { Component } from 'react';

// TODO: 소셜 로그인 영역 추가하기

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className="form-title">Hello, Friend!</h1>

                    <input type="text" placeholder="이름" />
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="패스워드" />
                    <button className="form-button">sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
