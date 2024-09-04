import './TodoEditor.css';
import { useState, useRef } from 'react';

export default function TodoEditor({ onCreate }) {
    const inputRef = useRef();
    const [content, setContent] = useState('');

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    };

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 </h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeydown}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}
