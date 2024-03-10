import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Userinfo = () => {
  const router = useRouter();

  const id = router.query.id;
  console.log(id);
  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);
  console.log("userinfo", data);

  if (error) return <h1>error occured </h1>;

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <div>{data.firstName}</div>
      <div>{data.email}</div>
      <div>{data.birthDate}</div>
      <div>{data.gender}</div>
    </div>
  );
};

export default Userinfo;
