import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {
  state = {
    name : false
  };

  makeSelected = () => {
    this.setState({
      name : !this.state.name
    });
  }
  render() {
    const name = this.state.name;
    const {color, price, speed, text, ...props } = this.props;
 
    return (

      <div className="cart" id='cart' onClick={this.makeSelected} >

        <div {...props} id ='out'style={{ backgroundColor: color }}>{this.state.name ? "Нажата" : "Нажми меня"}</div>
        <div  {...props} style={{ backgroundColor: color }}>{price}</div>
        <div {...props} style={{ backgroundColor: '#F5F5F5' }}>{speed}</div>
        <div {...props} style={{ backgroundColor: '#504b4b' }}>{text}</div>
      </div>
    );
  }
}

export default Tarif;