# Flickpick

## Description

Flickpick is a full stack web app themed around popular movies. This is the front-end of the project. The front end is a static website featuring an animated splash page, user login/logout functionality, and the ability to view movies by genre, randomly, or from a user-generated favorites list. Information about our back end CRUD functionality and database can be found in the Links section.

This app was built by a team of three collaborators:

Shane Vann-Shirley: https://github.com/ashanev

Paula Bannerman: https://github.com/dcartist

Melika Rasti: https://github.com/mrasti

## Technologies Used

React.js, React-bootstrap, React-router, Axios

# Front End View

<img src="https://raw.githubusercontent.com/ashanevs/flickpick/master/public/flickpick-splash.png" alt="flickpick-splash" width=500>

<img src="https://raw.githubusercontent.com/ashanevs/flickpick/master/public/flickpick-movies.png" alt="fflickpick-movies" width=500>

## Links

Back end github repository found at: https://github.com/ashanevs/flickpick-api

Deployed app: https://flickpick.vercel.app/ updated (2020)

# Getting Started / Installation Instructions

To work with our project locally, you will first need the back end of the app. Follow the instructions found at the back end repository before proceeding.

If you want to work with the full repo, first fork and clone it (https://help.github.com/en/articles/fork-a-repo). Ensure you have node installed (node --version from your CLI to check the version, if not, it is available for free from their website) then run

```
npm install
```

from the root directory of your cloned project to install dependencies (e.g. react-router, axios).

To begin hosting the front end locally, pass

```
npm start
```

into your command line. You may be prompted to use an alternate port (as the back end should be running on port 3000); press Y to automatically use the next available port. The site should open in your default browser.

# How to Use Flickpick

From the home page, you have several options in the nav bar for site navigation.

About includes information about the project and its planning phase.

Movie will generate a list of 21 random movies. While in the movie section, you can utilize the search bar to narrow results from the full database (note that at the time of writing, search only functions while in the movie section).

The Genre nav point will take you to a list of genre selections. Selecting one of them will bring you to a paginated selection of movies of that genre.

Clicking on "View Details" for any movie will take you to a page with more information for a specific movie, as well as an embedded trailer for the movie (if available). In this section, buttons to add and remove movies from a user favorites list (nav element only visible if logged in) are available.

Sign up and log in function as expected. At the time of writing, you must log in after signing in for favorites functionality to work as intended (sign up will redirect to the login page automatically). The user can also navigate to a "delete account" page while logged in, which will remove the user document from the database and log out.

# Project History

The MVP goal of this project was to have an application that pulled movies from a database(TMDb) in order to view their details. We also intended to have them available in a sorted manner by genre.

Our reach goals were to create an authenticated user sign-up feature with an editable favorites list. We also hoped to make the app responsive for mobile interaction.

## Issues

There is an issue where a signed in user is not authenticated like a logged in user. This problem originates on the back end. As a work-around, the user is redirected to login after signing up to encourage logging in as a next step. If a user attempts to add movies without logging in, they will receive a 401 error in the console.

Some of the movies from the original data have dead image links. Currently they display as a broken image tag.

Search only functions in the Movie section. This isn't a major issue, but is slightly counter intuitive.

Switching pages in genre does not take the user to the top of the page.

## Prospective Goals

Fixing it so that a signed in user has the same authentication rights as a logged in user would be ideal. This is more of a back-end issue however.

We would like for the search bar to work while in genre movie lists.

UX might be improved if the add and deleted movie buttons gave visual feedback or redirected the user.

The genres page could be more visually appealing.

Having a back button from movie-info would be good.

If a movie doesn't exist in our database (of only 2000 popular movies), it would be nice if we could pull the information from TMDb to fill in any gaps.

Currently, passwords and secret keys for authentication aren't truly hidden. Hashing passwords and storing the secret key in an environmental variable are potential solutions for the future.

We would like to make the site fully responsive for mobile devices.

# Contribution Resources

Source code: https://github.com/ashanevs/flitpick

Issue tracker: https://github.com/ashanevs/flickpick/issues
