import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>회원가입 영역</h1>
                    <div className="social-container">

                    </div>

                    <span>회원가입을 위해 이메일 주소를 사용하세요.</span>
                    <input type="text" placeholder="이름" />
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="패스워드" />
                    <button>회원가입</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
