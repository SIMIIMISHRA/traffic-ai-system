const Traffic = require("../models/trafficModel")
const { exec } = require("child_process")
const path = require("path")

exports.uploadFile = (req, res) => {

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" })
  }

  // Full path of uploaded file
  const file = req.file.path

  // Absolute path to Python script
  const aiScript = path.join(__dirname, "../ai/run_ai.py")

  // Use quotes to handle spaces in path
  exec(`python "${aiScript}" "${file}"`, async (err, stdout, stderr) => {

    if (err) {
      console.error("AI Script Error:", err)
      return res.status(500).json({ error: "AI script error", details: err.message })
    }

    try {
      // If stdout empty, return dummy data
      const result = stdout ? JSON.parse(stdout) : { vehicles: 0, density: "low", filename: path.basename(file) }

      const traffic = new Traffic(result)
      await traffic.save()

      res.json(result)

    } catch (error) {
      console.error("JSON Parse Error:", error, "stdout:", stdout)
      res.status(500).json({ error: "JSON parse error", stdout })
    }

  })

}

exports.getData = async (req, res) => {
  try {
    const data = await Traffic.find()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}