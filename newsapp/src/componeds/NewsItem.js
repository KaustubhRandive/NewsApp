import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
           


            <div className="card " >
                <div className="row g-8">
                    <div className="col-md-4">
                        <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/F801/production/_133098436_eclipse1.jpg" : imageUrl} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><small className="text-body-danger text-danger"><b style={{ color: 'black' }}>Short </b>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <p className="card-text">{description}</p>

                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More at {source} </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>








    )

}

export default NewsItem
