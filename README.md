# Backend Challenges boilerplate - package.json
Managing Packages with NPM

## Notes
### How to Use package.json, the Core of Any Node.js Project or npm Package
The `package.json` file is the center of any Node.js project or npm package. It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. This is the file that you will be improving in the next couple of challenges.

One of the most common pieces of information in this file is the `author` field. It specifies who created the project, and can consist of a string or an object with contact or other details. An object is recommended for bigger projects, but a simple string like the following example will do for this project.

```json 
"author": "Jane Doe",
```

Add your name as the author of the project in the `package.json` file.


### Add a Description to Your package.json
The next part of a good package.json file is the `description` field; where a short, but informative description about your project belongs.

If some day you plan to publish a package to npm, this is the string that should sell your idea to the user when they decide whether to install your package or not. However, that’s not the only use case for the description, it’s a great way to summarize what a project does. It’s just as important in any Node.js project to help other developers, future maintainers or even your future self understand the project quickly.

Regardless of what you plan for your project, a description is definitely recommended. Here's an example:

```json
"description": "A project that does something awesome",
```

Add a description to the package.json file of your project.


### Add Keywords to Your package.json
The `keywords` field is where you can describe your project using related keywords. Here's an example:

```json
"keywords": [ "descriptive", "related", "words" ],
```

As you can see, this field is structured as an array of double-quoted strings.

Add an array of suitable strings to the `keywords` field in the `package.json` file of your project.

One of the keywords should be `"freecodecamp"`.


### Add a License to Your package.json
The `license` field is where you inform users of what they are allowed to do with your project.

Some common licenses for open source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do. Here's an example of the license field:

```json
"license": "MIT",
```

Fill the `license` field in the `package.json` file of your project as you find suitable.


### Add a Version to Your package.json
A `version` is one of the required fields of your `package.json` file. This field describes the current version of your project. Here's an example:

```json
"version": "1.2.0",
```

Add a `version` to the `package.json` file of your project.


### Expand Your Project with External Packages from npm
One of the biggest reasons to use a package manager, is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, npm automatically installs everything for you. But how can npm know exactly what your project needs? Meet the `dependencies` section of your `package.json` file.

In this section, packages your project requires are stored using the following format:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}
```

Add version `1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

**Note**: `@freecodecamp/example` is a faux package used as a learning tool.



