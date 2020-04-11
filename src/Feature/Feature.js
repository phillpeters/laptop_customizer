import React from 'react';
import Options from '../Options/Options';
import './Feature.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Feature extends React.Component {
  render() {
    const { features, feature, selected, handleUpdateFeature } = this.props;
    const options = features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <Options
          item={item}
          feature={feature}
          selected={selected}
          handleUpdateFeature={handleUpdateFeature}
          id={itemHash}
          key={itemHash}
        />
      );
    });

    return (
      <fieldset className="feature" >
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Feature;