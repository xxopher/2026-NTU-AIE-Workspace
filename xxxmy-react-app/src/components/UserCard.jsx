function UserCard({ name, email, age, status = "Offline" }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default UserCard;