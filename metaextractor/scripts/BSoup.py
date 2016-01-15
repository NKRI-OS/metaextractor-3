from bs4 import BeautifulSoup
import requests


# Open the relevant html file
url = "http://www.getbootstrap.com"
r = requests.get(url)   # GET request to the url

soup = BeautifulSoup(r.text,"html.parser")		#Store DOM tree in soup

headTag = soup.head 		# extract the headTag

titleString = soup.title.string  		#Store the title in titleString variable


meta_desc_obj = headTag.select('meta[name="description"]')  		#Select those meta childs of head Tag which have name = descrpiton
meta_keywords_obj = headTag.select('meta[name="keywords]')			#Select those meta childs of head Tag which have name = keywords

print "Title : " + titleString				# Print the title (can be returned)
if (meta_desc_obj):							# If any meta description was found
	print "Description : " + meta_desc_obj[0]['content']		#Print the content attribute of the first tag in the list of tags
if (meta_keywords_obj):
	print "Keywords : " + meta_keywords_obj[0]['content']


