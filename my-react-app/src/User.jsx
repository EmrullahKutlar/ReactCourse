const User = (props) => {
  return (
    <h1>
      {props.number} - {props.name}, {props.age}
    </h1>
  );
};

export default User;
