import React from 'react'
import Item from './Item'
const style = {
    box:{
        width:'100%'
    }
}
const ItemList = (props)=>{
    
    return(
        <section className="row" style={style.box}>
                {props.data.map((i, index)=>{
                    return(
                        <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="box">
                                    <Item animation="rubberBand" name={i.name} gif={i.gif}/>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default ItemList