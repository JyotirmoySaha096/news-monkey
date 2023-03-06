import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state= {
     articles: [],
     loding: false,
     page: 1
    }
    // console.log(this.state.articles[0].articles);
  }

  handlePreviousClick = async()=>{
    this.setState({loding: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62090efedc048999899552738aa6232&page=${this.state.page-1}&pageSize=9`;
    let data = await fetch(url);
    let articlesData = await data.json();
    this.setState({loding: false});
    this.setState({page:this.state.page-1, articles:articlesData.articles});
  }

  handleNextClick = async()=>{
    this.setState({loding: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62090efedc048999899552738aa6232&page=${this.state.page+1}&pageSize=9`;
    let data = await fetch(url);
    let articlesData = await data.json();
    this.setState({loding: false});
    this.setState({page:this.state.page+1,articles:articlesData.articles});
  }

  

  async componentDidMount(){
    this.setState({loding: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62090efedc048999899552738aa6232&page=${this.state.page}&pageSize=9`;
    let data = await fetch(url);
    let articlesData = await data.json();
    this.setState({loding: false})
    this.setState({articles:articlesData.articles});
  }
  render() {
    return (
      <>
      {this.state.loding && <Spinner />}
      <div className='container my-3'>
        <h2 className='text-center'>Top Headlines</h2>
        {!this.state.loding && <div className="row">
          {this.state.articles.map((article)=>{
            return (<div className="col-md-4" key={article.url}><NewsItem key={article.url} newsId={article.url} thisNewsTitle = {article.title===null? null: article.title.slice(0,30)} thisNewsDescription = {article.description===null ? null : article.description.slice(0,50)} imageURL = {article.urlToImage}/></div>)
          })}
        </div>}
      </div>
      <div className='container' style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Button variant="secondary" onClick={this.handlePreviousClick} disabled={this.state.page===1 ? true:false}>&larr; Previous</Button>
        <Button variant="secondary" onClick={this.handleNextClick}>Next &rarr;</Button>
      </div>
      
      </>
    )
  }
}

export default News