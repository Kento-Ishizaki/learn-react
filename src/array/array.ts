export default function arraySample() {
  const generateArray = () => {
    const arr = []
    arr.push(123)
    arr.push('ABC')
    arr.push(false)
    return arr
  }

  const hoge = generateArray()
  hoge.push('DEF')
  hoge.push(true)
  console.log(hoge)
}
