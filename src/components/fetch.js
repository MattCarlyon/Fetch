import {useState, useEffect} from "react";

const initProfile = {
    publicRepos: null,
    name: null,
};

const Fetch = () => {
    //initalize our state variables
const [profile, setProfile] = useState(initProfile);

    //GET methods is for fetching some data
    //POST method send data to an endpoint, creating something
    //PUT method is used for updating something
    //DELETE method to remove something

// function to get data from our Github API
const getProfile = async () => {
    const reponse = await fetch("https://api.github.com/users/MattCarlyon");
    const json = await reponse.json();

    // update state with responce from Github API
    setProfile({
        publicRepos: json.public_repos, 
        name: json.name
    });

}

// Load Gihub profile from API when component mounts
useEffect(() => {
    getProfile();
    // only going to load one time when the page first mounts

}, [])

    return <div>
        <h1>Fetch data with useEffect</h1>
        <h3>{`Public Repositories: ${profile.publicRepos}`}</h3>
        <h3>{`Name: ${profile.name}`}</h3>
    
    </div>
};

export default Fetch;