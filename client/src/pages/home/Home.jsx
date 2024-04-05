import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import VerifyEmail from "../../components/verify/VerifyEmail";
import {useAuthContext} from "../../context/AuthContext";

const Home = () => {
  const {authUser} = useAuthContext();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {authUser.is_verified ? <></> : <VerifyEmail />}
      <Footer />
    </div>
  );
};

export default Home;
