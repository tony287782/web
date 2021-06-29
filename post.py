import requests
import time
url='http://localhost:3000/getdata/'
name='Node99'
res = requests.post(url+name,{
    'temperature': 27,
    'humidity': 40,
    'moisture': 60,
    'time': int(time.time())*1000})
print(int(time.time())*1000)