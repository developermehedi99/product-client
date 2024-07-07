import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCurd = ({ product,products, setProducts }) => {
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then(data => {
            console.log(data)
          });
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
          const remaning = products.filter(pro => pro._id !== _id);
          setProducts(remaning)
        }
      }
    });
  };
  const { name, _id, chef, supplier, taste, category, details, photo } =
    product;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-60" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p>Chef:{chef}</p>
        <h2>Taste:{taste}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">details</button>
          <Link to={`/updateProduct/${_id}`}
          className="btn bg-orange-500 border-none btn-primary">
            edit
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 border-none btn-primary"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCurd;
