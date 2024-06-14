// linter should tidy up imports
import { useState } from 'react'

import { Alert } from '@/components/Alert'
import { Counter } from '@/components/Counter'

import './App.css'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

function App() {
  const [appCounter, setAppCounter] = useState(0)
  return (
    <>
      <div>
        {/* Missing rel='noreferrer' attribute should raise a linter error */}
        <a href='https://vitejs.dev' target='_blank' rel="noreferrer">
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel="noreferrer">
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter onCount={(value) => setAppCounter(value * 2)} />
      <p>App counter is {appCounter}</p>
      <Alert />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
