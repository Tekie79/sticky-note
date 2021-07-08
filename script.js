const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');


let i = 0;

// Margin, Rotation and Color random values
const randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
const randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
const randomColor = ["#E8E46E", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];

// Randomization function for margin and rotation

const randomize = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// Note background color function
const colorize = (array) => {
    if(i > array.length - 1) {
        i = 0;
    }
    return array[i++];
}

// Click Events

xIcon.addEventListener("click", () => {
    typeNote();
})

checkIcon.addEventListener("click", () => {
    createNote();
})

// Note typing function

const typeNote = () => {
    if(container3.style.display == 'none') {
        container3.style.display = "block";
    } else {
        container3.style.display = 'none';
    }
    document.getElementById('note-text').value = '';
}

// Create Note function

const createNote = () => {
    const noteText = document.getElementById('note-text').value;
    //create nodes
    const node0 = document.createElement("div");
    const node1 = document.createElement("h1");
// text and styling
    node1.innerHTML = noteText;
    node1.style.margin = randomize(randomMargin);
    node1.style.transform = randomize(randomRotate);
    node1.style.background = colorize(randomColor);
    node1.classList.add('new-note');
    node0.appendChild(node1);

    //mouse hover effect
    node0.addEventListener('mouseenter', () => {
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', () => {
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener("dblclick", () => {
        node0.remove();
    })

    //insert the note in the container
    container2.insertAdjacentElement("beforeend", node0);
    document.getElementById('note-text').value = '';
}


