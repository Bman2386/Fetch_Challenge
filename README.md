# Fetch Coding Challenge ###
## Download and use instructions
<p>Please note, if you would prefer, I can host this app on heroku and give you a link to the live version. 
I can be reached at brendon.biagi@gmail.com</p>
<p>This app was designed to make it as simple as possible for anyone to see that it satisfies the requirements</p>
<ol>Step 0</ol>
<li> Bare minimum you will need to have Ruby, Rails, PostgreSQL, & Ruby Gems installed to run the backend</li>
<li> To run the frontend, you will need to have JavaScript ES6, React, Node, & Webpack </li>
<ol> Step 1</ol>
<li>Clone the repo, and cd into the folder</li>
<ol> Step 2</ol>
<li>Install The gems that the app uses</li>
```
$ bundle install
```
<li>Create the database</li>
```
$ bundle exec rails db:create
```
<li>Seed the database</li>
```
$ bundle exec rails db:seed
```
<li>Install the frontend (you can skip this step if your using an external app like postman) </li>
```
$ npm install
```
<ol>Step 3</ol>
<li>Start up backend</li>
```
$ bundle exec rails s
```
('s' stands for server)

<ol>Step 4</ol>
<li>Start up the frontend (you can skip this step if your using an external app like postman) </li>
```
$ npm start
```
<ol>Step 5</ol>
<li>In your web browser, go to</li> [http://localhost:3000/](http://localhost:3000/)
<p>Needs to tranfer points</p>