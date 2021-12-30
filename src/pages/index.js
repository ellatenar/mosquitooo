import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

//other idea:
/*
  <p>
    <Link to="/bio">Heather Holmes </Link>is an <Link to="/editing">editor </Link>and a <Link to="/writing">writer</Link>.
  </p>
*/

const IndexPage = () => {
  const [visibleSubmenu, setVisibleSubmenu] = React.useState(false);
  const showSubmenu = () => {
    setVisibleSubmenu((prev) => !prev);
    if (!visibleSubmenu) setVisibleSubsubmenu(false);
  };
  const [visibleSubsubmenu, setVisibleSubsubmenu] = React.useState(false);
  const showSubsubmenu = () => setVisibleSubsubmenu((prev) => !prev);

  return (
    <Layout title="Heather Holmes" pageName="Index">
      <p>
        <button className="menu" onClick={showSubmenu}>
          writing
        </button>
        {visibleSubmenu && (
          <span className="submenu">
            <span>
              <Link to="/writing/present">present</Link>
            </span>
            <span>
              <ul className="subsubmenu not-rly-a-list">
                <button id="showsubsubmenu" onClick={showSubsubmenu}>
                  past
                </button>
                {visibleSubsubmenu && (
                  <li id="subsubmenu1">
                    <Link to="/writing">published work</Link>
                  </li>
                )}
                {visibleSubsubmenu && (
                  <li id="subsubmenu2">
                    <Link to="/archive">site archive</Link>
                  </li>
                )}
              </ul>
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
    </Layout>
  );
};

export default IndexPage;
