
import Classes from "../styles/styles.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem";
import AddIcon from '@mui/icons-material/Add';
import { fetchPasswords } from "../domain/api";


function HomePage(){
    const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const data = await fetchPasswords();
        setData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Atau Anda bisa menampilkan pesan kesalahan ke pengguna
    }
    };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={Classes.listaccount}>
        <div>
            {data.map(item => (
                <CardItem key={item.id} fetchData={fetchData} {...item}  />
                
            ))}

      
            
            <Link to={'/add'} className={Classes.btnadd}>+</Link>
        </div>
    </section>
    
  );
}

export default HomePage;

{/* <div key={item.id}>
                {item.provider} - {item.email} - {item.category}
                <Link to={`/detail/${item.id}`}>Detail</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div> */}