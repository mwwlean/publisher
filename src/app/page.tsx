import { supabase } from "./utils/supabase/clients";

export default async function Home() {
  //testing purposes
  const { data: users, error } = await supabase
    .from("users")
    .select("firstname");

  if (error) {
    console.error("Error fetching users:", error);
    return <div>Error loading users</div>;
  }

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.firstname}</li>
        ))}
      </ul>
    </main>
  );
}
