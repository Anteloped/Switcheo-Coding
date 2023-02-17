import { useState } from "react";

const startPayment = async ({ setError, ether, addr }) => {
  // code for payment
};

export default function App() {
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      ether: data.get("ether"),
      addr: data.get("address")
    });
  };

  return (
    <form className="m-10" onSubmit={handleSubmit}>
      <div className="w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-teal-100">
        <div className="mt-4 p-4">
          <h1 className="text-xl text-gray-700 text-center font-mono">
            Send ETH
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="address"
                className="input input-bordered input-primary w-full focus:ring focus:outline-none rounded"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="number"
                className="input input-bordered input-secondary w-full focus:ring focus:outline-none rounded"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </div>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-accent w-full focus:ring focus:outline-none">
            Pay now
          </button>
        </footer>
      </div>
    </form>
  );
}
