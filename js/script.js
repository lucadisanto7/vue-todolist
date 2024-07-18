// app-milestone2.js
const { createApp, reactive } = Vue;

const App = {
    setup() {
        const state = reactive({
            todos: [
                { id: 1, text: 'Fare la spesa', done: false },
                { id: 2, text: 'Pagare le bollette', done: true },
                { id: 3, text: 'Fare il bucato', done: false }
            ]
        });

        const removeTodo = (index) => {
            state.todos.splice(index, 1);
        };

        return {
            state,
            removeTodo
        };
    }
};

createApp(App).mount('#app');
