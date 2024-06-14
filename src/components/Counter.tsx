import { useState } from 'react'

export interface CounterProps {
  onCount?: (value: number) => void
}

// This should trigger SonarJs plugin

const doOneMoreThing = () => undefined
if (count == 0) {
  doOneMoreThing()
} else {
  doOneMoreThing()
}

export const Counter = ({ onCount }: CounterProps) => {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <button
        onClick={() => {
          setCount((count) => count + 1)
          onCount && onCount(count + 1)
        }}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>{' '}
    </div>
  )
}
