const tasks = [
    { description: 'Create a paragraph with the text "Hello, World!"', code: '<p>Hello, World!</p>' },
    { description: 'Create a heading with the text "Welcome to HTML"', code: '<h1>Welcome to HTML</h1>' },
    { description: 'Create an unordered list with three items: Apple, Banana, Cherry', code: '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>' },
    { description: 'Create an ordered list with three items: First, Second, Third', code: '<ol><li>First</li><li>Second</li><li>Third</li></ol>' }
];

let currentTaskIndex = 0;

function updateTask() {
    const task = tasks[currentTaskIndex];
    document.getElementById('taskDescription').innerHTML = `<strong>Task:</strong> ${task.description}`;
    document.getElementById('codeBox').value = task.code;
    document.getElementById('result').textContent = '';
    document.getElementById('output').innerHTML = '';
}

function checkCode() {
    const codeBox = document.getElementById('codeBox').value.trim();
    const output = document.getElementById('output');
    const result = document.getElementById('result');
    const currentTask = tasks[currentTaskIndex];

    if (codeBox === currentTask.code) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. Try again!';
        result.style.color = 'red';
    }

    // Display the entered code
    output.innerHTML = `<h2>Output:</h2>${codeBox}`;

    // Move to the next task
    currentTaskIndex++;
    if (currentTaskIndex < tasks.length) {
        setTimeout(updateTask, 2000);  // Update task after 2 seconds
    } else {
        setTimeout(() => {
            document.getElementById('taskDescription').innerHTML = '<strong>All tasks completed!</strong>';
            document.getElementById('codeBox').style.display = 'none';
            document.querySelector('button').style.display = 'none';
        }, 2000);
    }
}

// Initialize the first task
updateTask();
