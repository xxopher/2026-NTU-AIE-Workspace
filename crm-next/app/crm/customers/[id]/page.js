export default async function CustomerDetailPage({ params }) {
  const { id } = await params;
  return (
    <main>
      <h1>Customer {id}</h1>
    </main>
  );
}
