import React, { ReactElement } from 'react';

const Profile = () => {
  return <div>Profile</div>;
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default Profile;
