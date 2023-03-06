import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsCard extends Component {

  render() {
    const {title, description, imageURL, newsId} = this.props;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{title}...</Card.Title>
          <Card.Text>
            {description}...
          </Card.Text>
          <Button variant="primary" size='sm'><a className='anc' href={newsId} target="_blank" >Read More</a></Button>
        </Card.Body>
      </Card>
    )
  }
}

export default NewsCard;
