import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
