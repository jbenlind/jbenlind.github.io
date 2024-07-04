import Layout from "../../Components/Layout";
import ProfileImg from "../../Images/profile.png";
import "./index.scss";
const Home = () => {
  return (
    <Layout>
      <div className="home-page__container">
        <img src={ProfileImg}></img>
      </div>
    </Layout>
  );
};

export default Home;
