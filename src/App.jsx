import { useState } from 'react'
import Display from './components/Display'
import Inputs from './components/Inputs'
import './app.css'
import './styles/interface.css'

function App() {
  const [data, setData] = useState({phone: '', email: '', address: '', website: '', name: ''});
  const [education, setEducation] = useState({degree: "", school: "", year: null})
  const [submitted, setSubmitted]= useState(false);
  const [work, setWork] = useState({company: '', position: '', startDate: '', endDate: '', job: '', year: '', jobDescription: ''})
  const [skill, setSkill] = useState('');
  const [extra, setExtra] = useState({extraCert: '', extraLang: ''})
  const[selectedPicture, setSelectedPicture] = useState(null);

  
  return (
    <div id='interface'>
      <div className="header">
        {submitted === false && <h1>CV GENERATOR</h1>}
        {submitted === true && <h1>Your CV</h1>}
      </div>
    <div id='app'>
     {!submitted && (<Inputs selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture} extra={extra} setExtra={setExtra} skill={skill} setSkill={setSkill} work={work} setWork={setWork} 
     setData={setData} setSubmitted={setSubmitted} data={data} setEducation={setEducation} education={education}/>)} 

     {submitted && (<Display selectedPicture={selectedPicture} extra={extra} skill={skill} work={work} data={data} setSubmitted={setSubmitted} education={education}/>)}  
    </div>
    </div>
    
  )
}

export default App
