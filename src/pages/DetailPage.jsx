import axios from "axios";
import { useEffect, useState } from "react";
import Classes from "../styles/styles.module.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import { fetchPasswordDetail } from "../domain/api";

function DetailPage(){
    const { id } = useParams();
    const [password, setPassword] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetchPasswordDetail(id);
        setPassword(result);
      };
      fetchData();
    }, [id]);

    return password ? (
      <section className={Classes.detailcard}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Password</TableCell>
                  <TableCell align="right">Provider</TableCell>
                  <TableCell align="right">Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    {password.email}
                    </TableCell>
                    <TableCell align="right">{password.password}</TableCell>
                    <TableCell align="right">{password.provider}</TableCell>
                    <TableCell align="right">{password.category}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </section>
      ) : <p>Loading...</p>;
}

export default DetailPage;