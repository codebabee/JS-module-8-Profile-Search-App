import React from 'react';
import { useState } from 'react';

const ProfileSearchBar = ({profile}) => {

  // define a state variable search keyword using the use state hook and 
  // define setsearchkeyword to update the state.

 // create a new array of item value e.g name by calling filter() on the array 


const [searchKeyword, setSearchKeyword] = useState (" ");

const filteredProfile = profile.filter((profile) => {
    const fullName = `${profile.firstName} ${profile.lastName}`;
    return fullName.toUpperCase().includes(searchKeyword.toUpperCase)});
// each item in the array needs to have a unique key identifier


return ( 
    <div>
    <input type="text" placeholder='Search by name...' value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} />
<ul>
    {filteredProfile.map((profile) => (
        <li key={profile.id}>
            <img src={profile.picture} alt={profile.firstname} />
<h2>{`${profile.title} ${profile.firstName} ${profile.lastName}`}</h2>
        </li>
    ))}
</ul></div>

    );
};

export default ProfileSearchBar;