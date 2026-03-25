import cv2

def detect(video_path):

    cap=cv2.VideoCapture(video_path)

    count=0

    while True:

        ret,frame=cap.read()

        if not ret:
            break

        count+=1

    cap.release()

    return count