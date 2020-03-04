import React from 'react';
import './UrlContainer.css';

import { setUrls } from '../../actions'
import { connect } from 'react-redux';


const UrlContainer = props => {
  const urlEls = props.setUrls.map(url => {
    console.log(url[0].long_url)
    return (
      <div className="url">
        <h1>{url[0].title}</h1>
        <img src={url[0].long_url} />
        <img src={url[0].short_url} />
        <h1>{url.long_url}</h1>
        <h1>{url.short_url}</h1>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}


export const mapState = state => ({
  setUrls: state.urls
})

export default connect(mapState)(UrlContainer)
