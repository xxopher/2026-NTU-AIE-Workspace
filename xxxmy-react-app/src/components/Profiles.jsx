function Profile({
  name, // string
  age, // number
  isActive, // boolean
  hobbies, // array
  address, // object
  onClick, // function
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <p>
        Location: {address.city}, {address.country}
      </p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <button onClick={onClick}>View Profile</button>
    </div>
  );
}

// Usage
<Profile
  name="Alice"
  age={25}
  isActive={true}
  hobbies={["reading", "coding", "hiking"]}
  address={{ city: "Tokyo", country: "Japan" }}
  onClick={() => alert("Profile clicked!")}
/>;

export default Profile;