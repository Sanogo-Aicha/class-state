import React from "react";

const Profil=({personne})=>{
const {fullname,bio,image,profession}=personne

 return(
    <div>
        <div><img src={image} alt="phaa" /></div>
        <h1>{fullname}</h1>
        <h1>{profession}</h1>
        <p>{bio}</p>

    </div>
 );
}

export default Profil;