import addButton from '../assets/add.svg';

function Experience({rows, setRows}) {

    const addRow = () => {
        setRows([...rows, {company:'', position: '', startDate: '', endDate: ''}]);
    }

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    }

    return(
        <div className='exp InfoBar'>
          <h2>Experience</h2>
          <button className='addButton' onClick={addRow}>
            <img src={addButton} alt="Add" />
          </button>
          <table>
            <thead>
                {
                    rows.length > 0 && (
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    )
                }
            </thead>
            <tbody>
                {rows.map((row, index)=> (
                    <tr key={index}>
                        <td>
                            <input type="text" className='company field' value={rows[index].company}
                                onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                            />
                        </td>
                        <td>
                            <input type="text" className='position field' value={rows[index].position}
                                onChange={(e) => handleInputChange(index, 'position', e.target.value)}
                            />
                        </td>
                        <td>
                            <input type="text" className='startDate field' value={rows[index].startDate}
                                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                            />
                        </td>
                        <td>
                            <input type="text" className='endDate field' value={rows[index].endDate}
                                onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default Experience;