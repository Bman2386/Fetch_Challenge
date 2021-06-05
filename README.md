# Fetch Coding Challenge ###
## Download and use instructions

- Please note, if you would prefer, I can host this app on heroku and give you a link to the live version. 
- I can be reached at brendon.biagi@gmail.com
- This app was designed to make it as simple as possible for anyone to see that it satisfies the requirements

Step 0

 - Bare minimum you will need to have Ruby, Rails, PostgreSQL, & Ruby Gems installed to run the backend
 - To run the frontend, you will need to have JavaScript ES6, React, Node, & Webpack 

 Step 1

- Clone the repo, and cd into the folder

 Step 2

Install The gems that the app uses
```
$ bundle install
```
Create the database
```
$ bundle exec rails db:create
```
Seed the database
```
$ bundle exec rails db:seed
```
Install the frontend (you can skip this step if your using an external app like postman) 
```
$ npm install
```
Step 3
Start up backend
```
$ bundle exec rails s
```
('s' stands for server)

Step 4
Start up the frontend (you can skip this step if your using an external app like postman) 
```
$ npm start
```
Step 5
In your web browser, go to [http://localhost:3000/](http://localhost:3000/)

- There you can demo as a guest, or create your own login. 
- Once logged in you can add points from different payers, and pay points to payers as long as you have enough points to spend
- When spending points, you will always spend the oldest 1st, if that brings the amount to zero, then that point total is deleted

## Frequently asked questions

- The challenge was to build a simple backend, why make a frontend as well?

The language of the pdf included a statement to assume the engineer has never executed an application in your language before. Having a frontend that accessed the backend and shows it to the user, would be the simplist way in my opinion

- Why use Ruby/Rails?

Rails commands are a quick way to build a backend with the command
```
$ bundle exec rails new <name>
```
I can jump into creating a database, models, controllers, routes etc.  rather than writing architecture from scratch

- Why use PostgreSQL, when local memory was fine?

Having a system that can save data makes it easier to check and compare results even if you turn off the program and access it later. 

- Why add a user and login?

It was mentioned that your servers have users with data, doing this demonstrates that I have knowledge about how a system like this works and will be able to work with it if necessary.

- Aren't I just creating extra work for myself?

Yes. I am creating extra work for myself, but I wanted to go the extra mile here to show that I can be an asset to Fectch Rewards and put my best foot forward. The downside is that it took more elbow grease, and couldn't be completed in a few hours, but there were no time constrains given for this project and I would really like to be a part of the team
