// linter should tidy up imports
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Counter } from '@/components'

import './App.css'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

function App() {
  const [appCounter, setAppCounter] = useState(0)

  const { t } = useTranslation()
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{t('title')}</h1>
      <Counter onCount={(value) => setAppCounter(value * 2)} />
      <p>{t('counter', { appCounter })} </p>
      <p className='read-the-docs'>{t('readTheDocs')}</p>
    </>
  )
}

export default App
