import React, { useState, useEffect } from "react"
import { getTrafficData } from "../api"
import TrafficCard from "./TrafficCard"

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {

        getTrafficData().then(res => {
            setData(res.data)
        })

    }, [])

    return (

        <div>

            <h2>Traffic Dashboard</h2>

            {data.map((traffic, i) => (
                <TrafficCard key={i} traffic={traffic} />
            ))}

        </div>

    )

}

export default Dashboard