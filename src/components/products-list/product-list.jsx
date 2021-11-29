import React from 'react'
import ProductListRenderItem from './product-list-render-item/product-list-render-item'

import data from '../../data'

const ProductList = () => (
    <ul>
      {data.map(ProductListRenderItem)}
    </ul>
  )


export default ProductList
