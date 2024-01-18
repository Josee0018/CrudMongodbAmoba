import PrivatePageContainer from "../../components/PrivatePageContainer";
import LoginView from "./Login.view";

function Login() {
  return <PrivatePageContainer children={<LoginView />} />;
}

export default Login;
