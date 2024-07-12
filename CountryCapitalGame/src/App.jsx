import { useEffect } from 'react'
import { useState } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

function App({data}) {
  const [options, setOptions] = useState([])
  const [selectOption,setSelectOption]=useState([])
  const [correctSelection,setCorrectSelection]=useState([])
  const [match,setMatch]=useState(new Set)

  useEffect(function onMount(){
    const alloptions=Object.entries(data).flat();
    // console.log(alloptions);

    setOptions(_.shuffle(alloptions))
  },[])

function handleClick(e){
  const {target}=e
  const value=target.getAttribute('data-value')
  // console.log(value);

  // console.log(selectOption.length);
  if(selectOption.length ===2 || selectOption.includes(value)){
    return
  }
  const newSelection=selectOption.concat(value)
// console.log(newSelection.length);
  if(newSelection.length===2){
    const [first,second]=newSelection
    if(data[first]===second || data[second]===first){
      setCorrectSelection(newSelection)
      setTimeout(()=>{
        setMatch(new Set([...match,...newSelection]))
       
        setCorrectSelection([])
        setSelectOption([])
      },1000)
    }else{
      setSelectOption(newSelection)
      setTimeout(function reset(){
        setSelectOption([])
      },1000)
    }
  }else{
    setSelectOption(newSelection)
  }
}
if(match.size === options.length){
  return(
    <div className='last-msg font-medium'>
      <h1>Congratulations</h1>
    </div>
  )
}
  return (
    <div>
      {
        options.map(item =>{
          if(match.has(item)){
            return null
          }
          
          const isSelected=selectOption.includes(item)||correctSelection.includes(item)
          const iscorrect =correctSelection.includes(item)
          const isIncorrect=selectOption.length===2 && isSelected && !iscorrect
          return <button
          className={classnames('item',
            isSelected && 'selected',
            isIncorrect && 'incorrect',
            iscorrect &&'correct'
          )}  
          key={item}
          onClick={handleClick}
          data-value={item}
          >{item}</button>
          
        })
      }
    </div>
  )
}

export default App
