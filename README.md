# 🐍 Snake Game

A simple classic Snake Game built using **HTML, CSS, and JavaScript**.

This project demonstrates core JavaScript concepts like:

* DOM Manipulation
* Arrays
* Game Loop using `setInterval`
* Event Listeners
* LocalStorage
* Basic Game Logic

---

# 🎮 Features

✅ Snake movement using Arrow Keys
✅ Food consumption system
✅ Snake length increases after eating food
✅ Score tracking
✅ High Score stored in LocalStorage
✅ Timer system
✅ Game Over modal
✅ Restart functionality
✅ 🐍 Emoji Favicon

---

# 🧠 Game Logic Overview

## 🔹 Snake Movement

Snake moves based on a `direction` variable.

```js
snake.unshift(head);
snake.pop();
```

* `unshift(head)` → Adds new head at the front
* `pop()` → Removes tail

This creates forward movement without increasing length.

---

## 🔹 Snake Growth (Food Logic)

When snake eats food:

```js
snake.unshift(head);
```

Here, `pop()` is skipped.

Because tail is not removed:

➡ Snake length increases.

---

## 🔹 Collision Detection

Game ends when:

* Snake hits wall

```js
if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols)
```

---

## 🔹 Score System

```js
score += 10;
```

Each food gives 10 points.

---

## 🔹 High Score System

```js
localStorage.setItem("highScore", highScore);
```

High score is saved in browser storage.

---

# 📁 Project Structure

```
project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 🛠 Future Improvements

* Add self-collision detection
* Increase speed with score
* Add sound effects
* Add mobile touch controls
* Add difficulty levels

---



Built with ❤️ using Vanilla JavaScript.

---

# ⭐ If you like this project

Give it a star on GitHub and share it with others!
