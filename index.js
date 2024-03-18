async function main() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');

        if (!response.ok) {
            throw new Error('I AM NOT OKAY!');
        }

        let todo = await response.json();

        if (todo.id != 1) {
            throw new Error('Not the right todo!');
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