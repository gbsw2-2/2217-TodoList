import './TodoItem.css';

export default function TodoItem({ id, content, isDone, createdDate, onUpdate, onDelete }) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDeleteButton}>삭제</button>
            </div>
        </div>
    );
}
