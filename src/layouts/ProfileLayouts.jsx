import React from 'react';
import ProfileSideMenu from '../Pages/shared/ProfileSideMenu/ProfileSideMenu';
import { Outlet } from 'react-router-dom';

const ProfileLayouts = () => {
    return (
        <div className='lg:grid grid-cols-profile mx-10 mt-5'>
            <ProfileSideMenu></ProfileSideMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default ProfileLayouts;