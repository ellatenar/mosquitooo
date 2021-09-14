import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

//other idea:
/*
  <p>
    <Link to="/bio">Heather Holmes </Link>is an <Link to="/editing">editor </Link>and a <Link to="/writing">writer</Link>.
  </p>
*/

const IndexPage = () => {
  return (
    <Layout title="Heather Holmes">
        <p><Link to="/writing">writing</Link></p>
        <p><Link to="/editing">editing</Link></p>
        <p><Link to="/bio">bio</Link></p>
        <p className="smol">
          <Link to="/archive">(archive)</Link>
        </p>
    </Layout>
  )
}

export default IndexPage
