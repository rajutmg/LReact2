import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
// const User = ({ match }) => {
//   return (
//     <>
//       <h1>This is User {match.params.fname} page</h1>
//     </>
//   );
// };

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  return (
    <>
      <h1>
        This is User {fname} {lname} page
      </h1>
      <h2>My current location is {location.pathname}</h2>
      {location.pathname === `/user/Raju/Tamang` ? (
        <button
          onClick={() => {
            // history.goBack();
            history.push('/');
          }}
        >
          home Page
        </button>
      ) : null}
    </>
  );
};

export default User;
