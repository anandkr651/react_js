import MenuItem from './MenuItem' 

function MenuList({list=[]}) {
  return (
    <ul>
      {list && list.length ?
      list.map((listitem)=>
      <li key={listitem.id}><MenuItem item={listitem}/></li>
      ):null}
    </ul>
  )
}

export default MenuList