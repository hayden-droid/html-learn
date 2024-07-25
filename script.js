function checkCode() {
    const codeBox = document.getElementById('codeBox').value.trim();
    const output = document.getElementById('output');
    const result = document.getElementById('result');

    // Task: <p>Hello, World!</p>
    const correctCode = '<p>Hello, World!</p>';

    if (codeBox === correctCode) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. Try again!';
        result.style.color = 'red';
    }

    // Display the entered code
    output.innerHTML = `<h2>Output:</h2>${codeBox}`;
}