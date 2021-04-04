import socketio
import os

x = 0

# url = "http://localhost:3001"
url = os.environ["SOCKET_URL"]

sio = socketio.Client()
sio.connect(url)

@sio.event
def connect():
    print("I'm connected!!!")

@sio.on("prueba")
def on_message(data):
    global x
    print('I received a message!!!!')

    x = x+1
    return f"OK prueba {x}"