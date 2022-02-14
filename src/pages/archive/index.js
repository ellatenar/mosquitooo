import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

const Archive = () => {
  return (
    <Layout pageName="Mosquito" title="Archive">
      <p>
        <Link to="/archive/zodiac">The Zodiac Novels</Link>
      </p>
      <p className="bottom-border">
        <Link to="/archive/reading">Reading, 2017 – 2020</Link>
      </p>
      <p>
        <Link to="/archive/toward-the-jubilee">Toward the Jubilee</Link>
      </p>
      <p>
        <Link to="/archive/mourning-militancy">
          Mourning, Militancy, and Messiness
        </Link>
      </p>
      <p>
        <Link to="/archive/psychic-endlessness">Psychic Endlessness</Link>
      </p>
      <p>
        <Link to="/archive/vacant-presence">Vacant Presence</Link>
      </p>
      <p>
        <Link to="/archive/improv-readership">Improvisational Readership</Link>
      </p>
      <p>
        <Link to="/archive/queer-charisma">Queer Charisma</Link>
      </p>
      <p>
        <Link to="/archive/who-owns-public-space">Who Owns Public Space?</Link>
      </p>
      <p>
        <Link to="/archive/on-mundanity">On Mundanity</Link>
      </p>
      <p>
        <Link to="/archive/loneliness-studies">Loneliness Studies</Link>
      </p>
      <p>
        <Link to="/archive/an-aesthetic-headache">An Aesthetic Headache</Link>
      </p>
      <p>
        <Link to="/archive/disaster-art">Disaster Art, Disaster Activism</Link>
      </p>
      <p>
        <Link to="/archive/real-violence">Real Violence</Link>
      </p>
      <p>
        <Link to="/archive/worst-fear">Worst Fear, Best Fantasy</Link>
      </p>
      <p>
        <Link to="/archive/print-on-demand">Print on Demand</Link>
      </p>
      <p>
        <Link to="/archive/bad-apples">Bad Apples</Link>
      </p>
      <p>
        <Link to="/archive/socialism-barbarism">
          Socialism, Barbarism, and Fatigue
        </Link>
      </p>
      <p>
        <Link to="/archive/channelizer">Channelizer</Link>
      </p>
    </Layout>
  );
};

export default Archive;
