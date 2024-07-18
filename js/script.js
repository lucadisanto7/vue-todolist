// app-milestone3.js
const { createApp, reactive } = Vue;

const App = {
    setup() {
        const state = reactive({
            todos: [
                { id: 1, text: 'Fare la spesa', done: false },
                { id: 2, text: 'Pagare le bollette', done: true },
                { id: 3, text: 'Fare il bucato', done: false }
            ],
            newTodoText: ''
        });

        const removeTodo = (index) => {
            state.todos.splice(index, 1);
        };

        const addTodo = () => {
            if (state.newTodoText.trim() !== '') {
                const newTodo = {
                    id: state.todos.length + 1,
                    text: state.newTodoText,
                    done: false
                };
                state.todos.push(newTodo);
                state.newTodoText = '';
            }
        };

        return {
            state,
            removeTodo,
            addTodo
        };
    }
};

createApp(App).mount('#app');
