import InputLogin from "./components/InputLogin";
import { MainStyles } from "./styles/styles";
import RightSideImage from "./assets/side-image.jpg";
import Logo from "./assets/logo.svg";
import LoginImage from "./assets/log-in.svg";
function App() {
  return (
    <MainStyles>
      <div className="cinquenta leftside ">
        <img src={Logo} alt="" className="logo" />
        <div className="loginarea">
          <div className="toplogin">
            <span className="top">
              <img src={LoginImage} alt="" /> Faça seu login
            </span>
            <span>Entre com suas informações de cadastro.</span>
          </div>
          <InputLogin />
          <InputLogin />
          <div className="recoverypasswordarea">
            <span>
              <input type="checkbox" />
              Lembre-me
            </span>
            <span className="forgotpassword">Esqueci minha senha</span>
          </div>
          <button className="btn">Entrar</button>
          <span className="footer">Não tem uma conta? Registre-se</span>
        </div>
      </div>
      <div className="cinquenta rightside">
        <img src={RightSideImage} alt="rightside" className="rightsideimage" />
      </div>
    </MainStyles>
  );
}

export default App;
