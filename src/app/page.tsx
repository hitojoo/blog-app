import { client } from "@/lib/microcms";

const Home = async () => {
  const data = await client.get({
    endpoint: "blog",
  });
  return <div>{data.contents[0].title}</div>;
};

export default Home;
