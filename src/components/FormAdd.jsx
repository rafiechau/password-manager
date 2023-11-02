import { TextField} from "@mui/material";

import Classes from "../styles/styles.module.scss";

import { useState } from "react";




function FormAdd({addAccount}){
    const [formData, setFormData] = useState({
        provider: '',
        email: '',
        password: '',
        category: 'Work'
      });
      const [error, setError] = useState({});

    const onSubmitEventHandler = (e) => {
        e.preventDefault();
        const validationErrors = {};
        
        if (!formData.provider) validationErrors.provider = "Provider is required.";
        if (!formData.email) validationErrors.email = "Email is required.";
        if (!formData.password || formData.password.length < 6) 
                validationErrors.password = "Password is required and should be at least 6 characters long.";
        
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
                    return;
        }
            addAccount(formData);
        }

    return(
        <>
        <form onSubmit={onSubmitEventHandler} className={Classes.form}>
        <div className={Classes.formgroup}>
            <input 
                type="text"
                placeholder="Provider"
                onChange={e => setFormData({...formData, provider: e.target.value})}
                value={formData.provider}
                required
                />
        </div>
        {error.provider && <span className={Classes.formerror}>{error.provider}</span>}
        <div className={Classes.formgroup}>
            <input 
                type="email"
                placeholder="Email"
                onChange={e => setFormData({...formData, email: e.target.value})}
                value={formData.email}
                required
                />
        </div>
        {error.email && <span>{error.email}</span>}
        <div className={Classes.formgroup}>
            <input 
                type="password"
                placeholder="password"
                onChange={e => setFormData({...formData, password: e.target.value})}
                    value={formData.password}
                required
                />
        </div>
        <div className={Classes.formgroup}>
        <select
            value={formData.category}
            onChange={e => setFormData({ ...formData, category: e.target.value })}
        >
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Personal">Personal</option>
        </select>
        </div>
              
        {error.password && <span>{error.password}</span>}
        
        <button className={Classes.btnaddpage} type="submit">Tambah Akun</button>
        </form>
           
            
        
        </>
        
        
    )
}

export default FormAdd