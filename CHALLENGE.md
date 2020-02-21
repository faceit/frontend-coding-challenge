# Challenge

## Prerequisites

- Fork this repository `frontend-coding-challenge` privately to your GitHub account.
- Checkout the forked repository and work on a branch named `solution`.

## Introduction

You are given a prepared SPA project that was bootstrapped with Create React App. The app must render a list of tournaments from a fake REST API. New tournaments can be created and tournaments can be searchable, editable and removable through the fake REST API. Few basic elements such as headings, button and input have already been created.

![preview](.github/preview.gif)

## Tasks

### Notes

- Redux must be used for data fetching.
- Alternatively to styled-components, you may use [CSS/CSS Modules/Sass provided by CRA](https://create-react-app.dev/docs/adding-a-stylesheet).
- Any open-source library is allowed to be used.

### 1) Show all tournaments

#### 1.A) Show `Loading tournaments ...` while fetching:

![loading](.github/loading-state.png)

#### 1.B) Show `Something went wrong.` with a `RETRY` button when the fetching has failed:

![error](.github/error-state.png)

- Clicking on the `RETRY` button will retry the fetching.

#### 1.C) Show all tournaments when the fetching has succeeded:

![success](.github/success-state.png)

- The tournament name has the heading size `h6`.
- The `Start` date must be displayed in the format `DD/MM/YYYY, HH:MM:SS` using the `en-GB` locale.
- The horizontal and vertical spacing between each tournament must be `24px`.
- The horizontal spacing between the `EDIT` and `DELETE` button is `8px`.

### 2. Edit a tournament

![edit-promp](.github/edit-prompt.png)

- Clicking on the `EDIT` button will open a browser prompt with a message `New Tournament Name:`, an input field with the current tournament name as pre-filled value and the buttons `Cancel` to cancel and `OK` to confirm.
- When confirming, the tournament name will be updated on the fake REST API and UI optimisticly without any loading indicators.

### 3. Delete a tournament

![delete-promp](.github/delete-prompt.png)

- Clicking on the `DELETE` button will open a browser prompt with a message `Do you really want to delete this tournament?` and the buttons `Cancel` to cancel and `OK` to confirm.
- When confirming, the tournament name will be deleted on the fake REST API and UI optimisticly without any loading indicators.

### 4. Search tournaments

#### 4.A) Add a `Search tournament ...` input field:

![search-input](.github/search-input.png)

#### 4.B) Show `Loading tournaments ...` while fetching:

![search-loading](.github/search-loading-state.png)

#### 4.C) Show `Something went wrong.` with a `RETRY` button when the fetching has failed:

![search-error](.github/search-error-state.png)

- Clicking on the `RETRY` button will retry the fetching.

#### 4.D) Show all tournaments from the search result when the fetching has suceeed:

![search-success](.github/search-success-state.png)

### 5. Create a tournament

![create-tournament](.github/create-tournament.png)

- Add a `CREATE TOURNAMENT` button.

![create-tournament-prompt](.github/create-tournament-prompt.png)

- Clicking on the `CREATE TOURNAMENT` button will open a browser prompt with a message `Tournament Name:`, an input field to enter the tournament name and the buttons `Cancel` to cancel and `OK` to confirm.
- When confirming, the tournament will be created on the fake REST API and added on the UI without any loading indicators.

## Finished?

- Push your work to your fork on GitHub.
- Give read access to `faceit-frontend-coding-challenge` in your forked repository.
