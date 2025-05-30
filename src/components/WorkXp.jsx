function WorkXp ({handleChange}) {

   /* function addExpirience () {

        const workContainer = document.getElementById("work");
        const newWorkDiv = document.createElement("div");
        newWorkDiv.innerHTML = `
         <label>Job Title
                <input type="text" name="jobTitle" id="jobTitle" />
            </label>
            <label>Company
                <input type="text" name="company" id="company" />
            </label>
            <label>Year
                <input type="text" name="year" id="year" />
            </label>
            <label>Position: 
                <input type="text" name="position" />
            </label>
            <label>Start date:
                <input type="date" name="startDate" />
            </label>
            <label>End date:
                <input type="date" name="endDate" />
            </label>
            <label>Job Description: <br />
                <textarea name="jobDescription" id="jobDescription" cols="30" rows="10"></textarea>
            </label>
             <hr />
        `;
        workContainer.appendChild(newWorkDiv);

    }*/

    return (
        <div className="workxp">
        <div id="work">
            <h2>WORK EXPERIENCE</h2>
            <hr />
            <label><i class="fa-solid fa-briefcase"></i> Job Title
                <input onChange={handleChange}  type="text" name="job" id="job" placeholder="Software Engineer"/>
            </label>
            <label><i class="fa-solid fa-building"></i> Company
                <input onChange={handleChange} type="text" name="company" id="company" placeholder="Apple"/>
            </label>
            <label><i class="fa-solid fa-calendar-days"></i> Year
                <input onChange={handleChange} type="text" name="year" id="year" placeholder="2000"/>
            </label>
            <label>Position: 
                <input onChange={handleChange} type="text" name="position" placeholder="CEO"/>
            </label>
            <label><i class="fa-solid fa-calendar-days"></i> Start date:
                <input onChange={handleChange} type="date" name="startDate" />
            </label>
            <label><i class="fa-solid fa-calendar-days"></i> End date:
                <input onChange={handleChange} type="text" name="endDate" />
            </label>
            <label>Job Description: <br />
                <textarea onChange={handleChange} name="jobDescription" id="jobDescription" cols="30" rows="10"></textarea>
            </label>
            <label></label>
        </div>
        {/*<button onClick={addExpirience} type="button">Add Work Expirience</button>*/}
        </div>
    )

}

export default WorkXp;