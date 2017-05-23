import React from 'react'
import _ from 'lodash'
import json from '../data/data.json'

export default class PortfolioWork extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const payload = json.items;
    const id = this.props.params.portfolio_id;
    const retrievedObj = _.filter(payload, {'itemLabel': id})[0]

    const title = retrievedObj.itemTitle;
    const role = retrievedObj.role;
    const description = retrievedObj.itemDescription;
    const link = "http://" + retrievedObj.link;
    const linkTitle = retrievedObj.link
    const galleryArray = retrievedObj.galleryImages;

    const gallery = _.map(galleryArray, function(image) {
      const filename = image.fileName;
      const url = "/assets/portfolio-" + retrievedObj.category + "/" + retrievedObj.itemLabel + "/" +  image.fullUrl + "." + image.fileExtension;

      return (
        <img src={url} alt={filename} className="gallery__image" key={filename}/>
      )
    })

    return (
      <div className="page-portfolio-work">
        <div className="work__container">
          <div className="work__title">{title}</div>
          <div className="work__role">{role}</div>
          <a href={link} target="_blank" className="work__link">Explore Project</a>
          <div className="work__desc">{description}</div>
        </div>
        <div className="gallery__container">
          {gallery}
        </div>
      </div>
    )
  }
}
