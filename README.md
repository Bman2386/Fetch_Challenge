# Fetch Coding Challenge ###
## Download and use instructions

- Please note, if you would prefer, I can host this app on heroku and give you a link to the live version. The main reason that I didn't do so already, is that it's not production ready.
- I can be reached at brendon.biagi@gmail.com
- This app was designed to make it as simple as possible for anyone to see that it satisfies the requirements

Step 0

 - Bare minimum you will need to have Ruby 2.5.1, Rails 5.2.4, PostgreSQL 9.1, & RubyGems 2.7.6 installed to run the backend
 - To run the frontend, you will need to have JavaScript ES6, Node, & Webpack 3.5.6

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
- When spending points, you will always spend the oldest 1st, and the total will never reach negative
- If you're comfortable with rails, it goes without saying that you can also run tests in the rails console

## Frequently asked questions

- The challenge was to build a simple backend, why make a frontend as well?

The language of the pdf included a statement to assume the engineer has never executed an application in your language before. Having a frontend that accessed the backend and shows it to the user, would be the simplist way in my opinion. Also, this demonstrates that I do have the ability to work with JavaScript, React, etc. (Which was listed as a bonus in the job posting)

- Why use Ruby/Rails?

Rails commands are a quick way to build a backend with the command
```
$ bundle exec rails new <name>
```
I can jump into creating a database, models, controllers, routes etc.  rather than writing architecture from scratch

- Why use PostgreSQL, when local memory was fine?

Having a system that can save data makes it easier to check and compare results even if you turn off the program and access it later. 

- Why add a user and login?

It was mentioned that your servers have users with data, doing this demonstrates that I have knowledge about how a system like this works and will be able to work with it. Also, my system design included users, so it makes sense to me that that there would be a login

- Aren't I just creating extra work for myself?

Yes. I am creating extra work for myself, but I wanted to go the extra mile here to show that I can be an asset to Fetch Rewards and put my best foot forward. The downside is that it took more elbow grease, and couldn't be completed in a few hours, but there were no time constrains given for this project and I would really like to be a part of the team

- I don't like this design!

While thats not a question, I understand. The intent was to build something that works, and would be easy to use for someone that's never worked with ruby or rails, not a production ready app.

-The return values aren't what I was expecting

Being that this is not a production ready app, the frontend may be out of sync with the backend, in which case you should try hitting the refresh button

-I'm using postman and its not creating points

The points have an association to a User and a Shop (payer), so you'll need to include a user_id (that exists), and a payer_id (that also exists)

If you have any other questions I can be reached at brendon.biagi@gmail.com. Rest assured, I check emails frequently!