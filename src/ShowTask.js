import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const DisplayTask = () => {
    const { id } = useParams();
    const { data: task, loading, err } = useFetch('http://localhost:8000/tasks/'+id);
    return ( 
        <div className="task">
        <h2>Task - {id}</h2>
        { loading && <div>Loading...</div> }
        { err && <div>{ err }</div> }
        { task && (
            <article>
                <h2>{ task.title }</h2>
                <p>{ task.content }</p>
            </article>
        )}
        </div>
    );
}
 
export default DisplayTask;