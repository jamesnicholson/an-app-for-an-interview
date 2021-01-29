# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

## Interview Exercise Spec

In [src/App.js](https://github.com/Bazaruto/interview-app/blob/master/src/App.js),
build a two-column layout that lists the posts on the left, and edits them on the right.\
Installing CSS NPM packages (like _tailwindcss_) is ok if you need it, but installing Javascript NPM packages (like _axios_ or _lodash_) is discouraged.

### Post list

- The post list displays the post `title` and `body`. The `body` text should be truncated so as not to span multiple lines
- A checkbox that toggles whether to load deleted posts. It should not load deleted posts by default (the posts have a `deleted` flag, i.e., they can be soft-deleted)
- A search input that filters the loaded posts on enter (not as you type). The query should match on a post's `title`

### Post editor

- Selecting a post on the left-hand side populates the right-hand side
- The `title`, `body`, and `deleted` fields should be editable
- The `title` and `body` fields are required
- After submitting the form, the post list should reflect the changes, and the post editor should go back to its blank state

### The API

You will use 2 endpoints:

- `GET /api/posts?include_deleted=false|true` to fetch the posts

- `PATCH /api/posts/:id` to update the selected post

#### PLEASE NOTE

Artificial random delays have been built into these two async methods, so response times vary randomly between 0 - 2 seconds. This means 2 things:

1. It is quite slow, so we should display "loading" or "submitting" indicators to the user
2. Calling `GET /api/posts?include_deleted=false|true` in quick succession can deliver responses out of chronological order

![posts](https://user-images.githubusercontent.com/747979/106150719-49670e00-6184-11eb-8c33-23f744b00a0e.png)
