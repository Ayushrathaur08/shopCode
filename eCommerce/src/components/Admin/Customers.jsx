import { useState } from "react";
import LayOut from "./LayOut";
const Customers = () => {
  const [customer, setCustomer] = useState([
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      date: "6/28/2025",
    },
  ]);
  return (
    <LayOut>
      <div className="mt-[50px]">
        <h1 className="font-semibold text-lg">Customer's</h1>
        <div className="mt-6 p-4">
          <table className="w-[1000px]">
            <thead>
              <tr className="bg-rose-600 text-white ">
                <th>Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="mt-[1000px]">
              {customer.map((item, index) => (
                <tr
                  key={index}
                  className="text-center"
                  style={{
                    background:
                      (index + 1) % 2 == 0
                        ? "oklch(87.2% 0.01 258.338)"
                        : "red-600",
                  }}
                >
                  <td className="capitalize">{item.customerName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayOut>
  );
};
export default Customers;
