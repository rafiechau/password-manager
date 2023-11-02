import { Link, Navigate, useNavigate } from "react-router-dom";
import Classes from "../styles/styles.module.scss";
import CardItemBody from "./CardItemBody";
import Swal from "sweetalert2";
import axios from "axios";

function CardItem({fetchData, provider, email, password, category, id}){
    const navigate = useNavigate()

    const onDeleteAccountHandler = async (id) => {
        
        Swal.fire({
            title: 'Ingin Menghapus Akun ini?',
            text: "Apakah Kamu yakin?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#28a745',
            confirmButtonText: 'Iya',
            cancelButtonText: 'Tidak',
        }).then(async (result) => {
            if(result.isConfirmed){
                await axios.delete(`http://localhost:5000/passwords/${id}`);
                fetchData()
                Swal.fire({
                    icon: 'success',
                    title: 'Akun  sukses terhapus',
                    showConfirmButton: false,
                    timer: 4000,
                });
            }
        })
    }
    // console.log(onDelete)
    return(
        <div className={Classes.cardaccount}>
            <Link to={`/detail/${id}`}><CardItemBody provider={provider} email={email} password={password} category={category} id={id}/></Link>
            <div className={Classes.listbutton}>
                <Link to={`/detail/${id}`} >Detail</Link>
                <button onClick={() => onDeleteAccountHandler(id)}>Hapus</button>
                {/* <Link>Hapus</Link> */}
            </div>
        </div>
    )
}

export default CardItem;