import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {

  render(){
    const name = this.props.name;
  const {color, ...props} = this.props;
  
  
  
    return(
    
      <div className="cart">
      
      <div {...props} style={{backgroundColor: color}}>{name}</div>
      <div  {...props}style={{backgroundColor: color}}>{...props}</div>
      <div {...props}>{...props}</div>
      <div {...props}>{...props}</div> 
      </div>
      );
    }  
}

export default Tarif;