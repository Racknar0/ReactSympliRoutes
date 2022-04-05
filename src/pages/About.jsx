import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const About = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>About</h1>


             {user && (
                <h2>
                    {user.data.first_name} {user.data.last_name}
                </h2>
            )} 
        </div>
    );
};

export default About;
