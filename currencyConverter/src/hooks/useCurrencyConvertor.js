import {useEffect,useState} from "react"

function UseCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.22/v1/currencies/${currency}.json`)
    .then((res)=>res.json())  //api se jab hamlog data ko fetch karete hai to uska types string hota hai yaha par string ko json mi convert kiya ja raha hai
    .then((res)=>setData(res[currency]))
    console.log(data);
},[currency])
console.log(data);
   return data
}
export default UseCurrencyInfo;