import { useState } from 'react'

function Hook() {
  const [count, setCount] = useState(1)

  return (
    <>
      <p>{count}回クリックした</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        <p>ボタン</p>
      </button>
    </>
  )
}

export default Hook
