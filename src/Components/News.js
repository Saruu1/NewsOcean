import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
const [articles, setarticles] = useState([]);
const [loading, setloading] = useState(true);
const [page, setpage] = useState(1);
const [totalResults, settotalResults] = useState(0)


      const capitalize =(string)=>{
       return string.charAt(0).toUpperCase() + string.slice(1)
      }

      const updateNews = async()=>{
       props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
      setloading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let ParsedData = await data.json();
      props.setProgress(70);
      setarticles(ParsedData.articles);
      settotalResults(ParsedData.totalResults);
      setloading(false);
      
      props.setProgress(100);
    }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsOcean`
    updateNews();
    // eslint-disable-next-line
  }, [])
  
   
    //  const HandlePrevClick = async ()=>{
    //   setpage(page-1)
    // updateNews();
    // };

    //  const HandleNextClick = async ()=>{
    //     setpage(page+1)
    //   })
    //   updateNews();
    // };

    const fetchMoreData = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`
      setpage(page+1)
      let data = await fetch(url);
      let ParsedData = await data.json();
      setarticles(articles.concat(ParsedData.articles));
      settotalResults(ParsedData.totalResults);
    }  
      
  
    return (
      <div>
        <h2 className='text-center'style= {{margin:'35px', color:'#097969', marginTop:'90px'}}>NewsOcean - {capitalize(props.category)} Headlines</h2>
         {loading && <Spinner/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
          >
        <div className="row my-3 mx-5">
        {articles.map((element) =>{
          return (
          <div className="col-md-3" key={element.url}>  
            <NewsItem title={element.title?element.title : ""} desc={element.description?element.description:"unavailable"} imageUrl={element.urlToImage} 
            source = {element.source.name} author = {element.author? element.author:"Unknown"} time ={element.publishedAt} newsUrl ={element.url} /> 
         </div>
          );
        })};
        </div>
      </InfiniteScroll>
      </div>

    )   
};
   

News.defaultProps = {
  pagesize : '9',
  country : 'us',
   category : 'general'
};

News.propTypes = {
  pagesize :PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress : PropTypes.func
};

export default News