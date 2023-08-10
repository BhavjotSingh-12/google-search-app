import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {

    return <div className="flex h-[100vh] flex-col">
        <HomeHeader />
        <main className="grow flex justify-content">
            <div className="w-full px-5 flex flex-col items-center mt-44">
                <img className="w-{172px}, md:w-{272px} mb-8" src={Logo} alt="" />
                <SearchInput />
            </div>
        </main>
        <Footer />
    </div>
};

export default Home;
