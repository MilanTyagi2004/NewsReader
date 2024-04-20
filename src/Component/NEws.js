import React, {  useEffect, useState } from 'react';
import NewItems from './NewsItems';
import LoadingBar from './LoadingBar';
import InfiniteScroll from 'react-infinite-scroll-component';
const NEws =(props)=> {
    const CapitalizeFirstWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const[articles,setArticles]=useState([])
    const[Page,setPage]=useState(1)
    const[loading,setLoading]=useState(true)
    const[totalResults,setTotalresults]=useState(0)
    document.title = `${CapitalizeFirstWord(props.category)} - News`

    
    const updateNew= async()=> {
        try{
            props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0be1445e84da4a9fa1c28780604c5c92&page=${Page}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(30);
            let parseData = await data.json();
            props.setProgress(70)
            setArticles(parseData.articles)
            setLoading(false)
            setTotalresults(parseData.totalResults)
            setPage(Page+1)
            props.setProgress(100) 
        }
       catch(error){
        console.log("error has been occurd "+ error)
       }
    }
    useEffect(()=>{
        updateNew()
    },[])
    
   const  fetchMoreData = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0be1445e84da4a9fa1c28780604c5c92&page=${Page}&pageSize=${props.pageSize}`; 
            setLoading(true)
            setPage(Page+1)
            let data = await fetch(url);
            let parseData = await data.json();
            setArticles(articles.concat(parseData.articles))
            setLoading(false)
            setTotalresults(parseData.totalResults)
           

        } catch (error) {
            console.log("error has been occurred" + error);
        }
    };

        return (
            <div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>{<LoadingBar />}</h4>}
                >

                    <div className='row '>
                        {articles.map((element) => {
                            return (
                                <div className='col-md-3' key={element.url}>
                                    <NewItems
                                        title={element.title ? element.title.slice(0, 35) : ""}
                                        description={element.description ? element.description.slice(0, 75) : ""}
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        authr={element.author}
                                        newsTime={element.publishedAt}
                                        Sourcee={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        );
    }


export default NEws;
