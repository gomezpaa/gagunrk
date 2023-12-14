#!/home/gomezpa/Capstone/bin/python
import argparse
import re
from bs4 import BeautifulSoup
import random
import requests

user_agents = [
   "Googlebot/2.1 (+http://www.google.com/bot.html)",
   "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
   "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/*.*.*.* Safari/537.36",
   "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/*.*.*.* Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
]

headers = {'User-Agent': random.choice(user_agents)}

def scrape_nyt(link):
    i = 1
    try:
        r = requests.get(headers=headers, url=link, timeout=10)
        r.raise_for_status()
        soup = BeautifulSoup(r.content, 'html.parser')
        text = soup.find(id="story")
        items = text.find_all("p", class_="css-at9mc1")
        for item in items:
            print(i, ": ",item.text)
            i += 1
    except requests.exceptions.HTTPError as errh:
        print("HTTP Error: ", errh)
    except requests.exceptions.ConnectionError as errc:
        print("Error Connecting: ", errc)
    except requests.exceptions.Timeout as errt:
        print("Timeout Error: ", errt)
    except requests.exceptions.RequestException as err:
        print("Request Exception: ", err)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Scrape NYT articles.")
    parser.add_argument('-l', '--link', help='NYT article to scrape')
    args = parser.parse_args()

    if args.link:
        scrape_nyt(args.link)
    else:
        link = input('Enter the NYT article you want to read: ')
        scrape_nyt(link)


