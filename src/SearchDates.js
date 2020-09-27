import React, {useState} from 'react'
import './SearchDates.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range'
import { People as PeopleIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SearchDates = () => {
    const [startDate, setStartDate] = useState(new Date()) 
    const [endDate, setEndDate] = useState(new Date())
    const history = useHistory();

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const handleSelect = ranges =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
      <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
          Number of Guest(s) <PeopleIcon />
        </h2>
        <input type="number" min={1} defaultValue={2} />
        <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
      </div>
    );
}

export default SearchDates
