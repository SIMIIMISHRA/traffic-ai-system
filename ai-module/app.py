from flask import Flask, request, jsonify
from traffic_logic import analyze_traffic
import os

app = Flask(__name__)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files["file"]
    
    path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(path)

    result = analyze_traffic(path)

    return jsonify(result)

if __name__ == "__main__":
    app.run(port=8000, debug=True)