// src/App.jsx
import { mockCustomers } from "./mockData";

function App() {
  return (
    <div>
      <h1>Simple CRM</h1>

      <div>
        <h2>Customers ({mockCustomers.length})</h2>
        {mockCustomers.map((customer) => (
          <div key={customer.id}>
            <p>
              {customer.firstName} {customer.lastName}
            </p>
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;