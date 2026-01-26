
# Practice Question – DOM Manipulation (createElement & classList)

This repository contains a JavaScript program that demonstrates **dynamic DOM manipulation** using JavaScript.  
It is intended for beginners to understand how elements can be **created, styled, inserted**, and how **CSS classes can be managed** without overwriting existing styles.

---

## 📌 Program Overview

The program performs two DOM-related tasks:

1. Creates a new `<button>` element using JavaScript, styles it, and inserts it as the **first element inside the `<body>` tag**.
2. Demonstrates how to **add a new CSS class** to an existing `<p>` element using `classList` without removing its original class.

This highlights the difference between directly setting class names and using `classList`.

---

## 🧪 Code Functionality

- Creates a `<button>` element using `document.createElement()`
- Sets button text and inline styles using JavaScript
- Inserts the button at the top of the body using `prepend()`
- Selects a `<p>` element with an existing class
- Adds a new CSS class using `classList.add()`
- Preserves existing CSS styles while adding new ones

---

## 🧠 Concepts Covered

- `document.createElement()`
- `prepend()` method
- Inline styling using JavaScript
- CSS class manipulation
- `classList.add()`
- Preventing class overwrite
- DOM manipulation basics

---

## 🖥️ Output

📸 **Final output showing button insertion and combined paragraph styling:**  

![DOM Output](output.png)

---

## 📂 File Information

- `index.html` — HTML structure  
- `style.css` — CSS classes (`.para`, `.newpara`)  
- `script.js` — JavaScript DOM logic  
- `output.png` — Screenshot of final output  
- `README.md` — Project documentation  

---

## ⚠️ Limitations
- Styles are static and predefined
- No user interaction on button click
- DOM changes occur only on page load

---

## 👨‍💻 Author

**Shreya Awari**  
📧 Email: shreyaawari31@gmail.com  
🌐 GitHub: https://github.com/shreyaawari28  

---

⭐ Feel free to **star the repository** if you find it useful.
