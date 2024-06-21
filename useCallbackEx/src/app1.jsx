//you can go to the console and see that hello,app1 is display when we clicked the addition button(*2) times display the hello,app1 in the console 

// import { useState } from 'react'
// function App1() {
//     console.log("hello,app1");
//   return (
//     <div></div>
//   )
// }
// export default App1

//you can go to the console and see that hello,app1 is display when we clicked the addition button then hello,app1 is not increasing.

// import { React ,memo } from 'react'
// function App1() {
//     console.log("hello,app1");
//   return (
//     <div></div>
//   )
// }
// export default memo(App1)

//you can go to the console and see that hello,app1 is display when we clicked the addition button(*2) times display the hello,app1 in the console. in this case we can passes the props.

// import { React ,memo } from 'react'
// function App1({user}) {
//     console.log("hello,app1");
//   return (
//     <div></div>
//   )
// }
// export default memo(App1)

//you can go to the console and see that hello,app1 is display when we clicked the addition button then hello,app1 is not increasing.because we can use the useCallback hook.

// import { React ,memo } from 'react'
// function App1({user}) {
//     console.log("hello,app1");
//   return (
//     <div></div>
//   )
// }
// export default memo(App1)

//you can go to the console and see that hello,app1 is display when we clicked the addition button then hello,app1 is not increasing.because we can use the useCallback hook. and when we clicked the count button (*2)times hello,app1 is display.


import { React ,memo } from 'react'
function App1({user,count}) {
    console.log("hello,app1");
  return (
    <div></div>
  )
}
export default memo(App1)