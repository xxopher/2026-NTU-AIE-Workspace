// src/App.jsx
import { useState } from "react";
import { mockCustomers, generateCustomerId } from "./mockData";
import CustomerCard from "./components/CustomerCard";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", tags: [], status: "active" });
  
  // Challenge 1 & 2 State Hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("firstName");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: generateCustomerId(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: "",
      status: form.status,
      tags: form.tags,
      company: "",
      notes: "",
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setCustomers([...customers, newCustomer]);
    setForm({ firstName: "", lastName: "", email: "", tags: [], status: "active" });
  };

  // Challenge 3: Confirmation Dialog Before Delete
  const handleDeleteCustomer = (customerId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
    if (confirmDelete) {
      setCustomers(customers.filter((c) => c.id !== customerId));
    }
  };

  const handleTagToggle = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const ALL_TAGS = ["VIP", "Lead", "Referral"];
  
  // Challenge 1 Logic: Filter logic computed on render
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Challenge 2 Logic: Sort logic computed on the filtered copy
  const sortedCustomers = [...filteredCustomers].sort((a, b) =>
    (a[sortField] || "").localeCompare(b[sortField] || "")
  );
      
  return (
    <div className="simple-crm">
      <h1>Simple CRM</h1>

      <form onSubmit={handleAddCustomer} className="add-customer-form">
        <h3>Add New Customer</h3>
        <div className="form-field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" placeholder="e.g. Sarah" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" placeholder="e.g. Chen" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="e.g. sarah.chen@email.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label>Tags</label>
          <div className="tag-options">
            {ALL_TAGS.map((tag) => (
              <button key={tag} type="button" onClick={() => handleTagToggle(tag)} className={`tag-toggle${form.tags.includes(tag) ? " tag-toggle-active" : ""}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={form.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Add Customer</button>
      </form>

      <div className="customer-list">
        <h2>Customers ({filteredCustomers.length})</h2>

        {/* Challenge 1 Elements: Search Bar Input */}
        <div className="search-bar-container" style={{ marginBottom: "1rem" }}>
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "8px", width: "100%", maxWidth: "300px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {/* Challenge 2 Elements: Sorting Action Actions */}
        <div className="sort-buttons" style={{ marginBottom: "1rem" }}>
          <span style={{ marginRight: "10px" }}>Sort By:</span>
          <button 
            onClick={() => setSortField("firstName")} 
            style={{ marginRight: "5px", fontWeight: sortField === "firstName" ? "bold" : "normal" }}
          >
            First Name
          </button>
          <button 
            onClick={() => setSortField("email")}
            style={{ fontWeight: sortField === "email" ? "bold" : "normal" }}
          >
            Email
          </button>
        </div>

        {/* Final Render Target: Switch from filteredCustomers to sortedCustomers */}
        <div className="customers">
          {sortedCustomers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onDelete={handleDeleteCustomer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;