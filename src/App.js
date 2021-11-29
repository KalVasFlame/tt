import { Routes, Route } from "react-router-dom"
import ProductsView from "./views/products-view"
import routes from "./routes"
import data from "./data"
import ProductInfoView from "./views/product-info-view"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path={routes.products} element={<ProductsView data={data} />} />
        <Route exact path={routes.productsDetails} element={<ProductInfoView />} />
      </Routes>
    </>
  )
}

export default App
