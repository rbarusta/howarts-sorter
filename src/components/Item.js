import React from 'react'
import { Avatar } from 'material-ui';
const style = {
    height: 150,
    width: 150,
    margin: 5,
    textAlign:'center'
  };

  const box = {
      textAlign:'center'
  }

  const Item = (props)=>{
      const ani = `animated ${props.animation} ${props.infinite}`
        return(
            <div style={box}>

                <Avatar
                    className={ani}
                    src={props.gif}
                    size={20}
                    style={style}
                />
                <h1 className="amatic">{props.name}</h1>
            </div>
             
        )
  }

  export default Item