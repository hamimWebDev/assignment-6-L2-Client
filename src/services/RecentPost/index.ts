import { envConfig } from "@/src/config/env.Config";

const CurrentPost = async () => {
  const res = await fetch(
    `${envConfig.backend_url}/recipe?limit=15&sort=-createdAt`
  );
  const data = await res.json();
  return data?.data;
};

export default CurrentPost;
