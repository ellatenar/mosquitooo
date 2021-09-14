import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../../components/Layout'

// to do: turn below into Links, and add content

const Archive = () => {
    return (
        <Layout pageName="Mosquito" title="Archive">
          <p><Link to="/archive/zodiac">The Zodiac Novels</Link></p>
          <p className="bottom-border">
            <Link to="/archive/reading">Reading, 2017 – 2020</Link>
          </p>
          <p><Link to="/archive/toward-the-jubilee">Toward the Jubilee</Link></p>
          <p><Link to="">Mourning, Militancy, and Messiness</Link></p>
          <p><Link to="">Psychic Endlessness</Link></p>
          <p><Link to="">Vacant Presence</Link></p>
          <p><Link to="">Improvisational Readership</Link></p>
          <p><Link to="">Queer Charisma</Link></p>
          <p><Link to="">Who Owns Public Space?</Link></p>
          <p><Link to="">On Mundanity</Link></p>
          <p><Link to="">Loneliness Studies</Link></p>
          <p><Link to="">An Aesthetic Headache</Link></p>
          <p><Link to="">Disaster Art, Disaster Activism</Link></p>
          <p><Link to="">Real Violence</Link></p>
          <p><Link to="">Worst Fear, Best Fantasy</Link></p>
          <p><Link to="">Print on Demand</Link></p>
          <p><Link to="">Bad Apples</Link></p>
          <p><Link to="">Socialism, Barbarism, and Fatigue</Link></p>
          <p><Link to="/archive/channelizer">Channelizer</Link></p>
      </Layout>
    )
}

export default Archive