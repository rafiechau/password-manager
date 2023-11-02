import axios from "axios";
import Classes from "../styles/styles.module.scss";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchCategoryPasswords } from "../domain/api";


function CategoryPage({category}){
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchCategoryPasswords(category);
            setData(result);
        };
        fetchData();
    }, [category]);


    return (
        <div className={Classes.containercategory}>
            <h1>{category} Accounts</h1>
            <section className={Classes.listcategory}>
    
 
            {data.map(item => (
                <Card key={item.id} sx={{ minWidth: 275, gap: 50, width: { xs: '90%', md: '275px' }}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.category}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.provider}
                    </Typography>
                    <Typography variant="body2">
                     {item.password}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            ))}
            </section>
        </div>
    );
}
export default CategoryPage

/* <div key={item.id}>
                    {item.provider} - {item.email}
                </div> */