import {useEffect}  from "react";
function Title({count}) {
    console.log("render");
    useEffect(()=>{
        document.title = `Clicked ${count} times`;

    }, [count]);
    return <h1>{count}</h1>;

}
export default Title;