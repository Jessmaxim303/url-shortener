import React from 'react';
import './UrlContainer.css';

import { setUrls } from '../../actions'
import { connect } from 'react-redux';


const UrlContainer = props => {
  const urlEls = props.setUrls.map(url => {
    console.log(url.long_url)
    return (
      <div className="url">
        <h1>{url.title}</h1>
        <img src={url.long_url} />
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
