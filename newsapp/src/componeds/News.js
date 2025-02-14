import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
   
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, settotalResults] = useState(0)
 

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

   

    const  updateNews=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apikey}&page=${page}&pageSize=${ props.pageSize}`;
        
        setLoading(true)
        let data = await fetch(url);
         props.setProgress(30);
        let parsedata = await data.json();
         props.setProgress(70);
        console.log(parsedata);
        setArticles( parsedata.articles);
        settotalResults(parsedata.totalResults);
        setLoading(false)
        
         props.setProgress(100);

    }
useEffect(() => {
    document.title = `${capitalizeFirstLetter( props.category)} - NewsForever`;
    updateNews();
//eslint-disable-next-line
}, [])

    

    const fetchMoreData = async () => {
        
        
        const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apikey}&page=${page+1}&pageSize=${ props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        setArticles(articles.concat(parsedata.articles));
        settotalResults(parsedata.totalResults)
       
    };

    
        return (
            <>
                <h1 className='text-center' style={{ margin: "37px", marginTop:"90px" }}>Top {capitalizeFirstLetter( props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner></Spinner>}>
                    <div className='container'>
                        <div className='row'>
                            
                            {articles.map((element) => {
                                return <div className='col-md-12 my-2' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                


            </>
        )
    
}
 News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
