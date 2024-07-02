import ChildA from './component/ChildA'
import ChildrenA from './contextApi/ChildrenA'
import DataA from './useContext/DataA'

function App() {

  return (
    <>
      <h1>Concept of props Dralling</h1>
      <ChildA />
      <h1>Concept of Context Api</h1>
      <ChildrenA />
      <h1>Concept of useContext Hook</h1>
      <DataA />
    </>
  )
}

export default App
