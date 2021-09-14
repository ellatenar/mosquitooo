import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"

const Editing = () => {

  return (
    <Layout pageName="Mosquito" title="Editing">
      <p className="text">Editor for hire / happy to work on projects of all shapes n sizes, from short essays to booklength manuscripts. Between my full-time & freelance work, I’m experienced in almost all aspects of editorial work, from citations and indexing to production management to image permissions and proofreading, blah blah blah.</p>
      
      <div className="editing-container">
        <a href="http://www.veralistcenter.org/engage/publications/2101/art-an-index-to-isee-also-i-politics-25-years-of-vera-list-center-fellowships/">
          <StaticImage src="../images/art-an-index-to.jpg" alt="Art: An Index to (see also Politics): 25 Years of Vera List Center Fellowships" />
        </a>
        <div className="editing-text">
          <p>
            <a href="http://www.veralistcenter.org/engage/publications/2101/art-an-index-to-isee-also-i-politics-25-years-of-vera-list-center-fellowships/">
              <i className="little-more-right-spacing">Art: An Index to (</i>see also<i> Politics): 25 Years of Vera List Center Fellowships</i>
            </a>
            &nbsp;(New York: Vera List Center for Art and Politics, 2018).
          </p>
          <p className="editorial-role">Editing, copyediting, proofreading.</p>
        </div>
      </div>

      <div className="editing-container">
        <a href="https://icaphila.org/books/speech-acts-4/">
          <StaticImage src="../images/speech-acts.jpg" alt="Speech/Acts" />
        </a>
        <div className="editing-text">
          <p>
            <a href="https://icaphila.org/books/speech-acts-4/">
              <i className="little-more-right-spacing">Speech/Acts</i>
            </a>
            &nbsp;(Philadelphia: Institute of Contemporary Art, University of Pennsylvania & Futurepoem, 2018).
          </p>
          <p className="editorial-role">Copyediting, proofreading.</p>
        </div>
      </div>

      <div className="editing-container">
        <a href="https://icaphila.org/books/myths-of-the-marble-4/">
          <StaticImage src="../images/myths-of-the-marble.jpg" alt="Myths of the Marble" />
        </a>
        <div className="editing-text">
          <p>
            <a href="https://icaphila.org/books/myths-of-the-marble-4/">
              <i className="little-more-right-spacing">Myths of the Marble</i>
            </a>
            &nbsp;(Philadelphia and Oslo: ICA, Sternberg Press, and Henie Onstad Kunstsenter, 2018).
          </p>
          <p className="editorial-role">Proofreading.</p>
        </div>
      </div>

      <div className="editing-container">
        <a href="https://wwiv.info/PDF/2017-WWIV-FBSK-digital.pdf">
          <StaticImage src="../images/fbsk.jpg" alt="Fire Bill's Spook Kit" />
        </a>
        <div className="editing-text">
          <p>
            <a href="http://www.inflandersfields.be/en/artist-in-residence-2017wilmer-wilson-iv-2">
              <i className="little-more-right-spacing">Fire Bill's Spook Kit</i>
            </a>
            &nbsp;(Ieper, BE: In Flanders Fields Museum, 2017).
          </p>
          <p className="editorial-role">Editing, copyediting, proofreading.</p>
        </div>
      </div>

      <div className="editing-container">
        <a href="http://static.icaphila.org/pdf/Day_Without_Art-2017-TMWSITS.pdf">
          <StaticImage src="../images/tmwsits.jpg" alt="the moon will sink into the street" />
        </a> 
        <div className="editing-text">
          <p>
            <a href="http://static.icaphila.org/pdf/Day_Without_Art-2017-TMWSITS.pdf">
              <i className="little-more-right-spacing">the moon will sink into the street</i>
            </a>
            &nbsp;(Philadelphia: ICA, 2017).
          </p>
          <p className="editorial-role">Commissioning editor, editing, proofreading, printing.</p>
        </div>
      </div>

    </Layout>
  )
}

export default Editing