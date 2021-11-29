 const ProductInfoRenderItem = ({id, description, date}) =>
    <li key={id}>
      <p>{description}</p>
      <p>{date}</p>
    </li>

export default ProductInfoRenderItem