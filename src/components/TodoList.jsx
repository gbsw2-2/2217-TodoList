import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
            <div className="list_wrapper">
                {getSearchResult().map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
}
