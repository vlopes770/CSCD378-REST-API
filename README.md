# CSCD378-REST-API
Team Members: Vincent Lopes and Sage Zaugg

Topic: Soda Can Design Variations

# Description
This project is for our EWU CSCD-378 class where we must create a REST API based on a certain topic.

Here is the full assignment description:

You will form teams of 2 to 3 people for this project.  Each person must submit a link to the documentation on your landing page.

Requirements:

* Choose a topic which interests your team.
* Create a REST server that will maintain/retrieve that data.
  * GET requests - Different parameters of searching...a single entity, all entities or parameter qualified entries.
  * POST - Add data to the appropriate tables
  * PUT - Update data for a single entity
  * DELETE - remove an entity
  * OPTIONS - Different options depending on the endpoint.  This should look a lot like documentation.
* Create an online REST styled documentation showing how to use your api.  This includes all endpoints and parameter options for the api.
* A front-end webpage that provides a casual user the ability to use your data.  This means a fully functioning web app.
* Each person on the team is responsible for submitting a link to the api documentation & the front end webpage on their landing page.  The documentation should be complete enough for my grader to understand and use.

# The Project

Directory structure:
```
├─  backend/
│   ├── //All of our backend PHP files.
├─  docs/
├─  ├── //Documentation.
├─  frontend/
│   ├── //All of our frontend javascript.
│      ├── css/
│         ├── style.css
│   ├── index.js
├─  support/
│   ├── //For mySQL scripts and other things.
│   ├── soda_designs.sql
├─  README.md