import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {
  static defaultPrpps = {
    name : "Тариф выбран!"
  }
  render() {
    const name = this.props.name;
    const { color, price, speed, text, ...props } = this.props;



    return (

      <div className="cart">

        <div {...props} style={{ backgroundColor: color }}>{name}</div>
        <div  {...props} style={{ backgroundColor: color }}>{price}</div>
        <div {...props} style={{ backgroundColor: '#F5F5F5' }}>{speed}</div>
        <div {...props} style={{ backgroundColor: '#504b4b' }}>{text}</div>
      </div>
    );
  }
}

export default Tarif;