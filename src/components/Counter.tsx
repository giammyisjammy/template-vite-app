import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

export interface CounterProps {
  onCount?: (value: number) => void
}

export const Counter = ({ onCount }: CounterProps) => {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <div className='card'>
      <button
        onClick={() => {
          setCount((count) => count + 1)
          onCount && onCount(count + 1)
        }}
      >
        {t('count', { count })}
      </button>
      <p>
        <Trans i18nKey='editCode'>
          BESTEMMIO SE NON È TRADOTTO <code>src/App.tsx</code> and save to test
          HMR.
        </Trans>
      </p>
    </div>
  )
}
