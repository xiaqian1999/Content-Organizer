# Content-Organizer

## Purpose of the Web App

## Language use

ReactJS, Tailwind CSS, HTML/CSS, Express

### New Things Learn

#### When create new respositories with README.md file

- git remote add origin "PATH"
- git branch -M main
- git pull origin main --allow-unrelated-histories
- git commit -m "pull README file from remote"
- git push -u origin main

#### Initialize data type as array

- Type: [String]

#### Test inside the thunder Client for add with array and remove item by id

- Check by the screenshot

#### [React-Select dependencies](https://react-select.com/home)

npm i --save react-select

#### localStorage & sessionStorage

- Both are part of the Web Storage API, which allows web applications to store data in the browser
- Similarity between both
  - Data scoped to the origin (protocole, domain and port) of the page
  - Different origins can't access each other's localStorage
  - storage limit is around 5-10MB, also varies by browser
- localStorage
  - Data stored in localStorage persists even after the browser is closed and reopened, this means data remains in the browser until it's explicitly deleted by the code or by the user through browser settings
  - Ideal for storing data that sgould be available across multiple sessions or page loads, such as uer preferences or authentication tokens
- sessionStorage
  - Data stored only persists for the duration of the page session. A page sessio lasts as long as the browser is open and ends when the page is closed.
  - That means is we open a new tab or window to the same origin, it will have a different session
  - Ideal for data that should be available only for the duration of a single session, such as temporary user inputs or state that should not be persisted between broswer sessions.

#### useEffect

- Used to handle operations like data fetching, subscription, or manually changing the DOM
