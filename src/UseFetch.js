import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
       
        fetch(url)
        .then((res) => {
            return res.json(); 
        })
        .then((data) => {
            setData(data);
            setLoading(false);    
         })
         .catch((err) => {
             setErr(err.message);
         })}        ,[]);
    
    return {data, loading, err};
}

export default useFetch;