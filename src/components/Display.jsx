
import ContactDis from "./ContactDis";
import EducationDis from "./EducationDIs";
import ExtraDis from "./ExtraDis";
import ProfileDis from "./ProfileDIs";
import SkillDis from "./SkillDis";
import WorkDis from "./WorkDis";
import '../styles/display.css'

function Display ({selectedPicture, extra, skill, data, education, work}) {
    const info = data;
    const educationData = education;
    const workInfo = work;
    const skil = skill;
    return(
        <div id="display">
            <ContactDis selectedPicture={selectedPicture} info={info}/>
            <ProfileDis info={info} educationData={educationData}/>
            <EducationDis educationData={educationData}/>
            <WorkDis workInfo={workInfo} info={info} educationData={educationData}/>
            <SkillDis skil={skil}/>
            <ExtraDis extra={extra}/>
            
        </div>
    )
}

export default Display;