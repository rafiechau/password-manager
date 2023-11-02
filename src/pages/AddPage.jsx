import Classes from "../styles/styles.module.scss";
import FormAdd from "../components/FormAdd";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { postNewPassword } from "../domain/api";

function AddPage(){
    const navigate = useNavigate();

      const onAddAccountHandler = async (formData) => {
        await postNewPassword(formData)
        Swal.fire({
            title: 'Akun berhasil ditambahkan',
            showConfirmButton: false,
            icon: 'success',
          })
        navigate('/');
     }

      return (
        <section className={Classes.formadd}>
            <h2>Tambah Akun</h2>
            <FormAdd addAccount={onAddAccountHandler}/>
        </section>
        
      );
}

export default AddPage;