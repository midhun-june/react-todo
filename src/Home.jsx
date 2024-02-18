import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';

export default function Home(){
    const [count, setCount] = useState(0)
    function setClick(){ 
      setCount((count) => count + 1)
    }
    return (
        <>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>This is Home Page</h1>
          <div className='row'>
            <div className='col-12'>
            <Button variant="dark" onClick={setClick}> count is {count}</Button>
            </div>
          </div>
      </>
    )
}
