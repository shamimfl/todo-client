import React from 'react';

const Logon = () => {
    return (
        <div>
            <h2>Login</h2>
            <form >
                <input type="email" name='' className='block p-2 rounded-lg' placeholder='Enter your Email' />
                <input type="password" name='' className='block p-2 rounded-lg' placeholder='Enter your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Logon;