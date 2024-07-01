const MyName = (props) => {
  return (
    <>
      <h1>My Name is {props.name}.</h1>
      <h2>I am {props.age} Years Old.</h2>
      {props.children}
    </>
  );
};

export default MyName;
