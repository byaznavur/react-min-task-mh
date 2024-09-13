import Footer from "../Footer";
import Header from "../Header";
import Intro from "./Intro";
import "./style.scss";
const Layout = () => {
  return (
    <section>
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
