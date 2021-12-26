import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {
  static defaultPrpps = {
    name : "Тариф выбран!"
  }
  render() {
    const name = this.props.name || "Тариф выбран!";
    const { color, price, speed, text, ...props } = this.props;
    let out = document.getElementById('out');
    let cart = document.getElementById('cart');
    if(cart.onclick){
      out.innerHTML = 'Тариф';
    }
    return (

      <div className="cart" id='cart'>

        <div {...props} id ='out'style={{ backgroundColor: color }}>{name}</div>
        <div  {...props} style={{ backgroundColor: color }}>{price}</div>
        <div {...props} style={{ backgroundColor: '#F5F5F5' }}>{speed}</div>
        <div {...props} style={{ backgroundColor: '#504b4b' }}>{text}</div>
      </div>
    );
  }
}

export default Tarif;