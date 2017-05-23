import React from 'react'
import { Link } from 'react-router'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    const json = this.props.data;
    const title = json.siteTitle;
    const description = json.siteDescription;

    return (
      <div className="banner js-showtime">
        <div className="banner__name">{title} –</div>
        <div className="banner__tagline">{description}</div>
      </div>
    )
  }
}
