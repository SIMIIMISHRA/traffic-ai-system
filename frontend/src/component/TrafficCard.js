import React from "react"

function TrafficCard({ traffic }) {

    return (

        <div style={{
            border: "1px solid black",
            padding: "15px",
            margin: "10px",
            width: "250px",
            display: "inline-block"
        }}>

            <h3>Traffic Report</h3>

            <p>Vehicles: {traffic.vehicleCount}</p>
            <p>Density: {traffic.density}</p>
            <p>Signal Time: {traffic.signalTime} sec</p>

        </div>

    )

}

export default TrafficCard