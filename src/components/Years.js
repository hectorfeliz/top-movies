import React, {useState, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Years() {
    
    const handleChange = (event) => {
        const yr = event.target.yr;
        const currYear = new Date().getFullYear();

    };

   const getDropList = () => {
        const year = new Date().getFullYear();
        return (
            Array.from( new Array(50), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
        );
    };

    return (
      <div>
          <Select
            native
            onChange={handleChange}
            inputProps={{
              yr: '2020',
              id: 'year-select',
            }}>
            <option aria-label="None" value="" />
            {getDropList()}
            </Select>
      </div>
    )
 
}

export default Years;