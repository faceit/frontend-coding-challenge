# Challenge

## Prerequisites

- Clone this repository to your machine.
- Do not change the repository structure. If you change it, let us know why in the README.
- Write the code you are usually writing. Avoid writing sketchy code. We can't evaluate how good you are if the code is not good.
- In case of any questions regarding the challenge, please, contact a member of the hiring team who shared this challenge with you.

## Introduction

This is a minimally structured Create React App SPA project.
The project includes:

- A theme.
- Basic components that are meant to be used by you. (If we don't mention the components here, we will see if the candidate is able to find them after we've told the candidate that there are some components for use).
- A fake REST API.

![preview](.github/preview.gif)

### Notes

- Challenge _must_ be implemented on TypeScript.
- Redux _must_ be used for data fetching.
- Any _open-source_ library is allowed to be used.
- Completion duration: about 3 hours.

## Tasks

### 1) Show all tournaments

#### 1.A) Show `Loading tournaments ...` while fetching:

![loading](.github/loading-state.png)

#### 1.B) Show `Something went wrong.` with a `RETRY` button when the fetching has failed:

![error](.github/error-state.png)

- Clicking on the `RETRY` button will retry the fetching.

#### 1.C) Show all tournaments when the fetching has succeeded:

![success](.github/success-state.png)

#### 1.D) Show `No tournaments found.` when the fetch result is empty:

![no-result](.github/no-result-state.png)

### 2. Edit a tournament

![edit-promp](.github/edit-prompt.png)

- Clicking on the `EDIT` button will open a browser prompt with a message `New Tournament Name:`, an input field with the current tournament name as pre-filled value and the buttons `Cancel` to cancel and `OK` to confirm.
- The tournament name must contain only Latin letters, numbers, and spaces, not an empty string or only spaces.
- When confirming, the tournament name will be updated immediately using an optimistic update in the UI and a fetch call on the fake REST API.

### 3. Delete a tournament

![delete-promp](.github/delete-prompt.png)

- Clicking on the `DELETE` button will open a browser prompt with a message `Do you really want to delete this tournament?` and the buttons `Cancel` to cancel and `OK` to confirm.
- When confirming, the tournament will be deleted immediately using an optimistic update in the UI and a fetch call on the fake REST API.

### 4. Search tournaments

Requirements:

- The search should not be performed against the local data but by calling the endpoint with the search term.
- The search should be performed on the user's typing and not by hitting the Enter key.

#### 4.A) Add a `Search tournament ...` input field:

![search-input](.github/search-input.png)

#### 4.B) Show `Loading tournaments ...` while fetching:

![search-loading](.github/search-loading-state.png)

#### 4.C) Show `Something went wrong.` with a `RETRY` button when the fetching has failed:

![search-error](.github/search-error-state.png)

- Clicking on the `RETRY` button will retry the fetching.

#### 4.D) Show all tournaments from the search result when the fetching has succeed:

![search-success](.github/search-success-state.png)

#### 4.E) Show `No tournaments found.` when the search result is empty:

![search-no-result](.github/search-no-result-state.png)

#### 4.F) Search functionality should be optimized with performance in mind.

### 5. Create a tournament

![create-tournament](.github/create-tournament.png)

- Add a `CREATE TOURNAMENT` button.

![create-tournament-prompt](.github/create-tournament-prompt.png)

- Clicking on the `CREATE TOURNAMENT` button will open a browser prompt with a message `Tournament Name:`, an input field to enter the tournament name and the buttons `Cancel` to cancel and `OK` to confirm.
- The tournament name must contain only Latin letters, numbers, and spaces, not an empty string or only spaces.
- When confirming, the tournament will be created on the fake REST API and added on the UI without any loading indicators.

### 6. Style it

- The tournament has a border radius of `4px`.
- The tournament name has the heading size `h6`.
- The `Start` date must be displayed in the format `DD/MM/YYYY, HH:mm:ss` which is the `en-GB` locale.
- The horizontal spacing between the `EDIT` and `DELETE` button is `8px`.
- The horizontal and vertical spacing between each tournament must be `24px`.

### 7. Make it responsive

- The app must be responsive. Here you can find examples of how it should look like on different screen sizes:

<details>
  <summary>iPhone 12 Pro Max (428x926)</summary>
  <img alt="iPhone 12 Pro Max" src=".github/iPhone-12-Pro-Max.png">
</details>

<details>
  <summary>iPad (768x1024)</summary>
  <img alt="iPad" src=".github/iPad.png">
</details>

<details>
  <summary>Laptop 13" (1280x800)</summary>
  <img alt="Laptop 13"" src=".github/Laptop-S.png">
</details>

<details>
  <summary>iMac Retina 27" (2560x1440)</summary>
  <img alt="iMac Retina 27"" src=".github/iMac-Retina-27.png">
</details>

## Finished?

- Create a `ZIP` file with your solution.
- Include the .git folder to the `ZIP` file to make it easier for us to review your code.
- Send it to the recruiter that sent you this challenge.
- Please, don't include the `node_modules` folder in the `ZIP` file.
