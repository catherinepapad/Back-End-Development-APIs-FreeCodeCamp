# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/

## Notes
### Meet the Node console
During the development process, it is important to be able to check what’s going on in your code.

Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see console output in a terminal. On Replit, a terminal is open in the right pane by default.

We recommend to keep the terminal open while working at these challenges. By reading the output in the terminal, you can see any errors that may occur.

Modify the `myApp.js` file to log "Hello World" to the console.


### Start a Working Express Server
In the first two lines of the file `myApp.js`, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is `app.listen(port)`. It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the `server.js` file for you.

Let’s serve our first string! In Express, routes takes the following structure: `app.METHOD(PATH, HANDLER)`. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form `function(req, res) {...}`, where req is the request object, and res is the response object. For example, the handler

```javascript
function(req, res) {
  res.send('Response String');
}
```

will serve the string 'Response String'.

Use the `app.get()` method to serve the string "Hello Express" to GET requests matching the `/` (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Replit.

**Note**: All the code for these lessons should be added in between the few lines of code we have started you off with.


### Serve an HTML File
You can respond to requests with a file using the `res.sendFile(path)` method. You can put it inside the `app.get('/', ...)` route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable `__dirname` to calculate the path like this:

```javascript
absolutePath = __ dirname + '/relativePath/file.ext'
```

Send the `/views/index.html` file as a response to GET requests to the `/` path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

**Note**: You can edit the solution of the previous challenge or create a new one. If you create a new solution, keep in mind that Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.


### Serve Static Assets
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).

In Express, you can put in place this functionality using the middleware `express.static(path)`, where the `path` parameter is the absolute path of the folder containing the assets.

If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method `app.use(path, middlewareFunction)`. The first `path` argument is optional. If you don’t pass it, the middleware will be executed for all requests.

Mount the `express.static()` middleware to the path `/public` with `app.use()`. The absolute path to the assets folder is `__dirname + /public`.

Now your app should be able to serve a CSS stylesheet. Note that the `/public/style.css` file is referenced in the `/views/index.html` in the project boilerplate. Your front-page should look a little better now!


### Serve JSON on a Specific Route
While an HTML server serves HTML, an API serves data. A REST (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server. The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb). The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.

Let's create a simple API by creating a route that responds with JSON at the path `/json`. You can do it as usual, with the `app.get()` method. Inside the route handler, use the method `res.json()`, passing in an object as an argument. This method closes the request-response loop, returning the data. Behind the scenes, it converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure `{key: data}`. `data` can be a number, a string, a nested object or an array. `data` can also be a variable or the result of a function call, in which case it will be evaluated before being converted into a string.

Serve the object `{"message": "Hello json"}` as a response, in JSON format, to GET requests to the `/json` route. Then point your browser to `your-app-url/json`, you should see the message on the screen.



### Use the .env File
The `.env` file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as `process.env.VAR_NAME`. The `process.env` object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The `.env` is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. `VAR_NAME=value`. Usually, you will put each variable definition on a separate line.

Let's add an environment variable as a configuration option.

Create a `.env` file in the root of your project directory, and store the variable `MESSAGE_STYLE=uppercase` in it.

Then, in the `/json` GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE` and transform the response object's `message` to uppercase if the variable equals uppercase. The response object should either be `{"message": "Hello json"}` or `{"message": "HELLO JSON"}`, depending on the `MESSAGE_STYLE` value. Note that you must read the value of `process.env.MESSAGE_STYLE` **inside** the route handler, not outside of it, due to the way our tests run.

**Note**: If you are using Replit, you cannot create a `.env` file. Instead, use the built-in SECRETS tab to add the variable.

If you are working locally, you will need the `dotenv` package. It loads environment variables from your `.env` file into `process.env`. The `dotenv` package has already been installed, and is in your project's `package.json` file. At the top of your `myApp.js` file, add `require('dotenv').config()` to load the environment variables.
