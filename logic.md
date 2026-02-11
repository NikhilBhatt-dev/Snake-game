# 🐍 Snake Game Logic Documentation (logic.md)



# 1️⃣ Snake Movement Logic

## 🔹 Direction Variable

```js
let direction = 'down'
```

Ye variable decide karta hai snake kis direction me move karega.

Possible values:

* "up"
* "down"
* "left"
* "right"

---

## 🔹 Head Calculate Karna

```js
if (direction === "left") {
  head = { x: snake[0].x, y: snake[0].y - 1 };
}
```

Snake ka head hamesha `snake[0]` hota hai.

Har frame me:

* Current head position li jati hai
* Direction ke according new head calculate hota hai

Example:

Agar direction "left" hai:

* Y coordinate 1 kam hoga
* X same rahega

Isse snake ek block left move karta hai.

---

## 🔹 Actual Movement

```js
snake.unshift(head);
snake.pop();
```

### 👉 `snake.unshift(head);`

* New head ko array ke start me add karta hai
* Snake aage badhta hai

### 👉 `snake.pop();`

* Last element (tail) remove karta hai
* Isse snake ki length same rehti hai

✅ Result: Snake move karta hai bina length badhaye.

---

# 2️⃣ Arrow Key Logic

```js
addEventListener("keydown", (event) => {
```

Ye event listener keyboard input detect karta hai.

Example:

```js
if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
}
```

### Important Logic:

`direction !== "down"`

Iska matlab:

* Snake opposite direction me instantly turn nahi kar sakta
* Agar snake down ja raha hai to wo directly up nahi ja sakta

Ye self-collision bug ko prevent karta hai.

---

# 3️⃣ Wall Collision Logic

```js
if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols)
```

Ye check karta hai:

* Head board ke bahar to nahi gaya

Conditions:

* `head.x < 0` → top wall
* `head.x >= rows` → bottom wall
* `head.y < 0` → left wall
* `head.y >= cols` → right wall

Agar true hua:

```js
clearInterval(intervalId);
```

Game stop ho jata hai.

---

# 4️⃣ Food Consume Logic

```js
if (head.x == food.x && head.y == food.y)
```

Ye check karta hai:

* Kya snake ka head food ki position par hai?

Agar yes:

```js
snake.unshift(head);
```

Yaha important logic hai 👇

Normally movement me:

```js
snake.unshift(head);
snake.pop();
```

Lekin food eat karte time `snake.pop()` nahi hota.

Isliye:

* Head add hota hai
* Tail remove nahi hoti

✅ Result: Snake ki length increase ho jati hai.

---

# 5️⃣ Score Increase Logic

```js
score += 10;
scoreElement.innerText = score;
```

Har food par:

* 10 points add hote hain
* Score UI update hota hai

---

# 6️⃣ High Score Logic (LocalStorage)

```js
if (score > highScore) {
  highScore = score;
  localStorage.setItem("highScore", highScore.toString());
}
```

Logic:

* Agar current score highScore se bada hai
* To new highScore save hota hai
* LocalStorage me permanently store hota hai

Isse page reload hone par bhi highScore safe rehta hai.

---

# 7️⃣ Timer Logic

```js
setInterval(() => {
```

Har 1 second me:

* Seconds increase hote hain
* 59 ke baad minute increase hota hai

Ye manual digital clock logic hai.

---

# 8️⃣ Restart Logic

Restart function me:

```js
snake = [{ x: 1, y: 3 }];
```

Snake ko initial state me reset karta hai.

```js
score = 0
time = "00-00"
```

Score aur timer reset karta hai.

```js
clearInterval(intervalId);
```

Old game loop stop karta hai.

Phir:

```js
intervalId = setInterval(render, 300);
```

Naya game start karta hai.

---

# 🎯 Summary

Snake movement ka pura logic 3 main cheezon par depend karta hai:

1. `direction` variable
2. `snake.unshift(head)`
3. `snake.pop()`

Food khane par `pop()` skip karna hi length increase ka main reason hai.

---

# 🔥 Core Concept

Snake game ek simple array manipulation game hai.

Snake = Array of body parts
Head = snake[0]
Movement = Add head + Remove tail
Growth = Add head only
