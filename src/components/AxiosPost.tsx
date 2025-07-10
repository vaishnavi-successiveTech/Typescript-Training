// app/components/AxiosPost.tsx
import axios from "axios";
import { AxiosUser } from "@/types";

const AxiosPost = async () => {
  const response = await axios.get<AxiosUser[]>("https://jsonplaceholder.typicode.com/users");
  const list = response.data;

  return (
    <div>
      <h1>Fetch Name using Axios (Server Component)</h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosPost;

