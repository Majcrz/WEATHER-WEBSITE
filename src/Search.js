import React from 'react'
import './Search.css'
import { useState } from 'react'
export default function Search({value,enterbutton,searchplace}) {

  return (
    <>
   
  <div className='box'>
<button><i class="fa fa-search" aria-hidden="true"></i></button>
<form onSubmit={enterbutton}>
   <input type="search" placeholder='Search' name='name' onChange={searchplace} value={value||""}></input>
    </form>


  </div>
    </>
  )
}
