# Introduction

This repository contains Vet App website and software 

# Content 

1. Initial Setup
    1. [Local Server/Database Stack](#local-serverdatabase-stack)
    1. [Repo](#repo)
    1. [Node.js](#nodejs)
    1. [Python Setup](#python-setup)
    1. [Flask Config Setup](#flask-config-setup)
    1. [Database Setup](#database-setup)
    1. [Run the Local Server](#run-the-local-server)
        1. [Initialize Database](#initialize-database)
    1. [Tests](#tests)

# Initilizing project

## Local Server/Database Stack

It is recommended to install [XAMMP](https://www.apachefriends.org/index.html). It includes a local Apache web server, MariaDB (MySQL), and phpMyAdmin for database management.

After installation, open the XAMMP control panel and start the Apache and MySQL services if they are not already running. You should be able to access phpMyAdmin at `http://localhost/phpmyadmin`

## Repo

<b> If first time using git </b>
- When first starting new project make sure to initilize git with command 

    `git init`

<b> Else </b>
- Clone this repository with `git clone https://github.com/jgustavoj/vet_app.git `

## Node.js

Node.js is required in this project primarily for Webpack, which bundles and minifies SCSS->CSS and JavaScript.

1. (Recommended) Install [NVM](https://github.com/nvm-sh/nvm) to manage multiple node versions. If using Windows, install [`nvm-windows`](https://github.com/coreybutler/nvm-windows)
    * For `nvm-windows` it is recommended to use the installer found in `nvm-setup.zip` at https://github.com/coreybutler/nvm-windows/releases
1. Install nodejs -- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
    * As of 2022, node 14.15.4 LTS is confirmed to be working with this project
    * If using NVM, use e.g. `nvm install 14.15.4` followed by `nvm use 14.15.4`
1. Run `npm install` from the repository root directory to install all required node modules. This may take a few minutes.
    * There may be a warning message about security updates. `npm audit fix` should (hopefully) resolve these.
    
    * For potential issues with rpm install and nan run the following commands to install nan globally:
    
    	`npm i -g nan`
    
    	`export NODE_PATH=$(npm root -g)`
	
    * Common error `npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\Nuwanst\package.json'` 
    * Follow this steps:
  
		a) Delete package.json and package-lock.json file

		b) type `npm init`

		c) type `npm install`
	
  	
    * For Mac users and potential issues with No Xcode or CLT version detected, follow the following instructions:
    
		a) First, get the location of the installed command-line tools by running the command below:

		`xcode-select --print-path`

		b) Knowing the path to the currently installed command-line tools from the previous step, You can now go ahead and 
	    remove it from the system. For the next set of commands, you need sudo privileges to run successfully.

	    `sudo rm -r -f /Library/Developer/CommandLineTools`

		c) Proceed to run the following command:

		`xcode-select --install`

		d)Finally continue to use the npm package managment tool to install dependencies:

		`npm install`
    
1. To confirm node/webpack setup, run `npm run build` to recompile assets. If there aren't any obvious error messages, it probably worked. To be doubly sure, you can delete `static/css/*.bundle.min.css` and `static/js/*.bundle.min.js` files prior to running `npm run build` and see if they reappear after it runs.


Typically, you should only need `npm run build` to rebuild all static assets. However, these are the other options:

* `npm run build-dev`

    Build only non-minified files. (I.e. `.bundle.css` and `.bundle.js` files).

* `npm run build-prod`

    Build only minified files. (I.e. `.bundle.min.css` and `.bundle.min.js` files).

* `npm run build`

    Build everything. Effectively the same as running `build-dev` and then `build-prod`

## Python Setup

1. Install Python.
1. (Recommended) Create a new virtual environment for this project, and activate it: Follow this steps: 

- Create environment `venv`

    `python -m venv venv`

- Activate environment; this will change depending on your system 

    If you are using git bash for windows you need to initilize the command

  `source venv/Scripts/activate`

if you are using CMD then the activate.bat should work fine.

.bat files can't run in git bash

1. Install Flask and other Python dependencies by running `pip install -r requirements.txt` from the repository root directory.

## Flask Config Setup

Flask config files are located in the `config/` directory. By default, `default.cfg` is always loaded, then values from it may be overwritten by additional context-specific config files. 

Most of the values in `default.cfg` are expected to be pulled in from OS environment variables (so API keys and other secrets are not committed to the repository). For local development, you will need a `config/local.cfg` file that contains these secrets, and any other values you need to change to get the app running locally (such as the database URI). This repo contains an example `local.cfg` in `config/local_example.cfg` as a reference for how these files work.

## Database Setup

Create a database for the project Make a note of what you name the database.

You may need to adjust values in `local.cfg` to match the MySQL settings on your machine. (XAMMP does not set MySQL up consistently, especially across different operating systems, so this is hard to predict). Once you figure out your credentials and which port the MySQL service is running on, update `SQLALCHEMY_DATABASE_URI` in `local.cfg`
    
    
    # Format
    # SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{username}:{password}@localhost:{port}/{dbname}?charset=utf8mb4'

    # Actual Example
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:root@localhost:3306/tfc?charset=utf8mb4'
    
## Run the Local Server

Start the local server with `python flaskapp.py`

If things are set up properly, you should see within the output:

    * Debug mode: on
    [...]
    Loading config from config/default.cfg
    Extending config from config/local.cfg

The application should now be available at `http://localhost:3000` (or a different PORT specified in `local.cfg`).


### Initialize Database

Once the server is running, go to `http://localhost:3000/setup/init-db` to create database tables for this project in the database specified by the `SQLALCHEMY_DATABASE_URI` in `config/local.cfg`. You should see "SUCCESS" in the browser window.


## Tests

[Pytest](https://pytest.org/) is used for testing. 

Run `pip install pytest` to install pytest. 

Run tests with `python -m pytest` from the repository root directory. Note this must be used rather than just `pytest` 

