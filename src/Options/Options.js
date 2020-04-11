import React from 'react';
import './Options.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import { USCurrencyFormat } from '../App';

class Options extends React.Component {
  render() {
    const { item, feature, selected, handleUpdateFeature, id } = this.props;

    return (
      <div className="feature__item">
        <input
          type="radio"
          id={id}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={e => handleUpdateFeature(feature, item)}
        />
        <label htmlFor={id} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default Options;