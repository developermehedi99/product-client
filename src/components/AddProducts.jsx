import Swal from "sweetalert2";

const AddProducts = () => {
  const handleProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newProducts = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newProducts);

    // sent to server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProducts)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          Swal.fire({
            title: 'Success!',
            text: 'Product added is successfully done',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      });
  };
  return (
    <div>
      <h1>Add new Products.....</h1>

      <form onSubmit={handleProduct}>
        {/* row input */}
        <div className="flex gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
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
              placeholder="chef"
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
              placeholder="photo url"
              className="input input-bordered md:w-full w-full max-w-xs"
            />
          </label>
        </div>
        <input
          className="btn mt-4 block  btn-neutral"
          type="submit"
          value="Add new products"
        />
      </form>
    </div>
  );
};

export default AddProducts;
