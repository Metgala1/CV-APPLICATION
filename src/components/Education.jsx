function Education ({handleChange, edu}) {
    return (
        <div className="eduction">
            <h2>Eduation</h2>
            <hr />
            <label>Qualification:
                <select onChange={handleChange} value={edu.degree} name="degree" id="degree">
                    <option value="">-- Select Qualification --</option>
                   <option value="BA_Ed">Bachelor of Arts in Education (B.A. Ed.)</option>
                   <option value="BS_Ed">Bachelor of Science in Education (B.Sc. Ed.)</option>
                   <option value="MAT">Master of Arts in Teaching (M.A.T.)</option>
                   <option value="MEd">Master of Education (M.Ed.)</option>
                   <option value="EdD">Doctor of Education (Ed.D.)</option>
                   <option value="PhD_Ed">Doctor of Philosophy in Education (Ph.D.)</option>
                   <option value="PrimaryCert">Primary/Elementary Teacher Certification</option>
                   <option value="SecondaryCert">Secondary Teacher Certification</option>
                   <option value="SpecialEdCert">Special Education Certification</option>
                   <option value="EarlyChildhoodCert">Early Childhood Education Certification</option>
                   <option value="TEFL">TEFL/TESOL Certification</option>
                   <option value="ReadingSpec">Reading Specialist Endorsement</option>
                   <option value="MathSpec">Mathematics Specialist Endorsement</option>
                   <option value="ScienceSpec">Science Specialist Endorsement</option>
                   <option value="EdLeadershipCert">Educational Leadership Certification/Licensure</option>
                   <option value="CurriculumSpec">Curriculum and Instruction Specialist</option>
                   <option value="EdTechSpec">Educational Technology Specialist</option>
                   <option value="GuidanceCounselorCert">Guidance Counselor Certification</option>
                   <option value="SchoolPsychCert">School Psychologist Certification</option>
                   <option value="NationalBoardCert">National Board Certification</option>
                   <option value="WorkshopCert">Specific Workshop/Training Certificates</option>
                </select>
            </label>
            <label><i class="fa-solid fa-school"></i> School 
                <input onChange={handleChange} id="school" type="text" name="school" placeholder="Havard" />
            </label>
            <label><i class="fa-solid fa-calendar-days"></i> Year 
                <input onChange={handleChange} type="text" name="year" id="year" placeholder="2000"/>
            </label>
           </div>
    )
}

export default Education;