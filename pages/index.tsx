import MainPage from "@components/MainPage";
import LoginPage from "@components/LoginPage";
import { getCurrentUser } from "@lib/frontend";

const Home = () => {
  const { currentUser } = getCurrentUser();
  return <>{currentUser ? <MainPage /> : <LoginPage />}</>;
};

export default Home;
