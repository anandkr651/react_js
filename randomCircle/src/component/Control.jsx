function Control({undo,redo,reset,hasHistory,hasCircle}) {
  return (
    <div onClick={(e)=>{e.stopPropagation()}}>
      <button onClick={undo} className={hasCircle?'':'disabled'} disabled={!hasCircle}>Undo</button>
      <button onClick={redo} className={hasHistory?'':'disabled'} disabled={!hasHistory}>Redo</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Control

