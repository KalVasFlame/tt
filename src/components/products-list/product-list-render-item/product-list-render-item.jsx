import { Link } from 'react-router-dom';

const ProductListRenderItem = (i) => {
   const {id, imageUrl, name, count} = i
    
    return (
        <li key={id}>   
          <Link
            to={`${id}`}          
            state={{ data: i }}
          >
          <p>{imageUrl}</p>
          <p>{name}</p>
          <p>count: {count}</p>
          </Link>
          <button type='button'>Add</button>
        </li>
  )
}
  
export default ProductListRenderItem