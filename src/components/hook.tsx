import { useEffect, useState } from 'react'

function Hook() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const countDown = () => {
    setTimeout(() => setCount((prev) => prev - 1), 0)
  }

  useEffect(() => {
    console.log('currentCount', count)
    return () => {
      console.log(true)
    }
    // console.log('currentCount2', count2)
  }, [count])

  // useEffect(() => {
  //   console.log('currentCount', count2)
  // }, [count2])

  return (
    <>
      <p>{count}回クリックした</p>
      <button type="button" onClick={countDown}>
        <p>ボタン</p>
      </button>
    </>
  )
}

export default Hook
