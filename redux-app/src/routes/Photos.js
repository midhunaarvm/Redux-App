import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import PhotoData from "../components/PhotoData";


function Photos() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(setProducts(response.data));
  };


  
 products===undefined ? fetchData() : console.log("Already fetched");
  return (
    <div>
      
  
      <div>
        <h1>This is photos page</h1>
      </div>
      <PhotoData />
     
    </div>
  );
}

export default Photos;