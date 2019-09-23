# MFGx To Do API Test

This repository contains a simple express.js REST API application. Currently, the only endpoint implemented is the `/todo` route that returns all to do entries.

Your task is to add the following API routes to this REST API:

1. A get by id route (HTTP GET): This route should return a single to do by id. If it is not found, a 404 error should be returned.
2. A create route (HTTP POST): This route should create a new to do. Return the created to do with its generated id.
3. An update route (HTTP PUT): This route should update an existing to do. If it is not found, a 404 error should be returned. If it is found, return the updated to do.
4. A delete route (HTTP DELETE): This route should delete an existing to do. If it is not found, a 404 error should be returned. If it is found, return the deleted to do.

Your to do objects should all have the following structure:

1. id: A generated UUID v4 string that is added to all to do objects.
2. name: A string that should be a short name for the to do.
3. description: A string that should describe the to do in more detail.

## Optional Requirements

If you'd like to challenge yourself, here are some optional requirements you can attempt to implement:

1. On the existing get all route, add support for filtering the results via query string parameters.

## Setup

This repository is setup to use babel-node, allowing you to use modern JavaScript features on node.js. After cloning the repository, you will need to run `npm i` to install all of the required dependencies.

### Available Scripts

#### `npm run watch`

This script will start the application using nodemon to watch for any file changes and automatically restart the application.

#### `npm run start`

This script will start the application without using nodemon, meaning that you will need to manaully restart it after every change.
