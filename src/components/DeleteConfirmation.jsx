import React from 'react';
import axios from 'axios';
import { deletePassword } from '../domain/api';

function DeleteConfirmation({ id, onClose }) {
    const handleDelete = () => {
        deletePassword(id)
            .then(() => {
                alert("Account deleted successfully!");
                onClose(true);
            })
            .catch(error => console.error("Error deleting account:", error));
    }

    return (
        <div className="delete-modal">
            <p>Are you sure you want to delete this account?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => onClose(false)}>Cancel</button>
        </div>
    );
}

export default DeleteConfirmation;
