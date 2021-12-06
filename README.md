# NextGlass
## NextGlass
NextGlass is a web application that uses your preferences in wine to suggest new wines to taste.

## Background and Overview
Rather than trying out new drinks and asking all of your friends for recommendations, why not quickly receive recommendations based on your current preferences? Hence, let's try to find your ***NextGlass***.

## Functionality and MVP
- User auth: sign up, login, logout
- Collection: create, edit, delete
- Collection page
- Suggestions: with tensorflow
- Landing page with categories
- Wine: create
- Production README

### Bonus Features
- Search
- AWS

## Technologies and Technical Challenges
### Backend: MongoDB and Express
- Relevant data is stored in columns
  - Some of the columns contains an array, containing some amount of some 50+ tags
- Tables: users, collections, wines

Technical Challenges:
- Fetching data efficiently to feed into the recommendation model
- Cleaning and maintaining a sizeable dataset

### Frontend: React, Redux, Axios, Tensorflow Library
- Landing page contains images linked to curated collections

Technical Challenges:
- Smoothly add any particular wine to one or more of a user's collections
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
- Finish preliminary model, figure out how to connect to MongoDB database - ***Katherine***
- Landing page skeleton, start individual collection page skeleton - ***Malachi***
- Discuss how to implement curated collections - ***All***

### Day 3
- Work on implementing curated collections on landing page - ***David, Malachi***
- Connect model to MongoDB database. Pitch in where needed - ***Katherine***
- Meet to discuss what needs to be done and plan the next few days - ***All***

### Day 4
- Wine component, user's collections component

### Day 5

### Day 6
- Complete production README - ***Katherine***
- Final adjustments to design/CSS
- Finish texting and debugging - ***All***
