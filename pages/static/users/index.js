const index = (props) => {
  return (
    <div>
      USer page (SSG)
      {props.data.users.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
};
export const getStaticProps = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  return {
    props: {
      data,
    },
  };
};
export default index;
