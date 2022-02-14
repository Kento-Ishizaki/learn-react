import { VFC, useState } from 'react'

const Hook: VFC = () => {
  const [count, setCount] = useState(1)

  return (
    <>
      <p>1回クリックした</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        <p>ボタン</p>
      </button>
    </>
  )
}

export default Hook
