function App ({user,onclick}){
    return(
        <>
        <button onClick={onclick}>
         clicked {user} times
        </button><br />
        </>
    );
}
export default App;