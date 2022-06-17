import MainPage from "@components/mainPage";
import LoginPage from "@components/loginPage";
import { getCurrentUser } from "@lib/frontend";

const Home = () => {
    const { currentUser } = getCurrentUser();
    return <>{currentUser ? <MainPage /> : <LoginPage />}</>;
};

export default Home;
