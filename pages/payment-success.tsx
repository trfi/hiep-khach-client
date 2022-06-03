import { useEffect } from 'react'

export default function Example() {

  useEffect(() => {
    setTimeout(() => window.close(), 2000)
  }, [])

  return (
    <div className="text-white p-2">
      <h1>Pay success</h1>
    </div>
  )
}
