import { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus,FaPlus} from 'react-icons/fa'

function MenuItem({item}) {
    const [displayCurrentItem, setDisplayCurrentItem] = useState({})

    function handleClick(getCurrentlabel){
        setDisplayCurrentItem({...displayCurrentItem,
            [getCurrentlabel]:!displayCurrentItem[getCurrentlabel],
        })
    }
  console.log(displayCurrentItem);
    return (
    <ul>
        <div className='flex gap-4'>
          <p>{item.label}</p>
          {item && item.children && item.children.length ?(
              <span onClick={()=>handleClick(item.label)}>
                {displayCurrentItem[item.label]?<FaMinus />:<FaPlus/>}
              </span>

          ):null
        }
        </div>
       {item && item.children && item.children.length >0 && displayCurrentItem[item.label]?
        (<MenuList list={item.children}/>):null
       }
    </ul>
  )
}

export default MenuItem
