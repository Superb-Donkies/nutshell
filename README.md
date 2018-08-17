# Nutshell(tm)

__created by the Superb Donkies! 8-)__

## What is Nutshell?
It's a dashboard for people to organize their daily tasks, events, news article, friends, and chat messages.

## How to download and run the application.
1. Install __[grunt](https://gruntjs.com/getting-started)__ and __[browserify](http://browserify.org/)__ if you haven't already.
2. Clone the git repository.
```
git clone https://github.com/Superb-Donkies/nutshell.git
```
3. Install node modules to your local drive through the lib directory.
```
npm install
```
4. Run grunt through the lib directory.
```
grunt
```
5. Run the json server through the api directory.
```
json-server -p 8088 -w database.json
```
6. Run the application through the dist file.
```
hs -o
```

## Description of the different modules.

#### Profile
This section displays your username and lets you personalize your dashboard with a picture, birthday, and bio.

#### Events
Create an event with a title, location, and date.
Events are sorted by nearest date in descending order.
Each event can be edited or deleted. 

### Tasks
Create a task with a title, date, and checkbox.
Each task can be edited.
Tasks are removed by checking in the checkbox.

#### Articles
Post an article with a title, summary, and link.
Each article can be edited or deleted.
Articles are posted with the current date and time.
The date and time are updated when the article is edited.

#### Friends
Search for friends on nutshell by username and add them to your friends list.
After you add a friend, you can delete them from your friends list.


#### Chat
A group chat that allows you to talk with all you friends.
