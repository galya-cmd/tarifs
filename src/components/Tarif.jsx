import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {

  render() {
    const name = this.props.name;
    const { color, price, speed, text, ...props } = this.props;



    return (

      <div className="cart">

        <div {...props} style={{ backgroundColor: color }}>{name}</div>
        <div  {...props} style={{ backgroundColor: color }}>{price}</div>
        <div {...props} style={{ backgroundColor: color }}>{speed}</div>
        <div {...props} style={{ backgroundColor: '#504b4b' }}>{text}</div>
      </div>
    );
  }
}

export default Tarif;