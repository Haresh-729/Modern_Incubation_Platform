import React from 'react';
import Select from 'react-select';

const Search = (props) => {
    
    const options = [
        { value: "incubation", label: "Incubation" },
        { value: "programming", label: "Programming" },
        { value: "professional", label: "Professional" },
        { value: "civil", label: "Civil" },
        { value: "electrical", label: "Electrical" },
        { value: "hardware", label: "Hardware" },
        { value: "other", label: "Other" },
      ];


    

  return (
    <React.Fragment>
        <div className="pt-5 w-full h-full flex flex-col items-center justify-start">
        <Select
              placeholder="Enter Idea Category"
              className=" mt-5 w-4/5 sm:w-1/2 border shadow-sm rounded-md border-[#7587A4] bg-white text-base font-normal text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
              onChange={(event) => {
                props.pushData(event.value);
              }}
              options={options}
              id="cat"
              name="cat"
              required
              autoComplete="on"
            />
    </div>
    {/* {value} */}
    </React.Fragment>
    
  );
}

export default Search;
