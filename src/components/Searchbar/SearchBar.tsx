import React, {useState,useEffect}from 'react'
import { SearchBarWrapper } from './SearchBar.module.ts'
import { CiSearch } from "react-icons/ci";


const SearchBar:React.FC=()=> {
  const [input,setInput]= useState("")
  
  useEffect(()=>{
    let value: string|undefined =document.querySelector('input')?.value
  
  },[input])

  console.log(input)
  return <SearchBarWrapper>
    <input type="text" id="name" name="name" placeholder="Enter the city" /> 
    <div className="searchBtn"><CiSearch/></div>
  </SearchBarWrapper>
}
export default SearchBar
