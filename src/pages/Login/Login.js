import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="imageWrapper">
        <img className="Logo" src="/imges/Vector.png" alt="Login Image" />
        <img
          className="logo_wecode"
          src="/imges/logo_wecode.png"
          alt="Login Image"
        />
      </div>
      <div className="container">
        <div className="input">
          <input type="text" className="email" placeholder="이메일" />
          <input type="text" className="password" placeholder="비밀번호" />
        </div>

        <button type="button" className="button">
          로그인
        </button>
        <div className="login_option">
          <span className="signUp">회원가입</span>
          <span className="line">|</span>
          <span className="findPassword">비밀번호찾기</span>
        </div>
      </div>
    </div>
  );
};


export default Login;
