import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {

  return (
    <>
      <h1 className='text-center font-extrabold my-3 '>Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
