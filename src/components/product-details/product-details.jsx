import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductInfoRenderItem from './product-info-render-item'

const ProductDetails = () => {
  let location = useLocation(); 
  const { imageUrl, name, size, weight, comments } = location.state.data

  return (
    <div>
      <p>{imageUrl}</p>
      <p>{name}</p>
      <p>width: {size.width}</p>
      <p>height: {size.height}</p>
      <p>weight: {weight}</p>
      <ul>
        {comments && comments.map(ProductInfoRenderItem)}
      </ul>
    </div>
  )
}

export default ProductDetails
