import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct;
    const handleEmail = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted`)
                    setDeletingProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-400">Are you sure to delete? Product:  <span className='text-red-600'> {name}</span></h3>
                    <p class="py-4">You've been selected a product that you are going to delete???</p>
                    <div class="modal-action">
                        <button onClick={() => handleEmail()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;