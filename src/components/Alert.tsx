const someConfig = {
  a: 42,
  b: 'some text', // <- check for trailing comma
}

// const someUnusedVar = 42

export const Alert = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <button
        onClick={() => {
          console.log(someConfig)
        }}
      >
        Log <code>someConfig</code> to console
      </button>
      <p>
        Open your browser <code>devTools</code> to see the results
      </p>{' '}
    </div>
  )
}
