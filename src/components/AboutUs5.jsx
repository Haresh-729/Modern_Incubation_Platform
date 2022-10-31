function AboutUs5() {
    return (
    <section className="flex">
        <div className="w-screen md:min-h-auto" >
            <div className="mx-auto pt-4 md:pt-10 h-full w-auto">
                <h1 className="text-xl text-center font-bold lg:font-extrabold text-[#0139B5] tracking-tight md:text-3xl">
                    <span className="block xl:inline">Founders of ModernVate</span> </h1>
                <div className="md:flex justify-end items-right">
                    <div className="md:grid md:grid-rows-2 gap-10 md:ml-10 md:mr-10">
                        <div className="md:mt-10 mt-6 md:flex md:justify-left md:items-center">
                            <span className="md:text-xl md:text-left mx-20 text-center md:ml-0  font-bold text-[#EF4A37]">MR. ANIKET MHALA
                                <p className="md:text-lg md:text-left text-center font-semibold md:font-bold text-black">Global Technology Expert & Innovation Leader</p>
                                <div className="flex flex-col md:block   items-center justify-center">
                                    <img
                                        className="w-[4rem] my-4 md:h-32 md:w-32 md:mr-8 md:mt-4  md:float-left "
                                        src="https://i.ibb.co/Tkm6kdB/pfp.png"
                                        alt="Profile" />
                                    <p className="md:text-lg text-sm font-normal px-4 md:px-0 md:pt-6 md:ml-10 md:font-bold text-slate-500 md:tracking-wide md:leading-relaxed md:mr-10">A Strategic & Achievement-oriented
                                        passionate leader, offering 27 years of rich
                                        & multi-functional experience with strong technology & business development
                                        skills and broad multinational experience in delivering IT solutions across
                                        the enterprise by leveraging deep Technology, Innovation, IT advisory
                                        and Hands-On experience.</p>
                                </div>
                            </span>
                        </div>
                        <div className="md:mt-10 mt-9 md:flex md:justify-left md:items-center ">
                            <span className="md:text-xl md:text-right mx-20 md:ml-0 font-bold text-[#EF4A37]">MR. RANDOM EXPOSES
                                <p className="md:text-lg md:text-right text-center font-semibold md:font-bold text-black">Global Technology Expert & Innovation Leader</p>
                                <div className="mt-5 md:flex md:justify-left md:items-center">
                                    <p className="md:text-lg text-sm font-normal px-4 md:px-0 md:font-bold text-slate-500 md:tracking-wide md:leading-relaxed md:mr-10">A Strategic & Achievement-oriented
                                        passionate leader, offering 27 years of rich
                                        & multi-functional experience with strong technology & business development
                                        skills and broad multinational experience in delivering IT solutions across
                                        the enterprise by leveraging deep Technology, Innovation, IT advisory
                                        and Hands-On experience.</p>
                                    <img
                                        className="object-scale-down mt-0 h-32 w-32 ml-5 md:block hidden"
                                        src="https://i.ibb.co/Tkm6kdB/pfp.png"
                                        alt="Profile" />
                                </div>
                            </span>
                        </div>
                    </div>
                    <img
                        className="mr-10 h-96 w-96 sm:h-full md:h-full hidden "
                        src="https://i.ibb.co/515yxzB/Founder1.png"
                        alt="IT Expert"
                    />
                </div>


                {/* Icons */}

                <div className=" justify-end pt-20 gap-2 pr-10 hidden">
                    <a href="https://www.instagram.com/drastic_coder/" className="">
                        <img
                            alt="instagram"
                            src="https://i.ibb.co/BwmjsLB/instagram.png"
                            className=" transition ease-in-out   hover:scale-75  duration-1"
                        ></img>
                        <span className="sr-only">instagram page</span>
                    </a>
                    <a href="https://www.instagram.com/drastic_coder/">
                        <img
                            alt="Facebook"
                            src="https://i.ibb.co/c8nkskK/facebook.png"
                            className="transition ease-in-out   hover:scale-75  duration-10"
                            ></img>
                        <span className="sr-only">facebook page</span>
                    </a>
                    <a href="https://www.instagram.com/drastic_coder/">
                        <img
                            alt="telegram"
                            src="https://i.ibb.co/T8YTjmF/telegram.png"
                            className="transition ease-in-out   hover:scale-75  duration-10"
                        ></img>
                        <span className="sr-only">telegram page</span>
                    </a>
                    <a href="https://www.instagram.com/drastic_coder/">
                        <img
                            alt="in"
                            src="https://i.ibb.co/YZBFK1h/in.png"
                            className="transition ease-in-out   hover:scale-75  duration-10"
                        ></img>
                        <span className="sr-only">in page</span>
                    </a>
                    <a href="https://www.instagram.com/drastic_coder/">
                        <img
                            alt="twitter"
                            src="https://i.ibb.co/d0mY9Zp/twitter.png"
                            className="transition ease-in-out hover:scale-75  duration-10"
                        ></img>
                        <span className="sr-only">twitter page</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs5;