import * as React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  const [viewPic, setViewPic] = React.useState(false);
  const setView = () => setViewPic((p) => !p);
  return (
    <Layout pageName="Mosquito" title="Writing">
      <p className="text">Here's some of my published writing:</p>
      <ul className="not-rly-a-list">
        <li>
          <a href="https://www.artnews.com/art-in-america/features/science-fiction-visionary-ed-emshwiller-gets-recognition-as-an-experimental-filmmaker-60220/">
            "Ed Emshwiller,"
          </a>
          <i> Art in America</i>
        </li>

        <li>
          <a href="https://on-curating.org/issue-42-reader/public-ruptures-public-readerships-aids-in-writing.html#.XrWBmRNKhn0">
            "Public Ruptures, Public Readerships: AIDS in Writing,"
          </a>
          <i> On Curating</i>
        </li>

        <li>
          <a href="https://www.artpapers.org/vacantpresence/">
            "Vacant Presence,"
          </a>
          <i> Art Papers</i>
        </li>

        <li>
          <a href="https://www.artpapers.org/deborah-anzinger-an-unlikely-birth/">
            “Deborah Anzinger: An Unlikely Birth,”
          </a>
          <i> Art Papers</i>
        </li>

        <li>
          <a href="https://www.natbrut.com/heather-holmes">"Pisces,"</a>
          <i> Nat. Brut</i>
        </li>

        <li onClick={setView} className="link">
          <span className="link-highlight">“Wilmer Wilson IV”&nbsp;</span>in
          <i> Songs for Sabotage</i>, 2018 New Museum
        </li>

        {viewPic && (
          <StaticImage
            alt="Songs For Sabotage"
            src="../../images/Songs+for+Sabotage__HH__WWIV.jpg"
          />
        )}

        <li>
          <a href="https://thenewinquiry.com/print-on-demand/">
            "Print on Demand,"
          </a>
          <i> The New Inquiry</i>
        </li>

        <li>
          <a href="https://magazine.art21.org/2017/09/19/philadelphia-illuminated/">
            "Philadelphia Illuminated,"
          </a>
          <i> Art21 Magazine</i>
        </li>

        <li>
          <a href="https://icaphila.org/notes/an-aesthetic-headache/">
            "An Aesthetic Headache,"&nbsp;
          </a>
          ICA Philadelphia
        </li>

        <li>
          <a href="http://websafe2k16.com/CC00FF">"CC00FF,"&nbsp;</a>
          WebSafe2k16
        </li>
      </ul>
      <p>
        I edited a small publication called
        <i>&nbsp;the moon will sink into the street</i> for ICA Philadelphia in
        2017 about the ongoingness of AIDS; that’s available
        <a href="http://static.icaphila.org/pdf/Day_Without_Art-2017-TMWSITS.pdf">
          &nbsp;here
        </a>
        .
      </p>
    </Layout>
  );
};

export default Index;
