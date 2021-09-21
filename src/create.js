const Create = () => {
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                />
                <lable>Blog body:</lable>
                <textarea
                    required>
                </textarea>
                <label>Blog author:</label>
                <select>
                    <option value="DeeKay">DeeKay</option>
                    <option value="TeeJay">TeeJay</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create;