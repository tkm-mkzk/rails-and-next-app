'use client'

export default function Samples() {
  const fetchSamples = async () => {
    try {
      const res = await fetch('http://localhost:3000/samples')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    void fetchSamples()
  }

  return (
    <>
      <form>
        <button onClick={handleButtonClick}>sample</button>
      </form>
    </>
  )
}
