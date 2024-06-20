function App ({user,onClick}){
    return(
        <>
        <button onClick={onClick}>
         clicked {user} times
        </button>
        </>
    );
}
export default App;