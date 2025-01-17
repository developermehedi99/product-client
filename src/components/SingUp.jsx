import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SingUp = () => {
  const  {createUser} = useContext(AuthContext);

    const handleSingUp=event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

        createUser(email,password)
        .then(result =>{
          console.log(result)
        })
        .then(error =>{
          console.error(error)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SingUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          
          <form onSubmit={handleSingUp}
           className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
