// import {data} from './ChildrenA'

// function ChildrenC() {
//   return (
//     <>
//     <data.Consumer>
//       {
//       (name) => {
//         return(
//           <p>this concept is learn by {name}</p>
//         )
//       }
//       }
//     </data.Consumer>
//     </>
//   )
// }
// export default ChildrenC


//problem of nesting

import {data,mydata} from './ChildrenA'
function ChildrenC() {
  return (
    <>
    <data.Consumer>
      {
      (name) => {
        return(
          <mydata.Consumer>
          {
            (learning)=>{
                return(
                <p>{learning} concept is learn by {name}</p>
              )
            }
          }
        </mydata.Consumer>
        )
      }
      }
    </data.Consumer>
    </>
  )
}
export default ChildrenC