import { useState } from 'react';
import addButton from '../assets/add.svg';

function Education({rows, setRows}) {

    const addRow = () => {
        setRows([...rows, { institution: '', degree: '', grade: '', year: '' }]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    }

    return (
        <div className='edu InfoBar'>
            <h2>Education</h2>
            <button className='addButton' onClick={addRow}>
                <img src={addButton} alt="Add" />
            </button>
            <table>
                <thead>
                    {
                        rows.length !== 0 && (
                            <tr>
                                <th>Institution</th>
                                <th>Degree</th>
                                <th>Grade</th>
                                <th>Year</th>
                            </tr>
                        )
                    }
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td><input type="text" className='institution field' value={row.institution} 
                                onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                            /></td>
                            <td><input type="text" className='degree field' value={row.degree} 
                                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                            /></td>
                            <td><input type="text" className='grade field' value={row.grade} 
                                onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
                            /></td>
                            <td><input type="text" className='year field' value={row.year} 
                                onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                            /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Education;
