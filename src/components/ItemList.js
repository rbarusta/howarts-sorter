import React from 'react'
import Item from './Item'

const test = [1,1,1,1,1,1,1]
const ItemList = (props)=>{
    return(
        <section className="row">
                {test.map(()=>{
                    return(
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-1">
                            <div className="box">
                                    <Item/>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default ItemList