import React from 'react'
import _ from 'lodash'
import json from '../data/data.json'

export default class PortfolioInternetFamous extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const payload = json.items;
    const id = this.props.params.portfolio_id;
    const retrievedObj = _.filter(payload, {'itemLabel': id})[0]

    const title = retrievedObj.itemTitle;
    const description = retrievedObj.itemDescription;
    const galleryArray = retrievedObj.galleryImages;

    const gallery = _.map(galleryArray, function(image) {
      const filename = image.fileName;
      const url = "assets/portfolio-" + retrievedObj.category + "/" + retrievedObj.itemLabel + "/" +  image.fullUrl + "." + image.fileExtension;

      return (
        <img src={url} alt={filename} className="internetfamous__image" key={filename}/>
      )
    })

    const isFools = (title === 'foolsdoart') ? 'Y' : 'N';

    const addFoolsClass = function() {
      if(isFools === 'Y') {
        return 'gallery__container--foolsdoart'
      }
      else {
        return
      }
    }

    console.log(addFoolsClass)

    return (
      <div className="page-portfolio-work">
        <div className="work__container work__container--internetfamous">
          <div className="work__title">{title}</div>
          <div className="work__desc">{description}</div>
        </div>
        <div className="photography__gallery">
          {gallery}
        </div>
      </div>
    )
  }
}
