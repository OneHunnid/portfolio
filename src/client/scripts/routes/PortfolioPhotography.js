import React from 'react'
import json from '../data/data.json'
import $ from "jquery";


export default class PortfolioPhotography extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const payload = json.items;
    const id = this.props.params.portfolio_id;
    const retrievedObj = _.filter(payload, {'itemLabel': id})[0]
    const title = retrievedObj.itemTitle;
    const galleryArray = retrievedObj.galleryImages

    const gallery = _.map(galleryArray, function(image) {
      const filename = image.fileName;
      const orientation = image.orientation;
      const url = "./assets/portfolio-" + retrievedObj.category + "/" + retrievedObj.itemLabel + "/" +  image.fullUrl + "." + image.fileExtension;

      const galleryImageStyling = function() {
        if (orientation === 'vertical') {
          return 'photography__image photography__image--vertical'
        }
        else {
          return 'photography__image'
        }
      }

      return (
        <img src={url} alt={filename} className={galleryImageStyling()} key={filename}/>
      )
    })

    return (
      <div className="page-portfolio-photography">
        <div className="photography__container">
          <div className="photography__title">{title}</div>
        </div>
        <div className="photography__gallery">
            {gallery}
        </div>
      </div>
    )
  }
}
