import React from 'react'
import { Avatar } from 'material-ui';
const style = {
    height: 100,
    width: 100,
    margin: 5
  };

  const box = {
      textAlign:'center'
  }

  const Item = (props)=>{
        return(
            <div style={box}>

                <Avatar
                    src="https://media.giphy.com/media/gTYvXo3ZVi7w4/giphy.gif"
                    size={20}
                    style={style}
                />
                <h1 className="amatic">Richardo</h1>
            </div>
             
        )
  }

  export default Item