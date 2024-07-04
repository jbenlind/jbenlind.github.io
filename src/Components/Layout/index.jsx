import SideBar from "../SideBar";
import Header from "../Header";
import Footer from "../Footer";
import "./index.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <SideBar />
        <div className="children-container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
