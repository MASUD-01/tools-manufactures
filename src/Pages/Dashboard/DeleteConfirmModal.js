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
                    toast.success(`Product: ${name} is deleted`)
                    setDeletingProduct(null)
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are you sure to delete? Product:  <span className='text-red-600'> {name}</span></h3>
                    <p className="py-4">You've been selected a product that you are going to delete???</p>
                    <div className="modal-action">
                        <button onClick={() => handleEmail()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;