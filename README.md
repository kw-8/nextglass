# NextGlass
## NextGlass
NextGlass is a web application that uses your preferences in wine to suggest new wines to taste.

## Background and Overview
Rather than trying out new drinks and asking all of your friends for recommendations, why not quickly receive recommendations based on your current preferences? Hence, let's try to find your *NextGlass*.

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
- AWS - would require finding a good quality image of each wine (there are a lot)

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
Katherine Wu, Malachi Coberley
