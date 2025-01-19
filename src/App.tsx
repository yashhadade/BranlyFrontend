import { useState } from 'react'
import { Button } from './Components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  const [count, setCount] = useState(0)
const handleCount =()=>{
setCount(count+1)
}
  return (
    <>
      <div className=' flex'>
     <Button startIcon={<PlusIcon size='md'/>} variant='primary' size='md' text={`count = ${count}`} onClick={handleCount}/>
      <Button variant='secondary' size='lg' text={"share"}/>
      </div>
    </>
  )
}

export default App
