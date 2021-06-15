import React, { useState } from "react";
import ProductComponents from "./ProductComponents";
import "./ProductContainer.css";
import { data } from "../data";
import { Input } from "@material-ui/core";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SearchIcon from '@material-ui/icons/Search';

const ProductsContainer = () => {
  var [selectFilter, setSelectFilter] = useState(false);
  var [filterActive, setFilterActive] = useState(false);
  var [searchActive, setSearchActive] = useState(false);
  var [normalActive, setNormalActive] = useState(true);
  var [search, setSearch] = useState("");
  var [searchProduct, setSearchproduct] = useState([]);
  const click =(key) => {
    setFilterActive(true)
    setSearchActive(false);
    setNormalActive(false)

    if(key === 'phone'){
      const filteredData = data.filter((fil) => fil.category === 'Phone');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
    if(key === 'audio'){
      const filteredData = data.filter((fil) => fil.category === 'Audio');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
    if(key === 'boat'){
      const filteredData = data.filter((fil) => fil.brand === 'Boat');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
    if(key === 'boult'){
      const filteredData = data.filter((fil) => fil.brand === 'Boult');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
    if(key === 'apple'){
      const filteredData = data.filter((fil) => fil.brand === 'Apple');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
    if(key === 'MI'){
      const filteredData = data.filter((fil) => fil.brand === 'MI');
      setSelectFilter(filteredData);
      console.log(selectFilter)
    }
   
  }
  const searchClick = () =>{
     setSearchproduct([])
    data.forEach(d =>{ 
      setSearchActive(true);
      setFilterActive(false);
      setNormalActive(false);
     
        d.search.forEach(item => {
         if(item === search){
           
          setSearchproduct(arr => [...arr, d])
          console.log(searchProduct)
         }
        })
    
    })
  }

  return (
    <div className="container">
      <div className="filter">
      <div style= {{width: "400px", display:"flex", alignItems : "center"}}>
      <div className = "dropdown">
        <button className = "dropbtn">Filter by category</button>
        <div className = "dropdown-content">
          <li onClick = {() => click("phone")}>Phone</li>
          <li onClick = {() => click("audio")}>Audio</li>
        </div></div>
      <div className = "dropdown">
        <button className = "dropbtn">Filter by Brand</button>
        <div className = "dropdown-content">
          <li  onClick = {() => click("apple")}>Apple</li>
          <li  onClick = {() => click("boat")}>Boat</li>
          <li  onClick = {() => click("MI")}>MI</li>
          <li  onClick = {() => click("boult")}>Boult</li>
        </div></div>
        <RotateLeftIcon onClick = {() => setNormalActive(true)} style = {{margin: "10px"}}/>
        </div>
        <div style = {{width: "400px", display :"flex"}}>
        <div className = "input">
        <SearchIcon />
          <input placeholder ="Search" onChange = {e => setSearch(e.target.value)} />
        </div>
        <button style ={{marginLeft : "20px"}} onClick = {searchClick}>Search</button></div>
        
      </div>
      <div className="products-container" >
        
        {filterActive && selectFilter.map((d, i) => (
          <ProductComponents
            id = {i}
            name={d.name}
            brand={d.brand}
            image={d.image}
            price={d.price}
            rating={d.rating}
          />
        )) 
        }
        {normalActive && data.map((d, i) => (
          <ProductComponents
            id = {i}
            name={d.name}
            brand={d.brand}
            image={d.image}
            price={d.price}
            rating={d.rating}
          />
        )) 
        }
        {searchActive && searchProduct.map((d, i) => (
          <ProductComponents
            id = {i}
            name={d.name}
            brand={d.brand}
            image={d.image}
            price={d.price}
            rating={d.rating}
          />
        ))
        }
      
      </div>
    </div>
  );
};

export default ProductsContainer;
