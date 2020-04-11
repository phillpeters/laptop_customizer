import React from 'react';
import { USCurrencyFormat } from '../App';
import './Summary.css';

class Summary extends React.Component {
  render() {
    const { selected, feature } = this. props;
    const selectedOption = selected[feature];
    return (
      <div className="summary__option">
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default Summary;