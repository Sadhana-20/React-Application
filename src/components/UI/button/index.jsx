const Button = ({name, onClick})=>{
    return (
    <button className="greet" onClick={onClick}>{name}</button>    
    )
}

export default Button