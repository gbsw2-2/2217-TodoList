import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockTodo = [
    {
        id: 0,
        isDone: true,
        content: 'React 공부하기',
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: '빨래 널기',
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: true,
        content: '보안 공부하기',
        createdDate: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodos] = useState(mockTodo);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setTodos([newItem, ...todos]);
        idRef.current++;
    };

    const onUpdate = (targetId) => {
        setTodos(todos.map((it) => (it.id === targetId ? { ...it, isDone: !it.isDone } : it)));
    };

    const onDelete = (targetId) => {
        setTodos(todos.filter((it) => it.id !== targetId));
    };

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
