import React from 'react';
import { IconButton } from "rsuite";
import {Search, Send} from '@rsuite/icons';
import Select from 'react-select'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function FAQs(){

        const questionlist=[
            {
                value:"YES, you can once your idea has been verified, then the collaborators or the investors will text you regarding your idea and you may get an opportunity to get an internship.",
                label:"Can we get internships through this website?"
            },
            {
                value:"YES, this website is for each and every individual (ed. students, organizations,institutes, users etc)",
                label:"Can any individual login to the website?"
            },
            {
                value:"ModernVate is an Incubation Digital Platform hosted completed on cloud.Software which will provide a platform for young students to showcase their ideas, show their skills, and get tools, to uplift their ideas through guidance of IT industrialists, business people, institutions, and organizations. Modernvate provides infinite services in real world, help different categories of users such as Businesses, Organizations, Institues, Students, etc. It supports and help in upskilling knowledge of individuals. Help in developing practical skills. It is scalling extensively day by day.",
                label:"What is Modernvate?"
            },
            {
                value:"NO,not necessary That it should be of technical field only , Ideas can be of any type",
                label:"Which ideas should we upload should it be technical field only?"
            },
            {
                value:"NO, you can not, you should just maintain one account, you can use forgot password option",
                label:"Can we create different accounts on one mailid?"
            },
            {
                value:"if you forget your password a new code will be generated and sent to your respective mailid.",
                label:"What if we forget our password while logging in?"
            },
            {
                value:"YES,you can login with the same account itself.",
                label:"Once we log out would we be able to login again with the same account?"
            },
            {
                value:"NO, its not compulsory but you may get an idea that how much knowledge do you have regarding that particular field.",
                label:"Is it compulsory to give the Maturity test?"
            },
            {
                value:"There are 3 sub-sections in the  maturity section they are coding, Incubation and professional skills",
                label:"What comes in the Maturity test section?"
            },
            {
                value:"No,you can give it ",
                label:"Is it necessary to know all the coding languages while giving maturity test?"
            },
            {
                value:"NO, the questions are basic.",
                label:"Will the questions be difficult in maturity test?"           
            },
            {
                value:"YES",
                label:"Will the maturity questions be easy?"
            },
            {
                value:"Questions will be based on MCQs",
                label:"Will the questions be MCQs or Theory based?"
            },
            {
                value:"Question will be based on programming languages",
                label:"What question will be there in the coding section?"
            },
            {
                value:"Questions will test your professional skills",
                label:"What question will be there in the Professional skills section?"
            },
            {
                value:"Total is of 150 marks",
                label:"What is the total score/marks of maturity test?"
            },
            {
                value:"Questions will test How much knowledge do you have of real word projects and organizations.",
                label:"What question will be there in the Incubation Knowledge section?"
            },
            {
                value:"Each sections passing criteria will be 35%",
                label:"What is the passing criteia of ech section?"
            },
            {
                value:"1.First you need to create an account 2.Then  your maturity questions 3.Upload your documents 4.And get verified",
                label:"What are the verification steps?"
            },
            {
                value:"Students belongs to collge students or universities students etc others should upload their document in personal identity only.",
                label:"Where should the faculty or company members upload their documents in personal or student identity?"
            },
            {
                value:"It will take a bit of time but when the organizers will view it and once they liked your idea it will be verified.",
                label:"When will our idea be verified?"
            },
            {
                value:"You may see two green ticks besides your profile",
                label:"When will we come to know that our idea is verified?"
            },
            {
                value:"YES, you can",
                label:"Can we post more than 1 idea at a time?"
            },
            {
                value:"YES, you can upload your basic ideas too.",
                label:"Can we upload our basic ideas also, just to get knowledge and learn more?"
            },
            {
                value:"The investors, organizers or any higher authority can collaborate.",
                label:"Who can collaborate with our idea?"
            },
            {
                value:"All the users of modernvate can like and comment but on the verified ideas only.",
                label:"Who can comment and like on our ideas?"
            },
            {
                value:"Uploading ideas will help you get an new opportunities or grow more",
                label:"What will uploading ideas will help out ?"
            },
            {
                value:"After clicking on the post section you may get an popup screen on side which indicates the departments or fields which you may select and get that related posts/ideas only.",
                label:"What if I am from the Civil department how will I get only civil regarding posts only?"
            },
            {
                value:"You may report us regarding the user.",
                label:"What if the collaborators behavior is not good and asks for money, what should we do?"
            },
            {
                value:"Current projects means which projects are going working live in the modernvate.",
                label:"What actually are current projects?"
            },
            {
                value:"NO, It's free of cost",
                label:"Are we supposed to pay for the sessions?"
            },
            {
                value:"NO, the sessions are available only in the online mode.",
                label:"Will the sessions be in offline mode?"
            },
            {
                value:"It's completely based on you ",
                label:"Are we supposed to maintain our To-Do list Daily or Weekly?"
            },
            {
                value:"YES,The points will be counted in MPoints.",
                label:"Will we get points of completing the tasks?"
            },
            {
                value:"YES, you can edit your profile as many times you want, you may get profile option in your dashboard.",
                label:"Can we edit our profile again if we have made any mistakes?"
            },
            {
                value:"Once you get a certificate regarding session completion you may get badges according to levels",
                label:"How can we earn Badges?"
            },
            {
                value:"There are many badges you can earn, but you get 2 badges once you complete your profile, and upload your first idea",
                label:"There are how many types of badges?"
            },
            {
                value:"MPoints means modernvate points it is based on your usage and how many tasks do you complete.",
                label:"What are Mponits?"
            },
        ];

        function customTheme(theme) {
            return {
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: '#F5F5F5',
                    primary: '#013BBA',
                },
            }
        }
        const customStyles = {
            menu: (provided, state) => ({
                ...provided,
                borderBottom: '1px dotted pink',
                color: 'grey',
                padding: 10,
                margin: 0,
                backgroundColor: '#D9E4FA',
                borderRadius: '20px 20px 20px 20px',
                rounded:2,
            }),
            control: (provided, style) => ({
                ...provided,
                backgroundColor: '#EAECF0',
                borderRadius: '20px 20px 20px 20px',
                border: '0px solid #7587A4',
                // : 'border: 2px solid blue',
            }),
        }

        const [result,ddlvalue]=useState(questionlist.label)
        const ddlHandler = e =>{
            ddlvalue(e.value);
        }
        const [ansDiv, setAns] = useState(false);
        const handleAns = e =>{
            setAns(current => !current);
        }

        const [isVisible, setVisible] = useState(false);
        const handleVisible= e =>{
            setVisible(current => !current);
        }
        const [isVisible1, setVisible1] = useState(false);
        const handleVisible1= e =>{
            setVisible1(current => !current);
        }

        const notify =() =>toast('Please try After few moments',{position: toast.POSITION.BOTTOM_CENTER, className: 'toast-red-bk ' } )
        
    return(
        
        
        // <div className="bg-cover mt-10  h-full">
            // <div className="flow-root flex-col items-end justify-center mx-2 sm:m-10 md:mx-8 lg:my-5 lg:mx-18 xl:mx-28 pt-2 md:py-10 w-auto h-auto">
                // <div className="float-center flex flex-col items-center lg:py-10  bg-white/30 rounded-[1rem] border-2 border-offwhite shadow-lg">
                    <div data-aos="fade-down" className="select-none flex flex-col">
                    <h1 className="text-sm md:text-base lg:text-2xl font-bold poppins mt-[1rem]  text-center text-[#0139B5]">GET YOUR QUESTIONS ANSWERED </h1>
                    <h1 className="text-xs md:text-sm  lg:text-lg font-bold poppins mt-[1rem] text-center text-black">Find answers to the Most Frequently Commonly asked questions below.</h1>
                    <div className="relative w-full px-4 mt-[1rem] ">
                        <div className='flex flex:justify-between items-center mt-[0rem] md:mx-8 lg:mx-40 px-0 h-[5rem]'>
                            {/* <input className=" rounded-[5rem] border-2px shadow-sm bg-[#EAECF0] w-full py-2 focus:outline-none focus:shadow-md focus:border-blue focus:border-b-2 focus:text-blue transition-colors mr-2" type="text" placeholder='  Search'></input> */}
                            
                            <Select options={questionlist} theme={customTheme} styles={customStyles}  required pattern="\S+.*" onChange={ddlHandler} className="w-full mr-2 text-xs md:text-sm lg:text-base" placeholder=" Search"></Select>
                        
                            <IconButton icon={<Search/>} onClick={handleAns} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[3rem] h-[2.5rem] pb-1 text-center justify-center font-extrabold font-poppins text-xl text-black bg-[#EAECF0] rounded-[5rem] hover:bg-lb hover:text-white "></IconButton>
                        
                        </div>
                    </div>
                    {ansDiv?(<div className=" w-full px-6 lg:px-24" /*style={{visibility: isVisible ? 'visible' : 'hidden'}}*/>
                        <div className="first-letter:float-center flex flex-col items-left w-full bg-white/30 rounded-[1rem] border-2 border-offwhite shadow-lg">
                        <h1 className="px-2 text-[0.8rem] md:text-[0.9rem] font-bold poppins text-[#0139B5]" >Ans: {result}</h1>
                        </div>
                    </div>):null}
                    
                    <div className="relative w-full flex justify-center md:px-4 ">
                        <div className="grid grid-cols-2 place-items-start  gap-4 sm:grid-cols-4 text-center mt-2 ">
                            
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 float-center flex flex-col items-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[13rem] lg:h-[13rem] bg-white/30 rounded-[2rem] lg:rounded-[3rem] border-2 border-offwhite shadow-lg">
                                <h1 className="font-bold poppins text-[#EF4A37] text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] mt-2 mx-2">
                                What is Idea?
                                </h1>
                                <br/>
                                <p className="font-poppins text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] lg:px-3 lg:font-semibold text-blue ">
                                    Idea is something that you think will be successful in future that requires support or guidance of someone.
                                </p>
                            </div>
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 float-center flex flex-col items-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[13rem] lg:h-[13rem] bg-white/30 rounded-[2rem] lg:rounded-[3rem] border-2 border-offwhite shadow-lg">
                                <h1 className="font-bold poppins text-[#EF4A37] text-[0.6rem] md:text-[0.8rem]  lg:text-[1rem] mt-2 mx-2">
                                    How to insert an Idea?
                                </h1>
                                <br/>
                                <p className="font-poppins text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] lg:px-3 lg:font-semibold text-blue">
                                    Idea is something that you think will be successful in future that requires support or guidance of someone.
                                </p>
                            </div>
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 float-center flex flex-col items-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[13rem] lg:h-[13rem] bg-white/30 rounded-[2rem]  lg:rounded-[3rem] border-2 border-offwhite shadow-lg">
                                <h1 className="font-bold poppins text-[#EF4A37] text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] mt-2 mx-2">
                                    How to comment on idea?
                                </h1>
                                <br/>
                                <p className="font-poppins text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] lg:px-3 lg:font-semibold text-blue">
                                    Idea is something that you think will be successful in future that requires support or guidance of someone.
                                </p>
                            </div>
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 float-center flex flex-col items-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[13rem] lg:h-[13rem] bg-white/30 rounded-[2rem] lg:rounded-[3rem] border-2 border-offwhite shadow-lg">
                                <h1 className="font-bold poppins text-[#EF4A37] text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] mt-2  mx-2">
                                    Who can upload the Idea?
                                </h1>
                                <br/>
                                <p className="font-poppins text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] lg:px-3 lg:font-semibold text-blue">
                                    Idea is something that you think will be successful in future that requires support or guidance of someone.
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className='flex flex:justify-between items-center mt-[0rem] md:mx-8 lg:mx-40 px-0 h-[5rem]'>
                            <input className="pl-2  text-xs md:text-sm lg:text-base rounded-[2rem] border-2px shadow-sm text-[#2b2a2a] bg-[#EAECF0] w-full py-2 focus:outline-none focus:shadow-md focus:border-blue focus:pl-4 focus:border-2 focus:text-blue transition-colors mr-2" text='[#2b2a2a]' type="text" placeholder='Ask your Question, We are here to solve it.....'></input>
                            <IconButton icon={<Send/>} onClick={notify} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  w-[3rem] h-[2.5rem] pb-1 text-center justify-center font-extrabold font-poppins text-xl text-black bg-[#EAECF0] rounded-[5rem] hover:bg-lb hover:text-white focus:outline-none "></IconButton> <ToastContainer/>
                        </div>
                        <div className=" flex w-[24rem] h-[3rem] flex:content-center" style={{visibility: isVisible1 ? 'visible' : 'hidden'}}>
                            <div className="first-letter:float-center flex flex-col items-left w-full h-[1rem] rounded-[5rem] bg-[#C8C8C8] shadow-9">
                                <h1 className="px-4 text-[0.7rem] font-bold poppins text-[#333333]" >Please try after few moments....</h1>
                            </div>
                        </div>
                    </div>
                // </div>
            // </div>
        // </div> 
        
    )
}

export default FAQs;