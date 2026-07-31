import Link from 'next/link';

export default async function CustomersPage() {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch(`${process.env.API_BASE_URL}/customers`);
  const customers = await res.json();

  return (
    <main>
      <h1>Customers</h1>
      <ul>
        {customers.map(c => (
          <li key={c.id}>
            <Link href={`/crm/customers/${c.id}`}>{c.firstName} {c.lastName}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}