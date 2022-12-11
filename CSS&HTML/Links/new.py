import requests
from bs4 import BeautifulSoup
import re
import time

url = "https://www.theverge.com/2021/9/22/22687760/nokia-g50-phone-battery-android-upgrades"

source_code = requests.get(url)
soup = BeautifulSoup(source_code.text, 'lxml')
data = []
links = []


def remove_duplicates(l): # remove duplicates and unURL string
    for item in l:
        match = re.search("(?P<url>https?://[^\s]+)", item)
        if match is not None:
            links.append((match.group("url")))


for link in soup.find_all('a', href=True):
    data.append(str(link.get('href')))

flag = True
##remove_duplicates(data)

print(data)
for url in links:
    print(url)