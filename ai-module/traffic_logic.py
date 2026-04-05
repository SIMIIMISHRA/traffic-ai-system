import cv2
from ultralytics import YOLO

# load model
model = YOLO("yolov8n.pt")  # auto download

def analyze_traffic(image_path):
    results = model(image_path)

    vehicle_count = 0

    for r in results:
        for box in r.boxes:
            cls = int(box.cls[0])
            
            # vehicle classes (car, bus, truck, bike)
            if cls in [2, 3, 5, 7]:
                vehicle_count += 1

    # density logic
    if vehicle_count > 20:
        density = "HIGH"
        signal_time = 90
    elif vehicle_count > 10:
        density = "MEDIUM"
        signal_time = 60
    else:
        density = "LOW"
        signal_time = 30

    return {
        "vehicleCount": vehicle_count,
        "density": density,
        "signalTime": signal_time
    }