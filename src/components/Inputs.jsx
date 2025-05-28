import { useState } from "react";
import "../styles/inputs.css"
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import WorkXp from "./WorkXp";
import Extra from "./Extra";

function Inputs({selectedPicture, setSelectedPicture, extra, setExtra, skill, setSkill, work, setWork,data, setData,education, setEducation, setSubmitted}) {
    
    const [input, setInput] = useState(data);
    const [edu, setEdu] = useState(education);
    const [wor, setWor] = useState(work)
    const [skil, setSkil] = useState(skill)
    const [ex, setEx] = useState({extra})
    const [step, setStep] = useState(0)

    function handleChange (event) {
        const {name, value} = event.target;
        setInput((prevState) => ({...prevState, [name]: value}))
        setEdu((prevState) => ({...prevState, [name]: value}))
        setWor((prevState) => ({...prevState, [name]: value}))
        setSkil((prevState) => ({...prevState, [name]: value}))
        setEx((prevState) => ({...prevState, [name]: value}))

    }

    function incrementStep() {
        setStep((prevState) => (prevState + 1))
    }
    function decrementStep () {
        setStep((prevState) => (prevState - 1))
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        setData(input)
        setEducation(edu)
        setSubmitted(true)
        setWork(wor)
        setSkill(skil)
        setExtra(ex)
        
    }
    function handlePictureChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    

    return (
        <div className="input-div">
            <form onSubmit={handleSubmit}>
            {step === 0 && <Contact handlePictureChange={handlePictureChange} handleChange={handleChange} input={input}/>}
            {step === 1 && <Education handleChange={handleChange} edu={edu} setEdu={setEdu}/>}
            {step === 2 && <WorkXp handleChange={handleChange} />}
            {step === 3 && <Skills  handleChange={handleChange} />}
            {step ===4 && <Extra handleChnage={handleChange}/>}
           {step === 4 && <button type="submit" >Submit</button>}
           {step <= 3 &&<button className="next" onClick={incrementStep} type="button">Next</button>}
           {step > 0 && <button className="prev" onClick={decrementStep} type="button">Previous</button>}

           </form>

        </div>
    )
}

export default Inputs;