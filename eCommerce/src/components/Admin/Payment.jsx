import { useState } from "react";
import LayOut from "./LayOut";
const Payments = () => {
  const [payments, setPayments] = useState([
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
    {
      customerName: "Ayush",
      email: "abc@gmail.com",
      mobile: 923457632,
      amount: 5000,
      date: "6/28/2025",
    },
  ]);
  return (
    <LayOut>
      <div className="mt-[900px]">
        <h1 className="font-semibold text-lg mt-10 ml-8">Payment's</h1>
        <div className="mt-6 p-4">
          <table className="w-[1000px]">
            <thead>
              <tr className="bg-rose-600 text-white">
                <th className="p-3">Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="mt-[1000px]">
              {payments.map((item, index) => (
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
                  <td className="capitalize px-4 py-2">
                    <div className="flex justify-center gap-3 items-center">
                      <img
                        src="/images/avt2.jpg"
                        className="h-12 w-12 rounded-full text-center text-lg semibold"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="font-semibold">
                          {item.customerName}
                        </span>
                        <small className="text-zinc-800">{item.date}</small>
                      </div>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>₹ {item.amount.toLocaleString()}</td>
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
export default Payments;
  
