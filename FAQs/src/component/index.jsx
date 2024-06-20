//we can create the component folder because when we render the array then the key attribute is compolsary

const products = [
    {
        title:'Cabbage',
        isFruit:false,
        id:1
    },
    {
        title:'Garlic',
        isFruit:false,
        id:1
    },
    {
        title:'Apple',
        isFruit:true,
        id:3
    },
]

// export default function shoppingList(){
//     const listitem=products.map(product =>
//         <li 
//         key={product.id}
//         style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}>
//             {product.title}
//         </li>
// );
//     return (
//         <ul>{listitem}</ul>
//     );
// }

//OR in the upper code 'export default' is decelared in the above. in the lower code we can used the {} and return 

// function shoppingList(){
//     const listitem=products.map((product) =>{
//         return <li 
//         key={product.id}
//         style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}
//         className="text-center my-10 font-medium">
//             {product.title}
//         </li>
// });
//     return (
//         <ul>{listitem}</ul>
//     );
// }
// export default shoppingList

//OR without {} and return keyword

function shoppingList(){
    const listitem=products.map(product =>
        <li 
        key={product.id}
        style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}
        className="text-center my-10 font-medium">
            {product.title}
        </li>
);
    return (
        <ul>{listitem}</ul>
    );
}
export default shoppingList