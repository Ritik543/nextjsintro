import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "../../styles/user.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const index = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log("data", data);

  //   const [Users, setUsers] = useState([]);
  //   const [users, setusers] = useState([]);

  //   async function fetchdata() {
  //     const data = await fetch(`https://dummyjson.com/users`);
  //     const output = await data.json();
  //     // console.log(output);
  //     // setUsers(output);
  //     setusers(output);
  //     console.log(users);
  //   }
  //   useEffect(() => {
  //     fetchdata();
  //     // console.log(output);
  //   }, []);

  if (error) {
    return <h1>Error happend</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data.users[0].firstName);

  return (
    <div className={styles.text}>
      {data.users &&
        data &&
        data.users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <div> {user.firstName} </div>
          </Link> // use swr has advantage like caching and lightweight realtime working
        ))}
    </div>
  );
};

export default index;
