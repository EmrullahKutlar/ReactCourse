import PropTypes from 'prop-types';

export const Person = (props) => {
  return (
    <div className="col-12">
      <h4>Name: {props.name} </h4>
      <h4>Email: {props.email} </h4>
      <h4>Age: {props.age} </h4>
      <h4>This person {props.isMarried ? "is" : "is not"} MARRIED </h4>
      {props.friends.map((friend) => {
        return <h4 key={friend}> {friend} </h4>;
      })}
    </div>
  );
};

Person.propTypes ={
    name: PropTypes.string,
    email:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
    friends:PropTypes.arrayOf(PropTypes.string)
}