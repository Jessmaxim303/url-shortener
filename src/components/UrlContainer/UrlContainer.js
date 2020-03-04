import React, { Component } from 'react';
import './UrlContainer.css';

import { setUrls } from '../../actions'
import { getUrls } from '../../apiCalls';
import { connect } from 'react-redux';


export class UrlContainer extends Component {

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .then(info => console.log(info))
      // .catch(err => console.error('Error fetching:', err));
  }
 
    render() {

       const urlEls = this.props.urls.map(url => {
       console.log(url.long_url)
         return (
            <div className="url">
              <h1>{url.title}</h1>
              <img src={url.long_url} />
            </div>
          )
  });
    
      return (
        <div className="url">
          <h1>{urlEls}</h1>
          <img  />
        </div>
      )
    }
  }

export const mapStateToProps = state => ({
  urls: state.urls
})

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer)
