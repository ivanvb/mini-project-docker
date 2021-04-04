import socketio
import os

# standard Python
x = 0


# url = "http://localhost:3001"
url = os.environ["SOCKET_URL"]


print(f"URL IS: {url}")

sio = socketio.Client()
sio.connect(url)

@sio.event
def connect():
    print("I'm connected!")

@sio.on("prueba")
def on_message(data):
    print(data)

    return "OK prueba"

@sio.event
def connect_error():
    print("The connection failed!")

@sio.event
def disconnect():
    print("I'm disconnected!")


@sio.event
def prueba(data):
    global x
    print('I received a message!')

    x = x+1
    return f"OK prueba {x}"