async function main() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let todo = await response.json();

        if (todo === 'Not Found') {
            throw new Error('Todo not found');
        }

        console.log(todo);
    } catch (error) {
        console.log(error);
    }
}

main();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error));

let myText = `{"data": "Hello World"}`;
let myObject = JSON.parse(myText);
console.log(myObject);