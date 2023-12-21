# MongoDB and Mongoose Challenges
This is the boilerplate for the MongoDB and Mongoose lessons. Instructions for completing these lessons start at https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/


## Notes
### Install and Set Up Mongoose
In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.

Follow this [tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/) to set up a hosted database on MongoDB Atlas.

`mongoose@^5.11.15` has been added to your project’s `package.json` file. First, require `mongoose` as mongoose in `myApp.js`. Next, create a `.env` file and add a `MONGO_URI` variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the `=` in environment variables. For example, `MONGO_URI='VALUE'`.

**Note**: If you are using Replit, you cannot create a `.env` file. Instead, use the built-in *SECRETS* tab to add the variable. Do not surround the values with quotes when using the *SECRETS* tab.

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:

```javascript
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

**Edit**: The cloned repo had `"mongoose": "^5.13.21"` in `package.json`. Replaced with `"mongoose": "^5.11.15"`.