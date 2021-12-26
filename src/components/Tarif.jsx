import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {

  render(){
    const name = this.props.name;
  const {color, ...props} = this.props;
  
  
  
    return(
    
      <div className="cart">
      
      <div {...props} style={{backgroundColor: color}}>{name}</div>
      <div  {...props}style={{backgroundColor: color}}>{price}</div>
      <div {...props}>{speed}</div>
      <div {...props}>{text}</div> 
      </div>
      );
    }  
}

export default Tarif;