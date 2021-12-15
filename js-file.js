//creates a reference to DOM element
const container = document.querySelector('#container');

//creates a new div and stores it in the variable content
// const makeStuff = document.createElement('div');

//
// makeStuff.classList.add('blue');
// console.log("makeStuff.classList: " + makeStuff.classList)

// makeStuff.textContent = 'This is the glorious text-content!';





// container.appendChild(makeStuff);

//creates a new h3 and stores it in the variable h3
const h3 = document.createElement('h3')


h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
//inserts h3 into container div
container.appendChild(h3);

/*---------------------------------------------*/
const blackDiv = document.createElement('div');
blackDiv.style.cssText = 'border: black; background-color: pink;';
// container.appendChild(blackDiv);

/*---------------------------------------------*/
const myHeader1 = document.createElement('h1');
myHeader1.textContent = "I'm in a div!!!!";
blackDiv.appendChild(myHeader1);

/*---------------------------------------------*/
const paragraph = document.createElement('p');
paragraph.textContent = 'ME TOO!';
paragraph.style.cssText = 'font-weight: bold; color: white;';
blackDiv.appendChild(paragraph);
container.appendChild(blackDiv);