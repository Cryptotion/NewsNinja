import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "20rem" }}>
                    <img src={imageUrl} className="card-img-top " alt="..." />
                    <div style= {{display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'}}>
                    <span className="badge rounded-pill bg-danger" >{source}</span>

                    </div>
                    <div className="card-body ">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark  ">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItems
