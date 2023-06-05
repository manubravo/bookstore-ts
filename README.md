# BOOKSTORE

Spanish final degree work.

This project is a migration from Java to TS, where I try to compare the differences and limitations of each language.

## Features

 * TYPESCRIPT PROJECT
 * OOP
 * MySQL2/Promise
 * FILE
 * SER
 * INJECTION

## Installation

To install this project, make sure to have Node.js and npm installed on your system. Then, open a terminal in the project's root directory and run the following command to install the project's dependencies:

`npm i`


This command will search for all the necessary dependencies in the `package.json` file and install them in a folder called `node_modules`.

## Run in development mode

Now you can run the project in development mode with the following command:

`npm run dev`


This command runs the `index.ts` file in the `src` directory using `ts-node`. This allows running TypeScript code directly without having to transpile it to JavaScript.

## Other Scripts

There are also other scripts defined in the `package.json` file, including the `test` script that uses Jest to perform automatic tests, and the `deploy` script that uses nodemon to automatically update the server when there are changes in the code.

## Important note

Make sure to correctly configure the MySQL connection data in your code before running any command.
