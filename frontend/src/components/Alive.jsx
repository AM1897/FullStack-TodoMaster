import {useState} from "react"
import MyAPIService from "../utils/api/service/MyAPIService.js";

const Alive = () => {
    const [data, setData] = useState('')

    const checkApiStatus = () => {
        MyAPIService.Alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    const displayData = () => {
        if (data.length !== 0) {
            return <h3>{data}</h3>
        }
    }

    return (
        <>
                <button onClick={() => checkApiStatus()}>
                    API
                </button>
                <h3>{displayData()}</h3>
        </>
    )
}

export default Alive