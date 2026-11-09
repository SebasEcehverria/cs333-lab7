# cs333-lab7
Your first React app with Vite, then put the build on your server

Do each step below and answer the questions right here in this README as you go (type your answer under each question). Everything is on your laptop until Part 5.

You need:
- Node 20.19 or newer on your laptop (`node -v` to check)
- your server from week 6: you can ssh in as yourfirstname, and your jokes API from Lab 6 is running under pm2

Stuck? Look at the Stuck table at the bottom first, then post in the Slack lab thread: the command you ran, the exact error (copy and paste it), and what you already tried.

---

# Part 1: Make the app

1. Click "Use this template" to make your own copy of this repo, clone it to your laptop, and open a terminal in the repo folder.

2. Make a React app inside the repo:

```bash
npm create vite@latest my-react-app
```

Answer the questions it asks:
- Ok to proceed? y
- Select a framework: React
- Select a variant: JavaScript
- Which linter to use? keep the default
- Install with npm and start now? Yes

It installs everything and starts the app. Open the link it prints (http://localhost:5173) in your browser.

This terminal is now busy running your app. Leave it running. Open a second terminal on your laptop for everything else.

Next time you want to start it yourself: `cd my-react-app` then `npm run dev`.

Question 1: what port is your app on? What do you see on the page?

**My app runs on port 5173. The page displays a dark-themed Vite and React starter page with a Get Started heading, React and Vite logos, a counter button, and links to documentation and community resources.**

3. In the second terminal, look at what Vite made:

```bash
cd my-react-app
ls
ls src
```

Question 2: which file in `src` is your app, and which file puts it on the page? (Look at the last lines of `index.html` and `src/main.jsx`.)

**src/App.jsx contains the main React application. src/main.jsx imports the App component and renders it inside the root element in index.html using React's createRoot() function.**

Commit: `Part 1: Vite app`

---

# Part 2: Clean it up

4. Open `my-react-app/index.html` and change `<title>my-react-app</title>` to your own title. Save and look at the browser tab. It updates by itself, you don't have to restart anything.

5. Open `src/App.jsx`, delete everything in it, and paste this:

```jsx
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
```

6. Open `src/App.css`, delete everything in it, and paste this:

```css
.my-list {
  color: steelblue;
  font-size: 24px;
}
```

Save both. Your page should just say Hello, world!

Commit: `Part 2: clean up`

---

# Part 3: JSX

7. Your name and a lucky number. In `App.jsx`, change the `App` function to this:

```jsx
function App() {
  const name = "Your Name";
  const luckyNumber = Math.floor(Math.random() * 100);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
    </div>
  );
}
```

TODO: put your own name in. Refresh the page a few times.

Question 3: what do the `{ }` do inside the JSX? What would show up if you took them away from `{name}`?

**Curly braces let us use JavaScript expressions and variables inside JSX. If I removed the curly braces from {name}, the page would display the literal word "name" instead of "Sebastian".**

8. A list. Under the `<p>` line, add:

```jsx
      <ul className="my-list">
        <li>Pizza</li>
        <li>Tacos</li>
        <li>Sushi</li>
      </ul>
```

TODO: change the three things to your own. The list turns blue because of the `.my-list` style in `App.css`.

Question 4: why is it `className` and not `class` like in HTML?

**React uses className instead of class because JSX is written using JavaScript syntax, where class is a reserved keyword. className is used to assign CSS classes to elements.**

9. A style written in JavaScript. Above the `return`, add:

```jsx
  const headingStyle = {
    color: "tomato",
    fontSize: "48px",
  };
```

and change the `<h1>` line to:

```jsx
      <h1 style={headingStyle}>Hello, {name}!</h1>
```

TODO: pick your own color and size.

Question 5: in CSS it's `font-size`. Why is it `fontSize` here?

**Inline styles in React are written as JavaScript objects. JavaScript style properties use camelCase instead of hyphens, so font-size becomes fontSize.**

Commit: `Part 3: JSX`

---

# Part 4: Good morning, components

10. Greet by the time of day. Above the `return` in `App`, add:

```jsx
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
```

and change the `<h1>` line to:

```jsx
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
```

Question 6: why does the `if` go up here and not inside the `{ }` in the JSX? (Slides: expressions vs. statements.)

11. Your own component. Make a new file `src/List.jsx` and paste this:

```jsx
function List() {
  return (
    <ul className="my-list">
      <li>Pizza</li>
      <li>Tacos</li>
      <li>Sushi</li>
    </ul>
  );
}

export default List;
```

TODO: put your own three things in it again.

12. Use it in `App.jsx`. At the top, under the `import "./App.css";` line, add:

```jsx
import List from "./List.jsx";
```

Then delete the whole `<ul>` ... `</ul>` from `App.jsx` and put this in its place:

```jsx
      <List />
```

The page should look the same as before. Your list now lives in its own component.

Question 7: look at `src/main.jsx`. What is the only component it puts on the page? How does your list get there?

Your whole `App.jsx` should look like this now:

```jsx
import "./App.css";
import List from "./List.jsx";

function App() {
  const name = "Your Name";
  const luckyNumber = Math.floor(Math.random() * 100);

  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const headingStyle = {
    color: "tomato",
    fontSize: "48px",
  };

  return (
    <div>
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

export default App;
```

13. Add a comment above each part of `App.jsx` and `List.jsx` saying what it does, in your own words. If you added anything extra for practice, say so in a comment too.

14. Optional styling. Paste this at the bottom of `App.css`, then change the colors and sizes to make it yours:

```css
body {
  background-color: #fdf6e3;
  font-family: Arial, sans-serif;
  text-align: center;
}

.my-list {
  list-style: none;
  padding: 0;
}

.my-list li {
  margin: 8px 0;
}
```

Commit: `Part 4: greeting and List component`

---

# Part 5: Build it and put it on your server

15. Build. In your first terminal (the one running the app) press Ctrl+C to stop it. Then:

```bash
npm run build
ls dist
```

Vite makes a `dist` folder: an `index.html` and an `assets` folder. That's your whole app as plain HTML, CSS and JavaScript, so your server doesn't need Node to show it. nginx can hand it out like any web page.

(Optional: `npm run preview` shows the built version at http://localhost:4173. Ctrl+C when you're done.)

Question 8: how big is the `.js` file in `dist/assets`? Why so big for a page this small? 

16. Copy it to your server. Your jokes API lives in your home folder because Node (pm2) has to run it. Your React build is just files, so it goes where nginx hands out files: `/var/www/html`. How much disk space do you have on your server? (this is important to keep an eye on in general)

There is more than one way to organize your website. Pick one of these two:
- Way A: your React app is your whole site, at `http://your-server-address`
- Way B: your React app goes in its own folder, at `http://your-server-address/react/`, and your week 6 page stays where it is

Either one is fine. Way B is handy if you want more than one thing on your site later.

## Way A: straight into /var/www/html

Heads up: this replaces the `index.html` you put there in week 6. If you want to keep it, copy it somewhere first.

You already built it in step 15. On your laptop, inside `my-react-app`:

```bash
scp -r dist/* yourfirstname@your-server-address:/var/www/html/
```

Using WinSCP instead? Open `/var/www/html` on the right and drag everything inside your `dist` folder (not the `dist` folder itself) over.

Copy what's inside `dist`, not the `dist` folder. Your `index.html` looks for `/assets/...` at the top of your site, so `index.html` and `assets` have to sit right in `/var/www/html`.

Your site: `http://your-server-address`

## Way B: in a folder called react

Vite has to know the folder name, because your `index.html` looks for its files at `/react/assets/...` now. So build again, this time with the folder name (on your laptop, inside `my-react-app`):

```bash
npm run build -- --base=/react/
```

Make the folder on your server. In your second terminal, log in to your server, make it, and log out again:

```bash
ssh yourfirstname@your-server-address
mkdir /var/www/html/react
exit
```

Back on your laptop, inside `my-react-app`, copy what's inside `dist` into it:

```bash
scp -r dist/* yourfirstname@your-server-address:/var/www/html/react/
```

Using WinSCP instead? Make a new folder called `react` inside `/var/www/html` on the right, open it, and drag everything inside your `dist` folder over.

Your site: `http://your-server-address/react/`

TODO (optional): add a link to your React app on your week 6 page. On your server, open `/var/www/html/index.html` with nano and add:

```html
<a href="/react/">My React app</a>
```

If you change the folder name, use the same name in `--base=/yourname/`, in the `mkdir`, and in the `scp`.

17. Open your site in your browser (`http://your-server-address` for Way A, `http://your-server-address/react/` for Way B). You should see your React app.

Then open `http://your-server-address/api/random`. Your jokes API from Lab 6 should still answer.

Question 9: both of those come from the same server on port 80. How does nginx know which one to send you?

Commit: `Part 5: build and deploy`

---

# Hand it in

18. Push this repo to your own GitHub repo (your `my-react-app` code and this README with your answers). `node_modules` and `dist` are left out on purpose, Vite's `.gitignore` takes care of that.

19. Submit in Moodle: your GitHub repo link and your site link (`http://your-server-address` or `http://your-server-address/react/`). Leave it up so I can look at it.

---

## Stuck?

| You see | What's going on | Fix |
| --- | --- | --- |
| `Vite requires Node.js version 20.19+ or 22.12+` | Your Node is too old | Install the current Node from nodejs.org, open a new terminal, `node -v` |
| `npm run dev` says `Missing script: "dev"` | You're not in `my-react-app` | `cd my-react-app` first |
| The page is blank | There's an error in your JSX | Open the browser's developer tools (F12), Console tab, and read the red error |
| `Adjacent JSX elements must be wrapped in an enclosing tag` | `return` has more than one tag at the top | Wrap everything in one `<div>` ... `</div>` |
| `Failed to resolve import "./List.jsx"` or `Could not resolve './List.jsx'` | The file name or folder is different | It has to be `src/List.jsx`, capital L (your laptop may not care about the capital, but the import and the file name should match) |
| The app opens on 5174 instead of 5173 | The app is already running in another terminal, so Vite picked the next port | Use the other one, or Ctrl+C it and start again |
| `scp: ... No such file or directory` | You're not in `my-react-app`, or there's no `dist` yet | `cd my-react-app`, `npm run build`, `ls dist` |
| `scp: /var/www/html/...: Permission denied` | `/var/www/html` doesn't belong to you yet | On the server: `sudo chown -R $USER:$USER /var/www/html` (week 6) |
| Way A: your site shows a blank page | The `assets` folder didn't get copied, or you copied the whole `dist` folder | `ls /var/www/html` on the server should show `index.html` and `assets` |
| Way B: `/react/` shows a blank page | You built without `--base=/react/`, so it looks for `/assets/...` at the top of your site | `npm run build -- --base=/react/` and copy `dist/*` into `/var/www/html/react/` again |
| `mkdir: cannot create directory '/var/www/html/react': Permission denied` | `/var/www/html` doesn't belong to you yet | On the server: `sudo chown -R $USER:$USER /var/www/html` (week 6) |
| `/api/random` says 502 Bad Gateway | Your jokes API isn't running | On the server: `pm2 list`, `pm2 restart jokes` |
