import React from 'react'
import { connect } from 'react-redux'

export default class Accolades extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  render() {
    return (
      <div className="accolades">
        <div className="accolades__heading">Accolades</div>

        <div className="accolades__container">
          <div className="accolades__company">Phaidon Press</div>
          <div className="accolades__title">A Smile In The Mind, 2014</div>
          <div className="accolades__project">Project: FoolsDoArt</div>
        </div>

        <div className="accolades__container">
          <div className="accolades__company">Oprah Magazine</div>
          <div className="accolades__title">Publication, 2014</div>
          <div className="accolades__project">Project: FoolsDoArt</div>
        </div>

        <div className="accolades__container">
          <div className="accolades__company">Time Magazine</div>
          <div className="accolades__title">Publication, 2014</div>
          <div className="accolades__project">Project: FoolsDoArt</div>
        </div>

        <div className="accolades__container">
          <div className="accolades__company">Mashable</div>
          <div className="accolades__title">Trending Articles, 2014</div>
          <div className="accolades__project">Project: FoolsDoArt</div>
        </div>

        <div className="accolades__container">
          <div className="accolades__company">The Chive</div>
          <div className="accolades__title">Trending Articles, 2013</div>
          <div className="accolades__project">Project: IJoinedTinderAsAHorse</div>
        </div>
      </div>
    )
  }
}
