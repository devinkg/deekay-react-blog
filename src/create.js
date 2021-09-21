import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('DeeKay');

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); }}
                />
                <lable>Blog body:</lable>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value); }}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value); }}
                >
                    <option value="DeeKay">DeeKay</option>
                    <option value="TeeJay">TeeJay</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create;