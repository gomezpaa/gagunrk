#!/home/gomezpa/Capstone/bin/python

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from bs4 import BeautifulSoup

driver_path = '~/gagunrk/selenium_drivers/chromedriver'

service = Service(driver_path)

driver = webdriver.Chrome(service=service)
url = 'https://www.wsj.com/finance/stocks/these-stocks-are-screaming-recession-its-almost-time-to-buy-them-80dac268'
driver.get(url)

driver.implicitly_wait(10)

page_source = driver.page_source

print(page_source)
