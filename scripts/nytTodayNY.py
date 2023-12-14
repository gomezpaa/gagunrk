#!/home/gomezpa/Capstone/bin/python

import re
from bs4 import BeautifulSoup
import random
import requests
import os
from dotenv import dotenv_values, load_dotenv
import mysql.connector
from dotenv import dotenv_values, load_dotenv

user_agents = [
   "Googlebot/2.1 (+http://www.google.com/bot.html)",
   "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
   "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/*.*.*.* Safari/537.36",
   "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/*.*.*.* Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
]

headers = {'User-Agent': random.choice(user_agents)}
url='https://www.wsj.com/articles/israel-hamas-war-gaza-congress-military-iran-hezbollah-russia-china-a1d6b914'

def main():
    r = requests.get(headers=headers, url=url, timeout=10) 
    print(r.content)


if __name__ == "__main__":
    main()
