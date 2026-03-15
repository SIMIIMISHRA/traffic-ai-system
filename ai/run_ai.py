import sys
import os
import json

# AI module path add
sys.path.append(os.path.abspath("../../ai-module"))

from vehicle_detection import detect_vehicles
from traffic_logic import traffic_density

# image path from NodeJS
image_path = sys.argv[1]

vehicles = detect_vehicles(image_path)

density = traffic_density(vehicles)

result = {
    "vehicles": vehicles,
    "density": density
}

print(json.dumps(result))