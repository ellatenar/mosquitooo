import * as React from "react";
import Layout from "../components/Layout";

const Bio = () => {
  return (
    <Layout pageName="Mosquito" title="Heather Holmes">
      <p className="text">
        I'm Heather Holmes, a writer and editor. I’ve worked as CAA’s Associate
        Editor for Publications and Programs and previously ran the digital
        editorial initiative Notes at the Institute of Contemporary Art. I’m a
        2019 grantee of the Velocity Fund for a publication project
        called <a href="https://conflictsofinterest.co/">Conflicts of Interest</a>.
      </p>
      <p className="text">
        You can reach me at heathmholmes [at] gmail (dot) com.
      </p>
    </Layout>
  );
};

export default Bio;
