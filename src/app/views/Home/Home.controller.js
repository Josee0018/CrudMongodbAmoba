import PrivatePageContainer from "../../components/PrivatePageContainer";
import HomeView from "./Home.view";

function Home() {
  return <PrivatePageContainer children={<HomeView />} />;
}

export default Home;
