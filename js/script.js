const { createApp } = Vue;

const App = {
    data() {
        return {
            todos: [
                { id: 1, text: 'Fare la spesa', done: false },
                { id: 2, text: 'Pagare le bollette', done: true },
                { id: 3, text: 'Fare il bucato', done: false }
            ],
            newTodoText: ''
        };
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                const newTodo = {
                    id: this.todos.length + 1,
                    text: this.newTodoText,
                    done: false
                };
                this.todos.push(newTodo);
                this.newTodoText = '';
            }
        }
    },
    template: `
        <div>
            <ul>
                <li v-for="(todo, index) in todos" :key="todo.id">
                    <span :style="{ 'text-decoration': todo.done ? 'line-through' : 'none' }">
                        {{ todo.text }}
                    </span>
                    <button @click="removeTodo(index)">X</button>
                </li>
            </ul>
            <input type="text" v-model="newTodoText">
            <button @click="addTodo">Aggiungi</button>
        </div>
    `
};

createApp(App).mount('#app');
