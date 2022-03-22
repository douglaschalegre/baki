import React from 'react';

import {
  ProfileContainer,
  LeftSide,
  ProfilePicture,
  ProfileName,
  RightSide,
  Notifications,
} from './styles';
import headerImg from '../../assets/header.png';

export function ProfileHeader() {
  return (
    <ProfileContainer>
      <LeftSide>
        <ProfilePicture></ProfilePicture>
        <ProfileName></ProfileName>
      </LeftSide>
      <RightSide>
        <Notifications></Notifications>
      </RightSide>
    </ProfileContainer>
  );
}
