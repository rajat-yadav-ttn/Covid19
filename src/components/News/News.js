import React , {Component} from 'react';
import {connect} from 'react-redux';

import './News.css';

import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import * as actions from '../../store/actions';

const NewsItem=props=>{
  let pdate=new Date(props.publishedAt),
     d=pdate.getDate(),
     m=pdate.getMonth(),
     y=pdate.getFullYear(),
     date=`${d}/${m+1}/${y}`;

  
    
  return(
      <div className='news_item_container'>
       <div className='date_source'> 
        <span className='source'>Source: 
            <a target="_blank" href={props.url}>{props.source}</a>
        </span>
        <span className='date'>{date}</span>
      </div>
      <div className='thumbnail'>
          <img src={props.newsThumb} alt='' />
      </div>
          <div className='title'>{props.title}</div>
            
      <p className='content'>
        {props.content}
      </p> 
      
      </div>
  );
}




class News extends Component{
    componentDidMount(){
        this.props.fetchNews();
     }
    
    
    

    render(){

      const slideRender=()=>{
        if(!this.props.isNewsLoading){
          return(
            this.props.news.slice(0,3).map((item,index)=>(
               
              <Slide index={index} 
                      key={index}>
                  <NewsItem 
                      title={item.title}
                      newsThumb={item.urlToImage}
                      author={item.author}
                      source={item.source.name}
                      url={item.url}
                      content={item.content}
                      publishedAt={item.publishedAt}
                    />
              </Slide>
            ))
            
          )
        }
      }

      // if(!this.props.isNewsLoading){
      //   console.log(this.props.news)}
      
      return(
        <div className='news_container'>
                <h3>News</h3>
               
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={56}
        totalSlides={3}
       
      >
        <Slider className='slider'>  
          {
            this.props.isNewsLoading?
            <div className='news_loading'>
              Loading...
            </div> 
              :
            slideRender()
          }
        </Slider>

       

        <div className='carousel_btns'>
               <Dot className='dot' slide={0} />
               <Dot className='dot' slide={1} />
               <Dot className='dot' slide={2} />               
        </div>


      </CarouselProvider>
            </div>
        );
    }
  }


const mapStateToProps=state=>{
  return{
    news:state.news,
    isNewsLoading:state.isNewsLoading,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    fetchNews:()=>{dispatch(actions.fetchNews())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);

