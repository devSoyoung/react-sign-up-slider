import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>로그인 영역</h1>
                    <div className="social-container">

                    </div>

                    <span>로그인 위해 이메일 주소를 사용하세요.</span>
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="패스워드" />
                    <a href="#">패스워드 찾기</a>
                    <button>회원가입</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
