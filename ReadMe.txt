Inspeyered (Angular Application)

INSTRUCTIONS- 

1. Please open command prompt and NPM Install all the Node Modules within the Inspeyered folder.

2. Use the ng serve in the project folder to start up the application
-It will be initiated on the localhost port 4200.

3. Go to your web browser and type in Http://localhost:4200 and the application is ready to use.

INTRODUCTION-

The application is created for artist and content creators that are dealing with
artist's block. Artist's block is something that happens to a creative when
they have exhausted their source of ideas, and have a difficult time creating.
This application is meant to ease the ideation process by providing the Artist with
a search engine built to search and store images that resonate with your next idea.

You will see a search bar portrayed with a search button. You can click that search 
button or hit enter once you type in your search query. The search will return 12 image
results that you can click on to open in a new tab. 

These images also have an option below to save to a list. This list is on the right side of the 
page and it allows for you to save as many as photos as you like. The page also has options
for you to load more results by giving you the option to go to the next page. These options
only show once you hit the search button or enter in the input area. The saved list is there
unless you decide to clear the list. 

The list is saved into your browsers local storage for later use.The list is comprised of the 
description of the image and a link to the image.An additional feature is that all your saved images 
appear under a "My Inspiration List"section that only appears when you have atleast 1 or more 
saved items in your list. 

You can click remove on a list item if you no longer need it or even start all over by clicking on
clear list that is provided at the end of your list. This allows for users to create a quick 
list that is accessible whenever they open their browser as long as they don't clear their local
storage. 

APPLICATION FEATURES-

The features that are used in this application include:

LocalStorage
JSON API calls
Delete, Update, and Save Methods
Arrays
Bootstrap 4
Angular 7

FILES-

All the important code is included in 3 files. The app.component.ts file
contains important functions and model data that allow the user to retrieve
and update the view based on the API calls or list functions.

Primary functions in the component file: 
addToList(name, url),
removeItem(),
clearLocalStorage(),
nextPage(),
previousPage(),
getPhotos(query)

The addToList() function uses the inspirationList(empty array) to add a variable object
with 2 properties within the array. The array is then used to print the data and update 
the local storage key('inspirationList') with the added objects. The list of objects can
all be deleted with the clearLocalStorage() function or the removeItem() individually.

The nextPage() and previousPage() functions allow you to switch through the different page
within the API call data.

The getPhotos() function is the most important at it issues the get request and subscribes
to the data object. That object is then returned and assigned to the jsonData object and
then it logs the array in the console for confirmation. The array is then used to ngFor(loop)
over the data. The data I chose to display includes the alt_description and url.regular format
to show the image in the view. 


The entire application resides within the original /src/app/app.component.ts, app.component.html, and 
style.css file. I used the asset folder to store the logo png file. I did have a service
folder, but I chose not to utilize a service due to some API call issues I was having. I also 
only got API keys from unSplash.com because they were the only ones closest to Behance's API.
Behance is an Adobe product and it stopped giving out API keys in 2015. I would have added
different options for different design and art categories to search through by adding dropdown
list with querying functions to update the get request to the API. I didn't think it would
be very useful with unSplash because they are not focused on creatives, but more catered
toward small businesses and students that need free image licenses. 

This summarizes the entire application and it's functionality. I am very glad to have this course
and I have learnt quite a bit of JS! I am really proud of my effort and commitment to this
course. I am very greatful for both you John W. and Professor Kalathur. 

Thank you for all the help and encouragement through out the course! :)

 