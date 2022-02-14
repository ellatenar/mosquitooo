import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const [visibleSubmenu, setVisibleSubmenu] = React.useState(false);
  const showSubmenu = () => {
    setVisibleSubmenu((prev) => !prev);
  };

  return (
    <Layout title="Heather Holmes" pageName="Index">
      <p>
        <button className="menu" onClick={showSubmenu}>
          writing
        </button>
        {visibleSubmenu && (
          <span className="submenu">
            <span>
              <Link to="/writing">published work</Link>
            </span>
            <span>
              <Link to="/archive">site archive</Link>
            </span>
          </span>
        )}
      </p>
      <p>
        <Link to="/editing">editing</Link>
      </p>
      <p>
        <Link to="/bio">bio</Link>
      </p>
      <StaticImage
        alt="chicken spiral"
        src="../../static/assets/chicken.jpg"
        imgClassName="home-photo"
        className="home-photo-box"
        objectFit="contain"
      />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
