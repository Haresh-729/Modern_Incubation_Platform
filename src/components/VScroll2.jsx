import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function VScroll2() {
  
  const [isVerified,setIsVerified] = useState(false);

  const APIKEY = "ReVB97084HRXc4NDXWyF8552VzkC1GS1GvnMGRwwCIr07Xv6RKnzh1OJFc4d";
  const [selectedAadharFile, setSelectedAadharFile] = useState(null);
  const [selectedPanFile, setSelectedPanFile] = useState(null);


  const handleAadharChange = (e) => {
    setSelectedAadharFile(e.target.files[0]);
  }
  const handlePanChange = (e) => {
    setSelectedPanFile(e.target.files[0]);
  }

  const handleAadharSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedAadharFile", selectedAadharFile);
    try {
      await axios({
        method: "post",
        url: "https://nationalapi.docsumo.com/api/v1/national/extract/?side=back&save_data=false&return_redacted=false&fraud_check=true",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Api-Key": APIKEY
        }
      }).then((res) => {
        if(res.data.messege==""){
          setIsVerified(true)
          alert('Aadhar uploaded sucessfully')
        }
        console.log(res.data)
      })
      console.log("Done")
    } catch (error) {
      alert('something went wrong!')
      console.log(error)
    }
    setSelectedAadharFile(null);
  }

  const handlePanSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedPanFile", selectedPanFile);
    try {
      await axios({
        method: "post",
        url: "https://panapi.docsumo.com/api/v1/pan/extract/?save_data=false&fraud_check=true",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Api-Key": APIKEY
        }
      }).then((res) => {
        if(res.data.messege==""){
          setIsVerified(true)
          alert('PAN uploaded sucessfully')
        }
        console.log(res.data)
      })
      console.log("Done")
    } catch (error) {
      alert('something went wrong!')
      console.log(error)
    }
    setSelectedPanFile(null);
  }
  // console.log(selectedAadharFile);
  
  return (
    <div className=" bg-opacity-30 rounded-3xl mt-[3rem] md:mt-[0rem] ">
      <div className="flex">
        <div className="flex items-end">
          <img
            src="https://i.ibb.co/828jFbL/image.png"
            alt="documents uploading"
            className="px-6 pt-4 lg:h-32"
          />
          <img
            src="https://i.ibb.co/6bfP2Yn/not-verified.png"
            alt="not-verified"
            className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-8 w-auto lg:ml-6 pl-10 lg:mt-2 absolute drop-shadow-xl"
          />
        </div>
        <span className="lg:text-xl text-blue font-poppins tracking-wide font-bold pt-3 flex items-center">
          DOCUMENTS UPLOADING
        </span>
      </div>
      <div className="pb-8">
        {/* row 1 */}
        <div className="flex bg-white bg-opacity-50 rounded-3xl shadow-sm shadow-gray-500 lg:mx-10 lg:px-6 lg:mt-8 lg:pb-6 md:mx-10 md:px-6 md:mt-8 md:pb-6 sm:mx-8 sm:px-4 sm:mt-6 sm:pb-4 xl:mx-10 xl:px-6 xl:mt-8 xl:pb-6 mx-4 px-2 mt-4 pb-4">
          {/* text div */}
          <div>
            <h2 className="text-gray-500 font-bold lg:text-lg md:text-lg xl:text-xl  sm:text-md text-sm lg:py-6 xl:py-6 md:py-4 sm:py-4 py-2">
              PERSONAL IDENTITY
            </h2>
            <div className="lg:text-md xl:text-lg md:text-md sm:text-sm text-[0.8rem] text-gray-600 lg:pt-2">
              Upload your original personal identity proof such as AAADHAR Card,
              PAN Card, Driving License, etc.
            </div>
            <div className="lg:pt-8 md:pt-8 xl:pt-8 sm:pt-6 pt-4 flex flex-wrap mx-auto justify-center items-center">

              <input type="file" id="File" name="File" accept="images/*" onChange={handleAadharChange} className="font-bold bg-white rounded-full lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-blue hover:border-blue border-4"
              />
              <button onClick={handleAadharSubmit} className="font-bold bg-blue rounded-full lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                Upload
              </button>

              <div className="flex">
                <img
                  src="https://i.ibb.co/PM3r16J/image.png"
                  alt="info"
                  className="lg:h-8 md:h-8 sm:h-6 xl:h-8 h-6 w-auto pl-4"
                />
                <div className="text-gray-500 lg:text-sm xl:text-base md:text-sm sm:text-xs text-[0.6rem] pl-2">
                  Must be in .jpg format <hr /> File size must be between 350kb
                  - 2Mb
                </div>
              </div>
            </div>
          </div>

          {/* image div */}
          <div className="hidden justify-center items-center lg:flex sm:flex md:flex xl:flex ">
            <img
              src="https://i.ibb.co/VDC8d0w/personal-identity.png "
              alt="personal identity"
              className="h-auto w-auto lg:px-10"
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="flex  bg-white bg-opacity-50 rounded-3xl shadow-sm shadow-gray-500 lg:mx-10 lg:px-6 lg:mt-8 lg:pb-6 md:mx-10 md:px-6 md:mt-8 md:pb-6 sm:mx-8 sm:px-4 sm:mt-6 sm:pb-4 xl:mx-10 xl:px-6 xl:mt-8 xl:pb-6 mx-4 px-2 mt-4 pb-4">
          {/* text div */}
          <div>
            <h2 className="text-gray-500 font-bold lg:text-lg md:text-lg xl:text-xl sm:text-md text-sm lg:py-6 xl:py-6 md:py-4 sm:py-4 py-2 mb-">
              STUDENT IDENTITY
            </h2>
            <div className="lg:text-md xl:text-lg md:text-md sm:text-sm text-[0.8rem] text-gray-600 lg:pt-2">
              Upload your original School/College/University Identity Card, etc.
              In case not there, upload your last passed examination certificate
            </div>
            <div className="lg:pt-8 md:pt-8 xl:pt-8 sm:pt-6 pt-4 flex flex-wrap mx-auto justify-center items-center">
              <input type="file" id="File" name="File" accept="images/*" onChange={handlePanChange} className="font-bold bg-white rounded-full lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-blue hover:border-blue border-4"
              />
              <button onClick={handlePanSubmit} className="font-bold bg-blue rounded-full lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                Upload
              </button>

              <div className="flex">
                <img
                  src="https://i.ibb.co/PM3r16J/image.png"
                  alt="info"
                  className="lg:h-8 md:h-8 sm:h-6 xl:h-8 h-6 w-auto pl-4"
                />
                <div className="text-gray-500 lg:text-sm xl:text-base md:text-sm sm:text-xs text-[0.6rem] pl-2">
                  Must be in .jpg format <hr /> File size must be between 350kb
                  - 2Mb
                </div>
              </div>
            </div>
          </div>

          {/* image div */}
          <div className="hidden justify-center items-center lg:flex sm:flex md:flex xl:flex ">
            <img
              src="https://i.ibb.co/82T69td/seminar.png"
              alt="seminar"
              className="h-auto w-auto lg:px-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VScroll2;
