# Node.js

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.
It is a powerful runtime because there are a number of libraries that handle common
tasks, such as accessing databases, the filesystem and handling web requests. We will
be looking at one particular server framework, express, which handles a lot of the
underlying details of interacting with a client using HTTP (HyperText Transfer
Protocol), which is used by web clients to request resources. We will primarily be
looking at the core libraries and affordances of Node.js this week and next, and
introduce Express next module.

## Learning Objectives

- Describe the history and purpose behind Node.js
- Understand basic command line syntax and usage
- Explore the file system through writing, reading and renaming files using command line and Node.js `fs` module
- Use Node.js to handle input from a simple command line program

# Lesson 5-1 Introducing Node.js

## Node.js History

Node.js has grown in its popularity due to the improvements in the underlying engine and number of open source libraries that make developing with it easy. The use of JavaScript on both front and backend makes sharing things like data structures and functionality easier, as well. 

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/node-js-history?trk=embed_lil">Node.js history</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## How Node.js Works

Node.js is event-driven, non-blocking and single-threaded. This video describes what this means in terms of how Node.js handles requests and interactions with slower processes, such as the file system or other web services.

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/how-node-js-works?trk=embed_lil">How Node.js works</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Why is JavaScript Node's language?

This video reiterates many of the benefits of using JavaScript as a server-side language, and is particularly useful when thinking about alternatives such as PHP for a given project.

<strong><a href="https://www.linkedin.com/learning/learning-node-js-2017/why-is-javascript-node-s-language-2?trk=embed_lil">Why is Javascript Node&#39;s language?</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-node-js-2017?trk=embed_lil">Learning Node.js</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alexander-zanfir?trk=embed_lil">Alexander Zanfir</a></strong>

## The global object

One of the primary differences between Node.js and browsers is the environment, specifically the global object and the available functions, elements, etc. In a browser context, you have access to the current web page through the document object. On the server, there is no web page, but you do have access to everything a native program has access to, which includes the file system and the process itself. These are not present on the browser due to security concerns, so it is worth understanding that running a Node.js program involves giving the program the same permissions that your user account has, which can include reading or deleting any file that you can access yourself. If you run from an administrative account, or one with root permissions, this can potentially allow the program to run arbritary programs or make changes anywhere. 

That also means that Node.js programs are just as powerful and capable as programs written in a compiled language, such as Java or C. The main difference is in performance for certain tasks. In a web server, you might call a program in another language to handle a task such as transcoding a video or doing machine learning using Python, but you can still use Node.js as the primary language if you understand how to call other programs. 

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/the-global-object?trk=embed_lil">The global object</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?
trk=embed_lil">Alex Banks</a></strong>

## The require function

Source code is stored in files, which is data stored and managed by the operating system. The main type of non-volative storage are  solid-state drives and hard disk drives. When a computer powers off, the file remains, whereas in main memory (RAM, or Random Access Memory), the contents are lost when no longer powered.

There are two main ways to interpret file data: as text (usually with line markers) or as binary data. Text files are simply binary files where the contents are encoded in one of the main text encoding methods, such as UTF-8. Files are located on the filesystem in a similar way that a resource can be located using a URI on a website, through a path. The path may differ from unix to windows (the separator (also called delimiter) may be either a forward slash or a backslash), and the drive may or may not precede the path (E.g. "C:\" on windows refers to the drive assigned the letter C, whereas on Unix typically all paths originate from the root "/"). Each file has a name in addition the directory it is located, and the "path" library described in the video helps to extract the different parts of a file path, including the `basename` -- or the filename itself, the `dirname` (the path to the folder name excluding the filename).

CommonJS is the module system that involves the `require` function. `require`, like `import`, uses a "relative" path to locate the file containing the JavaScript values to make available in the current file context. It functions similarly to the import/export we saw before, but predates it. It is, however, unique to node.js. In JavaScript, all source code "files" can be considered "modules", which in turn may reference other modules.

Remember, anytime you import or require a file, all of the contents of that file are executed, but only once. So if you import a file from multiple other files, it won't run the file multiple times. 

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/the-require-function?trk=embed_lil">The require function</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Creating a delay with setTimeout

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/creating-a-delay-with-settimeout?trk=embed_lil">Creating a delay with setTimeout</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Incorporate setInterval

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/incorporate-setinterval?trk=embed_lil">Incorporate setInterval</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Write your own module

<strong><a href="https://www.linkedin.com/learning/learning-node-js-2017/write-your-own-module?trk=embed_lil">Write your own module</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-node-js-2017?trk=embed_lil">Learning Node.js</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alexander-zanfir?trk=embed_lil">Alexander Zanfir</a></strong>

# Exercise 5-1: Timers and Intervals

In this exercise, you author two functions: 

1. `createTimeoutSeconds(seconds, message)`. The function should accept two argument: a time in seconds, and a message, which is the amount of time that will pass **IN SECONDS** (not milliseconds) until the string, the second argument, is printed using console.log.
   For instance: `createTimeoutSeconds(1.5, "Hello World")` would print "Hello World" to the console after one and a half seconds.
2. `createIntervalSeconds(seconds, callback)`. The function should accept an interval, (again, **in seconds**) as the first argument, and a function as the second argument. It should call the function every x seconds. 
   For instance, `createIntervalSeconds(2, () => console.log("Again"))` should print "Again" every 2 seconds until the program is terminated.

# Lesson 2: The Command Line

You have already used the command line in this course, mainly to install html-validate. It is used extensively in other frameworks, such as React, where a command line program both runs a development server and minifies and packages the code.

## What is the command line?

We will be taking a brief detour into the command line. If you are on windows, you can install a minimal unix environment ([MinGW](https://www.mingw-w64.org/)) to understand the use of the commands in the next two videos by installing [git](https://git-scm.com) and then using the `git bash` [command shell through VS Code (from the drop down)](https://code.visualstudio.com/docs/terminal/basics).  You can also launch it as a standalone terminal. If you are using OSX, you can use your default zsh, which shares most of the commands with bash. Bash stands for "Borne Again Shell" and is one of the more popular shells used on linux. Later in the course, we will look at how to set up a full linux environment for Windows and a more controlled virtual machine on both Windows and OSX for developing applications destined for being run on cloud hosting. 

For now, we'll be learning a bit more about the command line.

<p><strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/what-is-the-command-line?trk=embed_lil">What is the command line?</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>

## Understand how commands are structured

You can run a program at the command line by providing the name of the program, followed by arguments which can be either commands, flags, or arguments. If the program is located in one of the directories in the PATH (an array of locations where a terminal looks to find a program to run), then it will execute the program and pass in the arguments as an array.

When we execute node, we are really just telling the operating system to run the program node, which either executes a script passed in as an argument, or starts the interpreter to receive input interactively. 

<p><strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/understand-how-commands-are-structured?trk=embed_lil">Understand how commands are structured</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>

## Write commands in a shell at the prompt

You can open a terminal in VS Code, and if you installed git at the default location
on windows, you can create a shell using "Git Bash", as we saw before. 

<p><strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/write-commands-in-a-shell-at-the-prompt?trk=embed_lil">Write commands in a shell at the prompt</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>


## Standard output

Anytime you execute a program and see text in the terminal, that text is captured
from the process **standard out** stream. The stream represents the output a program
produces (it must be text). If you try to execute a command and the value doesn't
make sense, you might get information from the standard error stream. This would be
what you would see if you wrote "console.error("This is an error"). We can do a
better job with our programs if we capture certain conditions and prevent the program
from exiting with a stack trace by providing an error. 

Almost every command line program we have seen will produce some output that guides
the user into either the correct syntax for a command or otherwise helps them figure
out what went wrong. You can try copying a non-existent file, for instance:

```bash
cp nothere.txt
```

<span color="red">
cp: missing destination file operand after 'nothere'
Try 'cp --help' for more information.
</span>

You can access the standard out either through console.log or through process.stdout, which has a number of methods. The simplest is "write", which outputs the provided buffer or string to the console. 

<p><strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/argument-variables-with-process-argv?trk=embed_lil">Argument variables with process.argv</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong></p>


## Standard input

Standard input is used to collect input from a user, and that can be either in the form of a file or an interactive session. The Node.js REPL at the command line simply takes any input by the user, interprets it as either a command or valid JavaScript, and then outputs the value returned from an expression. 

For instance, a sample session with the node interpreter is below:

```
$ node
Welcome to Node.js v16.17.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> console.log("Testing")
Testing
undefined
> "Testing"
'Testing'
> 1+5
6
```

<p><strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/standard-input?trk=embed_lil">Standard input</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong></p>


## Using readline

[Collecting information with readline](https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fnode-js-essential-training-14888164%3Ftrk%3Dshare_ent_url%26shareId%3D9e7xRs5TT7%252BT5wTvlLg%252FaQ%253D%253D)

Readline is a powerful module used in node.js for collecting data from users. 

<p><strong><a href="https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?trk=embed_lil">Using readline</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-14888164?trk=embed_lil">Node.js Essential Training</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/eve-porcello?trk=embed_lil">Eve Porcello</a></strong></p>

## Use readline functions

This video reviews how to structure callback functions for use with readline, which is required for lab 5.

<p><strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/use-readline-functions?trk=embed_lil">Use readline functions </a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong></p>

# Lesson 3: The Linux file system

The linux file system differs from the Windows file system, but is closer to the OS X file system, as they share a similar lineage. As you'll be deploying to servers in the future, and almost every server runs linux, it is worth understanding the file system.

<strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/the-linux-file-system?trk=embed_lil">The Linux file system</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong>

## Understanding file paths

Paths are critical because they are used not just on file systems, but often as parts of URIs (Uniform Resource Identifiers) used to reference files from a web page. 

<strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/understanding-file-paths?trk=embed_lil">Understanding file paths</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong>

## Navigating the file system

There are important path features that are worth reviewing, including how to reference locations using a "relative" path, or using a known location (e.g. the home directory, often using the tilde character "~"). When you import or require a file, you use a path to that file's location or you use the name of the module.

Both relative and absolute paths are commonly used. ".." refers to a file above the current reference location, whereas "." represents the current directory. "./file.txt" and "file.txt" are the same. 

<strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912/navigating-the-file-system?trk=embed_lil">Navigating the file system</a></strong> from <strong><a href="https://www.linkedin.com/learning/learning-linux-command-line-14447912?trk=embed_lil">Learning Linux Command Line</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong>

## Argument variables with process.argv

Now that we understand how command line programs work, and more importantly how to
use them with options and arguments, we can better appreciate how writing a program
would accept input through the command that runs the program itself. You can run any
node program using an argument to the node binary, e.g. :

```bash
node index.js 
```

Which will run the node runtime and then execute all of the code found in the
entrypoint file (index.js). You can also provide additional arguments and options to
a program:

```bash
node index.js "Hello world"
```

Using the process global argument property, argv, the following code would print out
the string provided as an argument (also found in
[tutorial5/argv.js](tutorial5/argv.js)):

```javascript
const [,,input] = process.argv
console.log(process.argv[2])
```

The `[,,input]` is a destructuring expression, specifically a destructuring assignment (since the assignment operator is to the right). 

The ",," effectively ignores the first two elements (as if they were assigned to a
variable and then that variable never used). The first two arguments always correspond to
the program path of the command executed (the full path to Node.js, which is retrieved by the shell) and the
file (which is the JavaScript source code in this case).

Destructuring is a common strategy for assigning values from BOTH arrays and objects
to variables or parameters. You can find out more about it in Chapter 3 of the ES6
course:

- [Using the array spread operator](https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-ecmascript-6-plus-es6-plus%2Fusing-the-array-spread-operator%3Ftrk%3Dshare_video_url%26shareId%3DaIj1tB%252B1RtG2cozQHj6ezA%253D%253D)
- [Destructuring arrays](https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-ecmascript-6-plus-es6-plus%2Fdestructuring-arrays%3Ftrk%3Dshare_video_url%26shareId%3DaIj1tB%252B1RtG2cozQHj6ezA%253D%253D)
- [Destructuring Objects](https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-ecmascript-6-plus-es6-plus%2Fdestructuring-objects%3Ftrk%3Dshare_video_url%26shareId%3DaIj1tB%252B1RtG2cozQHj6ezA%253D%253D)
- [Destructuring Assignment (MSDN Documentation)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/argument-variables-with-process-argv?trk=embed_lil">Argument variables with process.argv</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## List directory files

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/list-directory-files?trk=embed_lil">List directory files</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Read files

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/read-files?trk=embed_lil">Read files</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Write and append files

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/write-and-append-files?trk=embed_lil">Write and append files</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

## Rename and remove files

<strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019/rename-and-remove-files?trk=embed_lil">Rename and remove files</a></strong> from <strong><a href="https://www.linkedin.com/learning/node-js-essential-training-2019?trk=embed_lil">Node.js Essential Training (2019)</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/alex-banks?trk=embed_lil">Alex Banks</a></strong>

# Exercise 5-2: File Systems

Create Node.js scripts that duplicate the primary functionality of common core utilities in unix.

You should use the following methods from the "process", "fs" and "path" modules:

**process.stdout.write** This function takes a single argument which is the string or stream that should be outputted.

**process.argv** This provides the set of arguments used to call the program as an array.

**path.resolve** This will turn a string into a path. This should be used to transform any strings provided by a user into a path, as those strings may include relative paths. 

**fs.readFileSync** This will return the contents of a file and block until it is done. There are asynchronous versions of these, but you should use the synchronous for the moment. Remember to use `toString()` method to convert the output from a Buffer to a string. 

**fs.copyFileSync** This synchronous method will write a new file with the contents of the source file. It takes two arguments, "source" and "destination" which are proper paths. 

**fs.renameSync** This renames a file (and so moves it) from one path (the first argument) to another. It can be used to rename either files or directories.

**fs.readdir** This function takes two arguments: a directory (src) and a callback. The callback function takes two arguments: "err", any error messages, and "files" -- an array of strings representing the file names found in that directory. You can use the default functionality.

**Array.join** Used to output an array of strings using a separator character. E.g:

  ```javascript
  let arr = [1,2,3]
  console.log(arr.join(" ")) // "1 2 3"
  ```

These are the functions to be created. In order to test them, each file should export a single function that accepts the argument list, and execute that function with `process.argv`.

These should all be in the ex5 subdirectory. E.g. "cat.js" should be in `5/ex5/cat.js` from the root of the repository.

1. **cat.js**: Outputs the contents of the file located in the first argument's location. Ignores any other arguments.
2. **cp.js**: Copies the file located in the first argument to the location specified by the second. Exit if either not a path or no second argument.
3. **echo.js**: Outputs any argument or arguments to the standard out, putting a space between them.
4. **ls.js**: Outputs a single space separated list of the files in a given directory. Defaults to the current directory (".") if no arguments given. Directories should be sorted into alphabetical order using [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
5. **mv.js**: Renames a file. Accepts a source and a destination, and moves/renames the file, overwriting any file in the destination.
6. **touch.js**: Creates a new empty file at the path described by the first argument. Ignore all other arguments, and quit if the path isn't a path.
   
# Lab 5: Studying App

Create a simple command line study program.

The data for the program should consist of both a set of questions and answers and a set of terms and definitions. These are both stored in a local JSON file as data, with the following structures:

multipleChoice.json

```json
[
  {
    "question": "What JavaScript function prints its arguments to standard out?",
    "possibleAnswers": [
      "process.standardout",
      "console.write",
      "process.stdout.write",
      "process.write"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the \".\" character mean with respect to linux file paths?",
    "possibleAnswers": [
      "Current direcory",
      "Parent directory",
      "Home directory",
      "Root directory"
    ],
    "correctAnswer": 0
  }
]
```

definitions.json

```json
[
  {
    "definition": "A text-based interface used to interact with the operating system",
    "possibleTerms": [
      "command line",
      "server",
      "developer tools",
      "debugger"
    ],
    "correctDefinition": 1
  },
  {
    "definition": "A term used to describe a file or directory location on a drive",
    "possibleTerms": [
      "name",
      "separator",
      "path",
      "prompt"
    ],
    "correctDefinition": 2
  }
]
```

You must use the global static method `JSON.parse` to parse the textual content of the file into an array. The function will return the JavaScript object that is present in the text, or throw an error if the text cannot be parsed into JSON.

The following is an example of its use:

```javascript
let sampleJson = "[1,2,3]"
let parsedArray = JSON.parse(sampleJson)
console.log(parsedArray[0]) // 1
```

The user should be presented with the three options: **Multiple Choice**, **Vocabulary Drill** or **Exit**:

```text
Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

> 
```

As below, the last line is a greater than symbol followed by a space. The user's input will appear there, and be provided through standard in. You can use the readline module to handle user input:

```javascript
// 5/readline.js
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
export async function program() {
  rl.question("Enter a number between 1-3, q to quit.\n> ", (answer) => {
    if (answer !== "q") {
      console.log(`You answered ${answer}`)
      program()
    }
  })
}

program()

```

Entering 1 and hitting enter will go to the first mode, 2 and enter will go to the second mode, 3 and enter will exit the program.

## Mode 1: Multiple Choice

The questions should be asked in the same order they are provided. Each question should be presented with the following format:

```text
Q: Question goes here

1. Answer 1
2. Answer 2
3. Answer 3
4. Answer 4

 > 
```

The final line should consist of a prompt with a greater than symbol and a single space. The only input accepted would be the number corresponding to one of the options, any other input would present the same prompt again.

1. Each question should be provided as a prompt, which includes the options (with each option given an option number). Options should be numbered starting at 1, and each should be on their own line. The correct answer is provided as an index of the correct answer.
2. The user should enter a option number to select it, and any other input is ignored and the prompt re-printed. If the user enters "q", the score is printed and the program should reprint the main menu.
3. Calculate the user's score out of the number of questions, with each question given one point.

## Mode 2: Drill

In this mode, the user is presented with a definition and a set of possible terms drawn from the file "definitions.json"

1. The program should select a random term from the list of of terms, including the correct one, and then give the user 5 seconds to answer correctly. 
2. If the user provides the correct term, the definition is removed from the set of possible questions.
3. If the timer expires, the user scores a 0 for that question.
4. This should continue until either there are no more questions remaining or the user enters "q" as the answer, in which case the program should print the score and reprint the main menu.
5. Then the score is displayed and the main menu is displayed.

A sample output is provided below, given a single term as the input in definitions.json:

```text
Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

 > 2

Definition: A term used to describe a file or directory location on a drive

1. name
2. separator
3. path
4. prompt
 > 1

Incorrect

Definition: A term used to describe a file or directory location on a drive

1. name
2. separator
3. path
4. prompt
 > 3

Correct

Score: 1/2

Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

 > 
```
