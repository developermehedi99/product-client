import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const product = useLoaderData();
    const {name,chef,_id, supplier,taste,category,details,photo,} = product;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updateProducts = {
          name,
          chef,
          supplier,
          taste,
          category,
          details,
          photo,
        };
        console.log(updateProducts);
    
        // sent to server
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateProducts)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Success!',
                text: 'Product update is successfully done',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            }
          });
      };
    return (
        <div>
        <h1>Update Products.....</h1>
  
        <form onSubmit={handleUpdate}>
          {/* row input */}
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Type name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">chef</span>
              </div>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="chef"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="supplier"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="taste"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Type name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="details"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo url"
                className="input input-bordered md:w-full w-full max-w-xs"
              />
            </label>
          </div>
          <input
            className="btn mt-4 block  btn-neutral"
            type="submit"
            value="Update products"
          />
        </form>
      </div>
    );
};

export default UpdateProducts;