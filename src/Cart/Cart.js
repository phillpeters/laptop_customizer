import React from 'react';
import { USCurrencyFormat } from '../App';
import Summary from '../Summary/Summary'
import './Cart.css';

class Cart extends React.Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <Summary
          key={featureHash}
          selected={selected}
          feature={feature}
        />
      );
    });

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;