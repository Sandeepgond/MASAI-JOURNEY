// import module from "./userDetails.module.css"

const UserDetails = (props)=>{
   const {avatar,first_name,last_name,address,karma,followers,posts}=props
  
  
    return (
      <>
        <div className="UserDetails" data-testid="user-container">
          {/* user image */}
         <img src={props.avatar} alt="icon" />
          <div>
            <div className="firstname">
              <h3 data-testid="user-fname" >{props.first_name}</h3>
              <h3 data-testid="user-lname">{props.last_name}</h3>
            </div>
            
            <div>
              <p data-testid="user-address">{props.address}</p>
            </div>
          </div>
          <div>
            <h3 data-testid="user-karma">{props.karma}</h3>
            Karma
          </div>
          <div>
            <h3 data-testid="user-followers">{props.followers}</h3>
            Followers
          </div>
          <div>
            <h3 data-testid="user-posts">{props.posts}</h3>
            Post
          </div>
          <button data-testid="follow-btn">{!props.is_following ? "Follow" : "Unfollow"}</button>
        </div>
      </>
    );
  };
  export default UserDetails;