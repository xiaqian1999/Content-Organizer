import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from "axios";
import { toast } from 'react-toastify';

const MultiSelectWithCreate = ({selectedSkills, setSelectedSkills}) => {
    const url = "http://localhost:4001";

    const [skills, setSkills] = useState([]);
    
    // fetch the skills from the DB
    const fetchSkills = async () => {
        try {
            const response = await axios.get(`${url}/api/skill/skills`);
            const skillData = response.data.data.map(skill => ({
                value: skill.value,
                label: skill.value
            }))
            setSkills(skillData);
        } catch (error) {
            toast.error("Error of fetching skill")
            console.log(error)
        }
    }

    //creates a new option and add it to both "options" and "selectedOptions" when the user enters a new value
    const createSkills = async (inputValue) => {
        const newSkill = {
            // \W means "any non word character"
            // /  /g means "find globally", therefore /\W/g means that find globally any non word character
            value: inputValue.toLowerCase().replace(/\W/g, '_'),
            label: inputValue,
        };

        // [...] is used to expand or copy elements from an iterable into a new array
        // In this case, it's used to create a new array that includes all existing items plus any new items you want to add. ex: create a new array by taking all elemtns from prevOptions then add newSkill to the end of the array.
        // Naming doesn't matter but "prev" immediately communicates that these variables hold the previous state.
        try {
            const response = await axios.post(`${url}/api/skill/skills`, newSkill);
            const createdSkill = response.data
            setSkills((prevSkills) => [...prevSkills, createdSkill]);
            setSelectedSkills((prevSkills) => [...prevSkills, createdSkill]);
        } catch (error) {
            toast.error("Error of fetching skill")
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSkills();
    })

    return (
        <CreatableSelect 
            isMulti 
            options={skills} 
            value={selectedSkills} 
            onChange={setSelectedSkills} 
            onCreateOption={createSkills}
            placeholder="Select or add skill" />
    )
};

export default MultiSelectWithCreate;


