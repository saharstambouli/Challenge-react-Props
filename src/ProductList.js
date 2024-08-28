import React from 'react'
import ProductCard from './ProductCard'
import {data} from './ProductsData'

const ProductList = () => {
  return (
    <div className='row'>
        {
            data.map((product , i) => (
                <div className='col-md-3 col-sm-12 my-3' key={i} >
                    <ProductCard  product={product} />
                </div>
                
            ))
        }
    </div>
  )
}

export default ProductList