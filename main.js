import products from "./api/products.json"
import {showProductContainer} from "./homeProductCards"
import './style.css'

console.log(products)
//Defined a function named 'showproductContainer' that takes an array of products as input.
showProductContainer(products)