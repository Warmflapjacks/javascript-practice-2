//creates a <p> with red text
const container = document.querySelector('#container');

//child of container
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm Red!!!"
paragraph.style.color = 'red';
container.appendChild(paragraph);

//creates an <h3> with blue text
const headerThree = document.createElement('h3');
headerThree.style.color = 'blue';
headerThree.textContent = "I'm a blue h3!"
container.appendChild(headerThree);


//creates a div with black border and pink background
const division = document.createElement('div');
container.appendChild(division);
division.style.cssText = 'border: solid black; background: pink';

    //child containers for division
    //<h1> that is a child to divsion
    const headerOne = document.createElement('h1');
    division.appendChild(headerOne);
    headerOne.textContent = "I'm the <h1> inside the div";

    //paragraph div that is a sibling to headerOne
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = "ME TOO!!";
    division.appendChild(paragraphTwo);
//</division>