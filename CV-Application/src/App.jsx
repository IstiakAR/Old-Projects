import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Application from './components/Application'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const [educationRows, setEducationRows] = useState([]);
  const [experienceRows, setExperienceRows] = useState([]);

  return (
    <>
      <div className='infoBar'>
        <Personal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <Education rows={educationRows} setRows={setEducationRows}/>
        <Experience rows={experienceRows} setRows={setExperienceRows}/>
      </div>
      <Application personalInfo={personalInfo} educationInfo={educationRows} experienceInfo={experienceRows}/>
    </>
  )
}

export default App
