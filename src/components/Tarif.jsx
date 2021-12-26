import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {

  render(){
    const name = this.props.name;
  const {color, ...props} = this.props;
  
  
  
    return(
    
      <div className="cart">
      
      <div className="tariff-name" style={{backgroundColor: color}}>{name}</div>
      <div className="priсe" style={{backgroundColor: color}}>{price}</div>
      <div className="speed">{speed}</div>
      <div className="text">{text}</div> 
      </div>
      );
    }  
}

export default Tarif;