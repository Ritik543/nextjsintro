const users = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {" "}
        {props.data.    users.map((user) => (
          <div key={user.id}>{user.firstName}</div>
        ))}
      </h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  return {
    props: {
      data,
    },
  };
};

export default users;
