// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Shreya
// Awari" to this text using JS.

let heading = document.querySelector("h2")
console.dir(heading.innerText)
heading.innerText = heading.innerText + " from Shreya Awari " //concatenate 


// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each
// of them.

let divs = document.querySelectorAll(".box")
console.dir(divs)

//basic method

// divs[0].innerText = "Changed innerText for Div1";

// divs[1].innerText = "Changed innerText for Div2";

// divs[2].innerText = "Changed innerText for Div3";

//using for loop to do the same task

let index = 1;
for (const div of divs) {
    div.innerText = `Changed text of div ${index}`;
    index++;
    
}