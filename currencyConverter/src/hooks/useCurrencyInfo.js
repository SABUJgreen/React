//making a custom hook

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    //useEffect is used to fetch the data from the API when the component mounts
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json()) //first convert the response to json
        .then((res) => setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;





