import React, { Component } from 'react';
import Quote from '../components/quotes/Quote.js';
import { getQuote } from '../services/quotesApi.js';
import Button from '../components/commons/button/Button';

export default class QuoteFetcher extends Component {
    state  = {
        quoteProvider: 'ron',
        quote: { text: '', name: '', img: '' }
    }

    componentDidMount() {
        this.fetch();
      }
    
     
    
      fetch = () => {
        return getQuote()
        // .then(quote => this.setState({ quote }));
      }


    render() {
        const { quote } = this.state;

        return (
        <>
            <Quote {...quote} />
            {/* <Button text="Get a new one" onClick={this.fetch} /> */}
        </>
        );
    }
}
