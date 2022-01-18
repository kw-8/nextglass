# NextGlass
## [NextGlass](http://nextglass.herokuapp.com/#/welcome)
NextGlass is a web application that uses your preferences in wine to suggest new wines to taste.

![splash]()
![home]()
![tag]()
![collection]()

## Background and Overview
Make finding drinks easier. Rather than asking around, get recommendations from what you like. Let's try to find your ***NextGlass***!

## Functionality and MVP
- User auth: sign up, login, logout
- Collection: create, edit, delete
- Collection page
- Landing page with categories
- Production README
- Team Links

### Bonus Features
- Search
- Future: suggestions with tensorflow

## Technologies and Technical Challenges
### Backend: MongoDB and Express
- Relevant data is stored in columns
  - Some of the columns contains an array, containing some of 50+ tags
- Tables: users, collections, wines

Technical Challenges:
- Fetching data efficiently. We leveraged mongodb search index to enable fuzzy searching.
- Cleaning data. We used excel to:
  -  Remove all incomplete entries
  -  Create a list of common tags from the content of the descriptions
  -  Remove entries without the most common tags
  -  Trim down the 130k dataset to 10k
- Manipulating data
  -  Original data on [kaggle](https://www.kaggle.com/zynicide/wine-reviews)
  -  split.js contains the final code we used to change the tags and tagindex data from strings to arrays
  -  **X** contains the final code we used to update the description data to use UTF-8 characters

### Frontend: React, Redux, Axios
- Landing page contains images linked to curated collections

Technical Challenges:
- Double fetching- fetching a collection, and then dependent wines. Final solution using thenable promises, as componentDidUpdate will be deprecated.
- Creating a recommendation model for suggesting drinks based on tags from the current collection
- Reading data from the MongoDB database to feed into the recommendation model

## Group Members and Work Breakdown
Katherine Wu, Malachi Coberley, David Chan

### Day 1
- Discuss database structure, querying - ***All***
- Discuss UI/UX, sketch out wireframe - ***All***
- Create routes, configuration, databases, possibly begin user auth - ***David***
- Build sign up/login view - ***Malachi***
- Begin creating recommendation model - ***Katherine***

### Day 2
- Finish up user auth, start collections - ***David***
- Simple recommendation model - ***Katherine***
- Landing page skeleton, start individual collection page skeleton - ***Malachi***
- Discuss how to implement curated collections - ***All***

### Day 3
- Wine index component - ***Malachi***
- Change wine tags data type - ***Katherine, David***

### Day 4
- Wine component - ***David***
- User's collections component - ***Malachi***
- Tags query and component - ***Katherine***

### Day 5
- Suggestions component - ***Malachi***
- Collection's wines component - ***David***
- Mongoose query and index for fuzzy search - ***Katherine***

### Day 6
- Complete production README - ***Katherine***
- Search component, about and credits components - ***Malachi***
- Delete wines; refactor collections - ***David***
