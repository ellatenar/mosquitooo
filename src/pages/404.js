import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageName="Mosquito" title="Not Found">
      <p>Sorry, what you seek is not to be found here.</p>
      <Link to="/">Go home</Link>.
    </Layout>
  );
};

export default NotFoundPage;
