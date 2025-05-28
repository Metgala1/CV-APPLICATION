function WorkDis ({workInfo}) {
    return (
        <div id="work">
                    <h2>WORK EXPERIENCE</h2>
                    <hr />
                    <p>Job Title: <span className="green">{workInfo.job}</span></p>
                    <p>Company: <span className="green">{workInfo.company}</span></p>
                    <p>Year: <span className="green">{workInfo.year}</span></p>
                    <p>Position: <span className="green">{workInfo.position}</span></p>
                    <p>Start date: <span className="green">{workInfo.startDate}</span></p>
                    <p>End date: <span className="green">{workInfo.endDate}</span></p>
                    <p>Description: <br /><span className="green">{workInfo.jobDescription}</span> </p>
        </div>
    )
}

export default WorkDis;