import React from 'react';
import Feature from '../Feature/Feature';
import './Features.css';

class Features extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <Feature
          features={this.props.features}
          feature={feature}
          selected={this.props.selected}
          handleUpdateFeature={this.props.handleUpdateFeature}
          key={featureHash}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default Features;