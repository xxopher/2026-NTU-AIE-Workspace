import Link from 'next/link';

export const metadata = {
  title: 'Login | Simple CRM',
  description: 'Sign in to access your Simple CRM workspace.',
};

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem 1rem',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 420,
          border: '1px solid #d9d9d9',
          borderRadius: 12,
          padding: '1.5rem',
          background: '#fff',
        }}
      >
        <h1 style={{ margin: 0, marginBottom: '0.5rem' }}>Sign in</h1>
        <p style={{ marginTop: 0, marginBottom: '1rem', color: '#555' }}>
          This is a placeholder login page.
        </p>

        <form>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '0.65rem 0.75rem',
              borderRadius: 8,
              border: '1px solid #bbb',
              marginBottom: 12,
            }}
          />

          <label
            htmlFor="password"
            style={{ display: 'block', marginBottom: 6 }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            style={{
              width: '100%',
              padding: '0.65rem 0.75rem',
              borderRadius: 8,
              border: '1px solid #bbb',
              marginBottom: 16,
            }}
          />

          <button
            type="button"
            style={{
              width: '100%',
              padding: '0.7rem 0.9rem',
              borderRadius: 8,
              border: 0,
              cursor: 'pointer',
            }}
          >
            Sign in
          </button>
        </form>

        <p style={{ marginTop: '1rem', marginBottom: 0 }}>
          Continue without auth: <Link href="/crm">Open CRM</Link>
        </p>
      </section>
    </main>
  );
}
