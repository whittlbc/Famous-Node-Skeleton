Famous-Node-Skeleton
====================

This is a template to get you up and running very quickly building a Famo.us web app running on a Node server.

First, make sure you have Node and NPM installed. 

To check, open your terminal and run the following,

node -v
npm -v

If either of those throw an error, go re-download Node from http://nodejs.org

Second, make sure you have Express installed globally. Go ahead and run the following just in case:

sudo npm install -g express

sudo npm install -g express-generator

After that, go ahead and clone this repo into the directory of your choice with the following:

git clone https://github.com/whittlbc/Famous-Node-Skeleton.git

Go into the app and open package.json
Change the node and npm versions to whatever you are currently running on your own machine.

Now go into the root directory of the app in the terminal and run "sudo npm install"
 
Wait for all of your dependencies to install. 
 
After that, congrats! You have the app ready to run. Very simple. 

To then start your Node server, simply run:

node app.js

If all goes well, your terminal should log back, "Listening on 8080"

This simply means that your node server is running on port 8080 (this can be changed to whatever you want by simply changing this port value in app.js

Anyways, to now view the app running in your broswer, just go to http://localhost:8080

If it worked, you should see a red surface, sized to whatever screen size you have, that says "My surface."

Now you're all up and running with Node+Famo.us. If you know Famo.us, you should now be able to start adding your own custom Views to "Famous-Node-Skeleton/client/src/views" and then use them to build out your app.

*** I also went ahead and added all the functionality you will need to use this app in conjunction with a MongoDB database in the cloud on MongoLab (http://mongolab.com"). To connect to this DB, you will need to create your own DB instance on MongoLab and then uncomment the lines I specified in app.js. You will also need to change the value of process.env.MONGOLAB_URI to whatever MongoLab gives you when you create your DB instance. I also incorporated an example of how you would make an AJAX call from a Famo.us view to your Node server, grab some info from your DB, and then send that info back to your Famo.us view...this is in AppView inside of your views folder. 

If you have any questions, just email me at benwhittle31@gmail.com

Enjoy!

