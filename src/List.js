import { Link } from 'react-router-dom';

const BuildList = ({list}) => {
    return ( 
        <div className="item-list">
        {list.map((item) => (
        <div className="item" key={item.id}>
            <Link to={`/task/${item.id}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            </Link>
        </div>
        
    ))
    }</div> );
}
 
export default BuildList;