function EducationDis ({educationData}) {
    return (
        <div id="education">
                    <h2>EDUCATION</h2>
                    <hr />
                    <p>Certification <span className="green">{educationData.degree} {educationData.year}</span></p>
                    <p>Studied at <span className="school">{educationData.school} ({educationData.year})</span></p>
                    
        </div>
    )
}

export default EducationDis;