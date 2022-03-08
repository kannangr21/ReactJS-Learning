const Enter = () => {
    return (
        <div className="add-item">
            <form className="add">
                <input type="text" placeholder="Enter the title" name="title" className="title" /><br />
                <input type="text" placeholder="Enter the content" name="content" className="content" /><br />
                <button type="submit">Add</button>
            </form>
        </div>
      );
}
 
export default Enter;