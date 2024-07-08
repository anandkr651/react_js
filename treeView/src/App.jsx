import MenuList from './component/MenuList'
function App({menu=[]}) {

  return (
    <>
    <MenuList list={menu}/>
    </>
  )
}

export default App
