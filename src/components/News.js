import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

   static defaultProps ={
      category : 'general',
      pageSize :6
  }

  static propTypes = {
    category : PropTypes.string,
    pageSize : PropTypes.number,
  };
  
    constructor(){
        super();
        this.state ={
            articles : [],
            loading : false,
            page :1
            
        }
    }

    async update(){
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=158872de40144f5ebd65f0ef2e5ba8a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading :true})
        let data= await fetch(url);
        let parseData=  await data.json();
        console.log(parseData)
        this.setState({articles :parseData.articles, totalResults: parseData.totalResults ,loading :false})
    }
   async componentDidMount(){
    this.update();
}

handlerPrevclick = async()=>{
 
    this.setState({ page :this.state.page -1})
    this.update();
}

handlerNextclick = async()=>{
    this.setState({ page :this.state.page +1})
    this.update();
}
  render() {
    return (
      <div className="container my-5" >
        <h2 className="text-center">NewsMonkey - TopHeadLines</h2>
       { this.state.loading && <Spinner/>}
        <div className= "row" >
            { this.state.articles?.map((element)=>{
               return <div className="col-md-4" key ={element.url}>
                <NewsItems title={element ? element.title: ""} description={element ?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} 
                date ={element.publishedAt } source={element.source.name}/>
                </div>
            })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlerPrevclick} className="btn btn-dark  "> &larr; Previous</button>
        <button  disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" onClick={this.handlerNextclick} className="btn btn-dark "> &rarr; Next</button>
        </div>
      </div>
    )
  }
}
