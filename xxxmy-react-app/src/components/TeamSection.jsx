import Card from "./Card";
import UserCard from "./UserCard";

function TeamSection() {
  return (
    <Card title="Our Team">
      <div className="team-grid">
        <UserCard
          name="Alice Johnson"
          email="alice@example.com"
          age={25}
          isOnline={true}
        />
        <UserCard
          name="Bob Smith"
          email="bob@example.com"
          age={30}
          isOnline={false}
        />
        <UserCard
          name="Charlie Brown"
          email="charlie@example.com"
          age={28}
          isOnline={true}
        />
      </div>
    </Card>
  );
}

export default TeamSection;