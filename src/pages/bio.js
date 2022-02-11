import * as React from "react";
import Layout from "../components/Layout";

const Bio = () => {
  return (
    <Layout pageName="Mosquito" title="Heather Holmes">
      <p className="text">
        I’m Heather Holmes, a Philadelphia-based writer and editor. I like thinking,
        writing, reading, editing about: the built environment, labor politics,
        queerness, contemporary art &amp; music, and regenerative modes of being in the world.
      </p>
      <p className="text">
        You can reach me at heathmholmes [at] gmail (dot) com.
      </p>
    </Layout>
  );
};

export default Bio;
