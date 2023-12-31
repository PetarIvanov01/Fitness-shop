import { useEffect, useState } from "react";

export default function useFetch(cb, args = null) {

    const [data, setData] = useState({});

    useEffect(() => {
        cb(args).then(setData)
            .catch(err => console.log(err))

    }, [args]);

    return { data }
}