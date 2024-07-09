const Circle =({x,y,bgColor})=>{
    return(
        <div className="circle"
        style={{background:bgColor,
            top:`${y-65}px`,
            left:`${x-150}px`
        }}
        />
    )
}
export default Circle