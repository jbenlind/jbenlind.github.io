import SideBar from "../SideBar";
import Header from "../Header";
import Footer from "../Footer";
import "./index.scss";
const Layout = ({ children }) => {
  return (
    <>
      <div className="tester">
        <Header />
        <div>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
        <Footer />
      </div>
      {/* <div className="layout-container">
        <SideBar />
        <div className="children-container">{children}</div>
      </div> */}
    </>
  );
};

export default Layout;
