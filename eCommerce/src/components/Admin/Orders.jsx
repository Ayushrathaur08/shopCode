import { useState } from 'react';
import LayOut from './LayOut'
const Products = () => {
    const [orders, setOrder] = useState([
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
      {
        orderId: "sknsdkw123",
        customerName: "Ayush",
        email: "abc@gmail.com",
        mobile: 923457632,
        products: "Samsung",
        amount: 100000,
        date: "6/28/2025",
        status: "pending",
      },
    ]);
    return (
      <LayOut>
        <div className='mt-[900px]'>
          <h1 className="font-semibold text-lg">Order's</h1>
          <div className="mt-6">
            <table className="w-[1000px]">
              <thead>
                <tr className="bg-rose-600 text-white ">
                  <th className="py-4">Order Id</th>
                  <th>Customer's Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className='mt-[1000px]'>
                {orders.map((item, index) => (
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
                    <td className="py-4">{item.orderId}</td>
                    <td className="capitalize">{item.customerName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td className="capitalize">{item.products}</td>
                    <td>₹{item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    <td className="capitalize">
                      <select className="bg-slate-600 border p-1 border-white">
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="returned">Returned</option>
                        <option value="dispatched">Dispatched</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </LayOut>
    );
}
export default Products