import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  // __createNavigation(obj) {
  //   console.log(obj)
  //
  //   const category = obj[0].category;
  //
  //   const navLink = _(obj)
  //     .map('itemTitle')
  //     .value();
  //
  //     const navLinkUrl = _.map(navLink, function(item) {
  //       const kebabCaseLink= _.kebabCase(item);
  //       return category + '/' + kebabCaseLink;
  //     });
  //
  //     console.log(navLinkUrl)
  //
  //     return (
  //       <Link to={navLinkUrl}></Link>
  //     )
  //
  //     console.log(navLink)
  // }
  render() {
    // const payload = this.props.data;
    // const itemsObj = payload.items;
    // const personalObj = payload.website;
    // const photographyObj = _.filter(payload.items, {'category': 'photography'})
    // const workObj = _.filter(payload.items, {'category': 'work'})
    //
    // this.__createNavigation(photographyObj)


    return (
      <header id="header" className="header js-showtime">

        <Link to="/" className="logo">
          <svg class="logo__svg" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M181 489 c-80 -23 -148 -94 -170 -174 -12 -42 -15 -115 -5 -115 3 0 17 14 32 31 35 43 96 69 160 69 l52 0 0 100 c0 111 1 109 -69 89z"></path>
              <path d="M350 340 l0 -130 76 0 77 0 -6 60 c-3 39 -14 76 -31 105 -26 44 -82 95 -104 95 -9 0 -12 -38 -12 -130z"></path>
              <path d="M155 206 c-37 -17 -54 -44 -61 -99 -7 -49 10 -70 73 -93 94 -33 206 -4 272 72 l35 39 -112 3 -112 3 0 38 c0 53 -32 65 -95 37z"></path>
              </g>
          </svg>
          <div className="logo__wordmark">Chris Limbrick</div>
        </Link>

        <div id="navLabel" className="nav-label">Menu</div>

        <nav id="nav" className="nav">
          <div className="nav__section">
            <div className="nav__title">Personal</div>
            <Link to="/" className="nav__item" activeClassName="is-active">About</Link>
            <a href="https://twitter.com/climbrick" target="_blank" className="nav__item">Twitter</a>
            <a href="https://instagram.com/climbrick" target="_blank" className="nav__item">Instagram</a>
            <a href="https://dribbble.com/climbrick" target="_blank" className="nav__item">Dribbble</a>
            <a href="https://github.com/onehunnid" target="_blank" className="nav__item">Github</a>
            <a href="mailto:climbrick@protonmail.com" target="_blank" className="nav__item">Email</a>
          </div>

          <div className="nav__section">
            <div className="nav__title">Works</div>
            <Link to="portfolio/work/squarespace-circle" className="nav__item" activeClassName="is-active">Squarespace Circle</Link>
            <Link to="portfolio/work/urban-assembly-maker" className="nav__item" activeClassName="is-active">Urban Assembly Maker</Link>
            <Link to="portfolio/work/rootopedia" className="nav__item" activeClassName="is-active">Rootopedia</Link>
            <Link to="portfolio/work/codeandcraft" className="nav__item" activeClassName="is-active">Code & Craft</Link>
            <Link to="portfolio/work/camonote" className="nav__item" activeClassName="is-active">Camonote</Link>
            <Link to="portfolio/work/dimmi" className="nav__item" activeClassName="is-active">Dimmi</Link>
          </div>

          <div className="nav__section">
            <div className="nav__title">Photography</div>
            <Link to="portfolio/photography/monochrome" className="nav__item" activeClassName="is-active">Monochrome</Link>
          </div>

          <div className="nav__section">
            <div className="nav__title">Internet Famous</div>
            <a href="https://www.instagram.com/foolsdoart/" target="_blank" className="nav__item">Foolsdoart</a>
          </div>
        </nav>

      </header>
    )
  }
}
