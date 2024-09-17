# Content-Organizer

## Purpose of the Web App
### User able to record their daily todo list and annual tracker list
![contentOrganizer-dashboard](https://github.com/user-attachments/assets/d67ebb18-9c59-4310-94ea-684bea48440b)

### User able to add and organize a list of job they are looking for
![contentOrganizer-listjob](https://github.com/user-attachments/assets/0cba5134-1c73-46db-9b0f-e5884f889b45)

### User able to drag and drop to change the job application status through kanban board
![contentOrganizer-jobtracker](https://github.com/user-attachments/assets/ca6959c5-fac1-49d3-874d-068dc85766b2)

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
- Important: localStorage trats everything as string, need to parseIne its value before using it as an integer.
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

npm

- Used to handle operations like data fetching, subscription, or manually changing the DOM

#### [React Calendar reference](https://derrickotte.medium.com/how-to-create-a-calendar-from-scratch-in-react-1f2db197454d)

#### [React DnD Drag and Drop](https://react-dnd.github.io/react-dnd/about)

#### [Pragmatic Drag and Drop](https://atlassian.design/components/pragmatic-drag-and-drop/comparison)

- [Example](https://codesandbox.io/p/sandbox/xc598s?file=%2Fpragmatic-drag-and-drop%2Fdocumentation%2Fexamples%2Fpieces%2Fboard%2Fcard.tsx%3A280%2C47)

#### [React Beautiful dnd](https://github.com/atlassian/react-beautiful-dnd?tab=readme-ov-file)

- Warning: but this is outdated with the old version of react-redux, will cause some issue

#### [React Beautiful dnd most updated](https://github.com/hello-pangea/dnd)

- Fork of React Beautiful dnd with exact same functionality of the latest version and up-to-date dependencies
- [Video Tutorial](https://egghead.io/lessons/react-reorder-columns-with-react-beautiful-dnd)

#### Reduce

- A powerful tool in Javascript for transforming arrays into single values or objects

#### Date

- Date().toString() => Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
- Date().toISOString() => 2011-10-05T14:48:00.000Z

#### Understanding the Data Flow

- Frontend to Backend Data Flow:

1. When you send data from the frontend using "axios.post", the data is sent as a JSON object in the request body
2. This JSON object should match the structure that your backend controller expects

- Backend Controller

1. The backend controller function destructures the properties from the request body using "const { varA, varB } =req.body"
2. These property names ( varA and varB) must match the keys used in the JSON object you send from the frontend

- Consistency

1. If you change the names of the properties in the request body on the frontend, you also need to update the destructuring in your backend controller to match these new names.
2. Similarly, if you change the desctruing names in the controller, you need to ensure that the frontend sends the data using these new names

#### [Cronitor Dependencies](https://crontab.guru/examples.html)

- This allows you to write a schedule expression, that can call a function to run once a day, every friday etc.

#### [Cron for Node.js](https://www.npmjs.com/package/cron#-basic-usage)

- Installation: npm install cron
- import { CronJob } from 'cron';
- const job = new CronJob('\* \* \* \* \* \*', function(){//function here});

---

┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │ |
│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
│ │ │ │ └───── month (1 - 12)
│ │ │ └────────── day of month (1 - 31)
│ │ └─────────────── hour (0 - 23)
│ └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

#### TIPs

[Beautiful drag and drop update](https://www.reddit.com/r/react/comments/wczdlm/beautiful_drag_and_drop_with_backend/?rdt=55129)
