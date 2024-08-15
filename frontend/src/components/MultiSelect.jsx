import React, { useState } from 'react';
import Select, { components } from 'react-select'

const MultiSelectWithCreate = () => {
    const [options, setOptions] = useState([
        { value: 'html/css', label: 'html/css' },
        { value: 'react', label: 'react' },
        { value: 'tailwind', label: 'tailwind' },
    ]);
    const [selectedOptions, setSelectOptions] = useState([]);

    //updates the selected options when user selects or deselects an option
    const handleChange = (selected) => {
        setSelectOptions(selected);
    }

    //creates a new option and add it to both "options" and "selectedOptions" when the user enters a new value
    const handleCreate = (inputValue) => {
        const newOption = {
            // \W means "any non word character"
            // /  /g means "find globally", therefore /\W/g means that find globally any non word character
            value: inputValue.toLowerCase().replace(/\W/g, ''),
            label: inputValue,
        };

        // [...] is used to expand or copy elements from an iterable into a new array
        // In this case, it's used to create a new array that includes all existing items plus any new items you want to add. ex: create a new array by taking all elemtns from prevOptions then add newOption to the end of the array.
        // Naming doesn't matter but "prev" immediately communicates that these variables hold the previous state.
        setOptions((prevOptions) => [...prevOptions, newOption]);
        setSelectOptions((prevSelected) => [...prevSelected, newOption]);
    }

    const customComponents = {
        Option: (props) => {
            const {innerRef, innerProps, data} = props;
            return (
                <div ref={innerRef} {...innerProps}>
                    {data.label}
                </div>
            );
        },
        Menu: (props) => {
            return (
                <components.Menu {...props}>
                    {props.children}
                    <div
                        style={{
                            padding: '10px',
                            cursor: 'pointer',
                            color: '#007bff',
                            textAlign: 'center',
                        }}
                        onClick={()=> handleCreate(prompt('Enter new option:'))}
                    >
                        Add "{props.selectProps.inputValue}"
                    </div>
                </components.Menu>
            )
        }
    }

    return (
        <Select 
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            components={customComponents}
            placeholder="Select or type new option..."
        />
    )
};

export default MultiSelectWithCreate;


