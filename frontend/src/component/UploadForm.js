import React, { useState } from "react"
import { uploadTraffic } from "../api"

function UploadForm() {

    const [file, setFile] = useState(null)

    const submit = async (e) => {

        e.preventDefault()

        const formData = new FormData()
        formData.append("file", file)

        await uploadTraffic(formData)

        alert("Uploaded Successfully")
    }

    return (

        <div>

            <h2>Upload Traffic Image / Video</h2>

            <form onSubmit={submit}>

                <input type="file"
                    onChange={(e) => setFile(e.target.files[0])} />

                <br /><br />

                <button type="submit">Upload</button>

            </form>

        </div>

    )

}

export default UploadForm