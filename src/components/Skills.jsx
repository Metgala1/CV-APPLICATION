function Skills ({handleChange}) {
   


    return (
        <div className="skill">
            <h2>Skills</h2>
            <hr />
            <label>Enter Skills
                <input onChange={handleChange} id="mySkill" type="text" name="mySkill"/>
            </label>
        </div>
    )
}

export default Skills;