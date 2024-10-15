import React, { Component } from 'react'

export  class NewsItems extends Component {
  render() {
    let {title , description , imageUrl , newsUrl , author , date , source} = this.props;

    return (
      <div className="container my-3"> 
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left :'94%' , zIndex :'1'}} > {source} </span>
        <img src={!imageUrl ? "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author:"Unknown"} , on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn bnt-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems