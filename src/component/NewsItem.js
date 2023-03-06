import React, { Component } from 'react'
import NewsCard from './NewsCard'

export class NewsItem extends Component {
  
  render() {
    const { thisNewsTitle, thisNewsDescription, imageURL , newsId} = this.props;
    return (
      <div>
      <NewsCard key={newsId} newsId={newsId} title={thisNewsTitle} description={thisNewsDescription} imageURL={imageURL}/>
      </div>
    )
  }
}

export default NewsItem