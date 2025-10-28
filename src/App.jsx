import Countries from './component/Countries/Countries'
import './App.css'
import React, { Suspense } from "react";


function App() {
  
  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res=>res.json())

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback = {<p>Nadir vai loading ...</p>}>
        <Countries countriesPromise={countriesPromise}> </Countries>
      </Suspense>
      
    </>
  )
}

export default App
