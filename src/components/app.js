import React from 'react';

const todos = [
    {
        task: "Eat Breakfast",
        isCompleted: true
    },
    {
        task: "Go to office",
        isCompleted: false
    }
];
import CreateTodo from './createTodo';
import TodosList from './todosList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }
    render() {
        return (
            <div>
                <h1>Hello React World</h1>
                <CreateTodo createTask={this.createTask.bind(this)} todos={this.state.todos} />
                <TodosList todos={this.state.todos}
                           toggleTask={this.toggleTask.bind(this)}
                           saveTask={this.saveTask.bind(this)}
                           deleteTask={this.deleteTask.bind(this)} />
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({todos: this.state.todos});
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}