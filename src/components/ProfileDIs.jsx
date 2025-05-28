function ProfileDis ({info , educationData}) {
    return (
        <div id="profile">
                    <h2>PROFILE</h2>
                    <hr />
                    <p><span className="green">{info.name}</span> is a highly accomplished and result oriented
                        professional with over 4 years of experience in
                        the field of Information Technology. Studied at <span className="green">{educationData.school}</span>. lives in <span className="green">{info.address}</span>. Proven
                        expertise in managing and delivering complex IT
                        projects on time and within budget. Strong
                        leadership skills with a track record of building
                        and leading high-performing teams. Excellent
                        communication and interpersonal skills with the
                        ability to work effectively with clients and
                        stakeholders at all levels.
                    </p>

                </div>
    )
}
export default ProfileDis;