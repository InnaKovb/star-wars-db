import { useEffect, useState } from "react";

const fetchData = () => {
    console.log("Hi")
}

function FunctionComponent (props) {
    const [count, setCount] = useState(null);
    useEffect(() => {
        fetchData()
    },[])
    // всместо componentDidMount

    useEffect(() => {
        fetchData()
    }, [props])
    // оно будет смотреть за пропс, если он поменялся то сработает этот юс еффект который равносилен componentDidUpdate 

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <>
        <div>Hello pidor tupoi</div>
        <button onClick={handleClick}>{count}</button>
        </>
        
    )
        
    
}

export default FunctionComponent;