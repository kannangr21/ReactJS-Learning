
import List from "./List";
const Home = ({list}) => {

    // const str = 'This is the homepage of my react app';
    // const newstr = 'Paragraph is changing see';
    // const [para, setPara] = useState(str);
    // const changePara = () => {
    //     setPara((para === str) ? newstr : str);
    // }

    return ( 
        <div className="homepage">
           <List list = {list}/>
        </div>
     );
}
 
export default Home;