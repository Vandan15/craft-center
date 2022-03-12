import React from 'react'
import ProductCard from './ProductCard'

export default function CardWrapper(props) {
  return (
    <div className='card-wrapper'>
        <h1 className='header-text'>{props.title}</h1>
        <div className='row'>
        {
            props.cardList.map((d) => {
                return(
                    <ProductCard item={d}/>
                )
            })
        }
        </div>
    </div>
  )
}
