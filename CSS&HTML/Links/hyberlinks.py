import requests as rq
from bs4 import BeautifulSoup

#url = input("Enter Link: ")\
url = "https://www.theverge.com/2021/9/22/22687760/nokia-g50-phone-battery-android-upgrades"
url = "https://www.ibm.com/eg-en/cloud/learn/virtualization-a-complete-guide"

##url = "https://www.datacamp.com/community/tutorials/role-underscore-python"
if ("https" or "http") in url:
    data = rq.get(url)
else:
    data = rq.get("https://" + url)
    print(data)


headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600',
    }
import requests
req = requests.get(url, headers=headers)
soup = BeautifulSoup(req.text, "html.parser")
links = []
for link in soup.find_all("a" ,  href = True):
    links.append(link.get("href"))

print(links)
# Writing the output to a file (myLinks.txt) instead of to stdout
# You can change 'a' to 'w' to overwrite the file each time
with open("myLinks.txt", 'w') as saved:
    for link in links:
        if "#" not in link:
            print(link , file =saved)
            print(link)
     