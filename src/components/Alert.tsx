const someConfig = {
  a: 42,
  b: 'some text', // <- linter should not complain but prettier should fix this
}

// const someUnusedVar = 42

export const Alert = () => (
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
