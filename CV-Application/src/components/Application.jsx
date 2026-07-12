import './Application.css';
import locationIcon from '../assets/location.svg';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';

function Application({ personalInfo, educationInfo, experienceInfo, summary, books }) {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <h2 className="cv-name">{personalInfo.fullName}</h2>
                <div className="cv-contact">
                    <div className='cvIconName'>
                        <img src={emailIcon} className='cv-icon'/>
                        {personalInfo.email}
                    </div>
                    <div className='cvIconName'>
                        <img src={phoneIcon} className='cv-icon'/>
                        {personalInfo.phone}
                    </div>
                    <div className='cvIconName'>
                        <img src={locationIcon} className='cv-icon'/>
                        {personalInfo.address}
                    </div>
                </div>
            </header>

            <section className="cv-section">
                <h3>Education</h3>
                {educationInfo.map((edu, i) => (
                    edu.year && edu.institution && edu.degree && (
                    <div key={i} className="cv-entry">
                        <div className="cv-dates">{edu.year}</div>
                        <strong>{edu.degree} from {edu.institution}</strong><br />
                    </div>)
                ))}
            </section>

            {experienceInfo.length > 0 && (
                <section className="cv-section">
                    <h3>Experience</h3>
                    {experienceInfo.map((exp, i) => (
                        exp.startDate && exp.endDate && exp.position && exp.company && (
                        <div key={i} className="cv-entry">
                            <div className="cv-dates">{exp.startDate} - {exp.endDate}</div>
                            <strong>{exp.position} at {exp.company}</strong><br />
                        </div>)
                    ))}
                </section>
            )}
        </div>
    );
}

export default Application;
