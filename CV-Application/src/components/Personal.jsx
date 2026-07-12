
function Personal({ personalInfo, setPersonalInfo }) {
    const handleInputChange = (field, value) => {
        setPersonalInfo({
            ...personalInfo,
            [field]: value
        });
    }

    return(
        <div className='personal InfoBar'>
          <h2>Personal Information</h2>

          <label>Full Name: </label>
          <input type="text" className='name field' 
            onChange={(e) => (handleInputChange('fullName', e.target.value))}/> 
        
          <label>Email: </label>
          <input type="text" className='email field'
            onChange={(e) => (handleInputChange('email', e.target.value))}/> 

          <label>Phone: </label>
          <input type="text" className='phone field'
            onChange={(e) => (handleInputChange('phone', e.target.value))}/> 

          <label>Address: </label>
          <input type="text" className='address field'
            onChange={(e) => (handleInputChange('address', e.target.value))}/> 
        </div>
    )
}

export default Personal;