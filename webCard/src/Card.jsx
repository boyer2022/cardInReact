import profilePic from './assets/image3.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Matt Boyer</h2>
            <p className="card-text">I am a recent graduate from Minneapolis <br />
            Technical College for Computer Software Design, <br />
            Web Design & Frontend Development, <br />
            and I am a gold prospector.</p>

        </div>
    );
    
}

export default Card