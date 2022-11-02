import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IconButton } from "rsuite";
import { Gear } from "@rsuite/icons";

import FAQs from "./components/FAQs";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4, AboutUs5 } from "./components";
import CurrentProjects from "./components/CurrentProjects";
import Tasks from "./components/Tasks";
import Sessions1 from "./components/Sessions1";
import Sessions2 from "./components/Sessions2";
import Maturity1 from "./components/Maturity1";
import Quiz from "./components/Quiz";

import { useState } from "react";
import { auth, db } from "./firebase";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HomeFooter from "./components/HomeFooter";
import Register from "./components/Register";
import Login from "./components/Login";
import Slogens from "./components/Slogens";
import KnowMore1 from "./components/KnowMore1";
import KnowMore2 from "./components/KnowMore2";
import KnowMore3 from "./components/KnowMore3";
import KnowMore4 from "./components/KnowMore4";
import KnowMore5 from "./components/KnowMore5";
import LogOutSuccessful from "./components/LogOutSuccessful";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import Interactions from "./components/Interactions";
import ForgotPass from "./components/ForgotPass";
import ProfileEdit from "./components/ProfileEdit";
import Actions from "./components/Actions";
import VScroll1 from "./components/VScroll1";
import VScroll2 from "./components/VScroll2";
import IdeaReview from "./components/IdeaReview";
import IdeaPost from "./components/IdeaPost";
import ContactUs from "./components/ContactUs";
import Std from "./components/Std";

import Aos from "aos";
import "aos/dist/aos.css";

import PNF from "./components/PNF";
import { Oval } from "react-loader-spinner";
import LoginRegister from "./components/LoginRegister";
import Chat from "./components/Chat";

import VerifyIdeas from "./components/VerifyIdeas";
import Verification from "./components/Verification";
import { collection, orderBy, onSnapshot, doc } from "firebase/firestore";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  Dashboard,
  Profile,
} from "./components";

import { Calendar, ToDoList, Pie } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  // Manas Code Start

  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [category, setCategory] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const userId = user?.uid;

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        setUser(userAuth);
        if (userId) {
          onSnapshot(doc(db, "users", userId), (doc) => {
            setCategory(doc.data().category);
            setPhotoUrl(doc.data().photoURL);
            console.log(doc.data());
          });
        }
      } else {
        // user logged out
        setUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, [userId]);

  useEffect(() => {
    onSnapshot(
      collection(db, "ideas"),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setIdeas(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
  }, []);

  return (
    <BrowserRouter>
      {user && user.displayName ? (
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                {/* <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#03c9d7] bg-[#fdfdfd9a] text-3xl  p-3 hover:drop-shadow-xl hover:bg-light-gray">
                  <FiSettings />
                </button> */}

                <IconButton
                  icon={<Gear />}
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[3.6rem] h-[3.6rem] pb-1 text-center justify-center font-extrabold font-poppins text-3xl font-bold text-[#03c9d7] rounded-[5rem] hover:text-white "
                ></IconButton>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-[#B7F0FF] ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2  "
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* dashboard  */}
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* profile */}
                  <Route path="/profile" element={<Profile />} />

                  {/* apps  */}
                  <Route path="/To-Do-List" element={<Std />} />

                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/FAQs" element={<FAQs />} />
                  <Route
                    path="/Current-Projects"
                    element={<CurrentProjects />}
                  />
                  <Route path="/Tasks" element={<Tasks />} />
                  <Route path="/Session" element={<Sessions1 />} />
                  <Route path="/Session-Details" element={<Sessions2 />} />
                  <Route path="/Maturity" element={<Maturity1 />} />
                  <Route path="/Quiz" element={<Quiz />} />
                  <Route path="/Profile-Edit" element={<ProfileEdit />} />
                  <Route path="/Idea-Review" element={<IdeaReview />} />
                  <Route path="/Contact-us" element={<ContactUs />} />
                  <Route path="/Post" element={<IdeaPost />} />
                  <Route path="/Switchi" element={<ToDoList />} />
                  <Route
                    path="/Verification"
                    element={[<Verification />, <VScroll1 />, <VScroll2 />]}
                  />
                  <Route
                    path="/Idea-Upload"
                    element={
                      <IdeaForm
                        username={user.displayName}
                        category={category}
                        photoUrl={photoUrl}
                      />
                    }
                  />
                  <Route
                    path="/Know-More"
                    element={[
                      <KnowMore1 />,
                      <KnowMore2 />,
                      <KnowMore3 />,
                      <KnowMore4 />,
                      <knowMore5 />,
                    ]}
                  />

                  <Route
                    path="/About-Us"
                    element={[
                      <AboutUs1 />,
                      <AboutUs2 />,
                      <AboutUs3 />,
                      <AboutUs4 />,
                      <AboutUs5 />,
                    ]}
                  />

                  {/* charts  */}
                  <Route path="/pie" element={<Pie />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      ) : !user ? (
        <>
          <Routes>
            <Route
              path="/"
              element={[
                <Nav />,
                <HeroSection />,
                <Slogens />,
                <Features />,
                <Footer />,
              ]}
            />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/login" element={[<Nav />, <Login />]} />
            <Route path="/register" element={[<Nav />, <Register />]} />
            <Route path="*" element={<PNF />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/landing-page"
              element={[
                <Nav />,
                <HeroSection />,
                <Slogens />,
                <Features />,
                <Footer />,
              ]}
            />
            <Route
              path="/about"
              element={[
                <Nav />,
                <AboutUs1 />,
                <AboutUs2 />,
                <AboutUs3 />,
                <AboutUs4 />,
                <AboutUs5 />,
              ]}
            />
            <Route path="/service" element={[<AboutUs3 />]} />
            <Route
              path="/know-more"
              element={[
                <KnowMore1 />,
                <KnowMore2 />,
                <KnowMore3 />,
                <KnowMore4 />,
                <KnowMore5 />,
              ]}
            />
            <Route path="/Logout" element={<LogOutSuccessful />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );

  // return (

  //   <div className="bg-cover bg-[url('https://i.ibb.co/Smq2X7B/background.png')]">
  //     <BrowserRouter>
  //       <Routes>
  //         <Route
  //           path="/landing-page"
  //           element={[
  //             <Nav />,
  //             <HeroSection />,
  //             <Slogens />,
  //             <Features />,
  //             <Footer />,
  //           ]}
  //         />
  //         <Route
  //           path="/about"
  //           element={[
  //             <Nav />,
  //             <AboutUs1 />,
  //             <AboutUs2 />,
  //             <AboutUs3 />,
  //             <AboutUs4 />,
  //             <AboutUs5 />,
  //           ]}
  //         />
  //         <Route path="/service" element={[<Nav />, <AboutUs3 />]} />
  //         <Route
  //           path="/know-more"
  //           element={[
  //             <Nav />,
  //             <KnowMore1 />,
  //             <KnowMore2 />,
  //             <KnowMore3 />,
  //             <KnowMore4 />,
  //             <KnowMore5 />,
  //           ]}
  //         />
  //         {user && user.displayName ? (
  //           <>
  //             <Route
  //               path="/"
  //               element={
  //                 <div className={currentMode === "Dark" ? "dark" : ""}>
  //                   <div className="flex relative dark:bg-main-dark-bg">
  //                     <div
  //                       className="fixed right-4 bottom-4"
  //                       style={{ zIndex: "1000" }}
  //                     >
  //                       <TooltipComponent content="Settings" position="Top">
  //                         <button
  //                           type="button"
  //                           onClick={() => setThemeSettings(true)}
  //                           style={{
  //                             background: currentColor,
  //                             borderRadius: "50%",
  //                           }}
  //                           className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
  //                         >
  //                           <FiSettings />
  //                         </button>
  //                       </TooltipComponent>
  //                     </div>
  //                     {activeMenu ? (
  //                       <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
  //                         <Sidebar />
  //                       </div>
  //                     ) : (
  //                       <div className="w-0 dark:bg-secondary-dark-bg">
  //                         <Sidebar />
  //                       </div>
  //                     )}
  //                     <div
  //                       className={
  //                         activeMenu
  //                           ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
  //                           : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
  //                       }
  //                     >
  //                       <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
  //                         <Navbar />
  //                       </div>

  //                       <Footer />
  //                     </div>
  //                   </div>
  //                 </div>
  //               }
  //             >
  //               {/* <div> */}

  //               {themeSettings && <ThemeSettings />}

  //               {/* dashboard  */}
  //               <Route path="/dashboard" element={<Dashboard />} />

  //               {/* profile */}
  //               <Route path="/profile" element={<Profile />} />

  //               {/* apps  */}
  //               <Route path="/todolist" element={<ToDoList />} />

  //               <Route path="/calendar" element={<Calendar />} />
  //               <Route path="/FAQs" element={<FAQs />} />
  //               <Route path="/Current-Projects" element={<CurrentProjects />} />
  //               <Route path="/Tasks" element={<Tasks />} />
  //               <Route path="/Session" element={<Sessions1 />} />
  //               <Route path="/Session-Details" element={<Sessions2 />} />
  //               <Route path="/Maturity" element={<Maturity1 />} />
  //               <Route path="/Quiz" element={<Quiz />} />

  //               {/* charts  */}
  //               <Route path="/pie" element={<Pie />} />

  //               {/* </div> */}
  //               <Route
  //                 path="/chat"
  //                 element={
  //                   <Chat
  //                     username={user.displayName}
  //                     userId={userId}
  //                     photoUrL={photoUrl}
  //                   />
  //                 }
  //               />
  //             </Route>
  //             <Route
  //               path="/upload-idea"
  //               element={
  //                 <IdeaForm
  //                   username={user.displayName}
  //                   category={category}
  //                   photoUrl={photoUrl}
  //                 />
  //               }
  //             />

  //             <Route
  //               path="/display-ideas"
  //               element={ideas.map(({ id, data }) => (
  //                 <IdeaPost
  //                   key={id}
  //                   ideaId={id}
  //                   user={user}
  //                   username={data.userName}
  //                   title={data.title}
  //                   description={data.desc}
  //                   pdfFile={data.pdfFile}
  //                   status={data.status}
  //                   photoUrl={data.photoUrl}
  //                 />
  //               ))}
  //             />
  //             <Route
  //               path="/idea-review"
  //               element={ideas.map(({ id, data }) => (
  //                 <IdeaReview
  //                   key={id}
  //                   ideaId={id}
  //                   user={user}
  //                   username={data.userName}
  //                   title={data.title}
  //                   description={data.desc}
  //                   pdfFile={data.pdfFile}
  //                   statusLogo={data.statusLogo}
  //                   status={data.status}
  //                   category={data.category}
  //                   photoUrl={data.photoUrl}
  //                 />
  //               ))}
  //             />
  //             <Route
  //               path="/verify-ideas"
  //               element={ideas.map(({ id, data }) => (
  //                 <VerifyIdeas
  //                   key={id}
  //                   ideaId={id}
  //                   user={user}
  //                   username={data.userName}
  //                   title={data.title}
  //                   description={data.desc}
  //                   pdfFile={data.pdfFile}
  //                   statusLogo="https://i.ibb.co/W3Y9rx5/under-Verification.png"
  //                   status={data.status}
  //                   category={data.category}
  //                   photoUrl={data.photoUrl}
  //                   cat={category}
  //                 />
  //               ))}
  //             />
  //             <Route path="*" element={<PNF />} />
  //           </>
  //         ) : (
  //           <>
  //              <Route path="/login" element={[<Nav />, <Login />]} />
  //              <Route path="/register" element={[<Nav />, <Register />]} />
  //              <Route path="/forgot-pass" element={<ForgotPass />} />
  //              user ?
  //              <Route
  //               path="*"
  //               element={
  //                 <div className="h-screen flex justify-center items-center">
  //                   <Oval
  //                     height="70"
  //                     width="80"
  //                     radius="7"
  //                     color="blue"
  //                     ariaLabel="loading"
  //                     wrapperStyle
  //                     wrapperClass
  //                   />
  //                 </div>
  //               }
  //             />
  //             :
  //             <Route path="*" element={<LoginRegister />} />
  //           </>
  //         )}
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
};

// return (
//   <div className="bg-cover bg-[url('https://i.ibb.co/Smq2X7B/background.png')]">
//     <BrowserRouter>
//       <Routes>
//         {user && user.displayName ? (
//           <>
//             <Route
//               path="/"
//               element={<Dashboard username={user.displayName} />}
//             />
//             <Route
//               path="/upload-idea"
//               element={<IdeaForm username={user.displayName} />}
//             />
//             <Route
//               path="/display-idea"
//               element={[<IdeaList />, <Interactions />]}
//             />

//             <div className={currentMode === "Dark" ? "dark" : ""}>
//               <div className="flex relative dark:bg-main-dark-bg">
//                 <div
//                   className="fixed right-4 bottom-4"
//                   style={{ zIndex: "1000" }}
//                 >
//                   <TooltipComponent content="Settings" position="Top">
//                     <button
//                       type="button"
//                       onClick={() => setThemeSettings(true)}
//                       style={{
//                         background: currentColor,
//                         borderRadius: "50%",
//                       }}
//                       className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
//                     >
//                       <FiSettings />
//                     </button>
//                   </TooltipComponent>
//                 </div>
//                 {activeMenu ? (
//                   <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
//                     <Sidebar />
//                   </div>
//                 ) : (
//                   <div className="w-0 dark:bg-secondary-dark-bg">
//                     <Sidebar />
//                   </div>
//                 )}
//                 <div
//                   className={
//                     activeMenu
//                       ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
//                       : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
//                   }
//                 >
//                   <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
//                     <Navbar />
//                   </div>
//                   <div>
//                     {themeSettings && <ThemeSettings />}

//                     {/* dashboard  */}
//                     <Route path="/dashboard" element={<Dashboard />} />

//                     {/* profile */}
//                     <Route path="/profile" element={<Profile />} />

//                     {/* apps  */}
//                     <Route path="/todolist" element={<ToDoList />} />

//                     <Route path="/calendar" element={<Calendar />} />
//                     <Route path="/FAQs" element={<FAQs />} />
//                     <Route
//                       path="/Current-Projects"
//                       element={<CurrentProjects />}
//                     />
//                     <Route path="/Tasks" element={<Tasks />} />
//                     <Route path="/Session" element={<Sessions1 />} />
//                     <Route path="/Session-Details" element={<Sessions2 />} />
//                     <Route path="/Maturity" element={<Maturity1 />} />
//                     <Route path="/Quiz" element={<Quiz />} />

//                     {/* charts  */}
//                     <Route path="/pie" element={<Pie />} />
//                   </div>
//                   <Footer />
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <Route
//               path="/"
//               element={[
//                 <Nav />,
//                 <HeroSection />,
//                 <Slogens />,
//                 <Features />,
//                 <Footer />,
//               ]}
//             />
//             <Route
//               path="/about"
//               element={[
//                 <Nav />,
//                 <AboutUs1 />,
//                 <AboutUs2 />,
//                 <AboutUs3 />,
//                 <AboutUs4 />,
//                 <AboutUs5 />,
//               ]}
//             />
//             <Route path="/service" element={[<Nav />, <AboutUs3 />]} />
//             <Route path="/login" element={[<Nav />, <Login />]} />
//             <Route path="/register" element={[<Nav />, <Register />]} />
//             <Route
//               path="/know-more"
//               element={[
//                 <Nav />,
//                 <KnowMore1 />,
//                 <KnowMore2 />,
//                 <KnowMore3 />,
//                 <KnowMore4 />,
//                 <KnowMore5 />,
//               ]}
//             />
//             <Route path="/forgot-pass" element={<ForgotPass />} />
//             <Route path="/Lougout" element={<LogOutSuccessful />} />
//           </>
//         )}
//       </Routes>
//     </BrowserRouter>

//     {/*  <Maturity1/>
//     <Quiz/>
//     <FAQ/>
//     <Tasks/>
//     <LogOutSuccessful/>
//     <CurrentProjects/>
//      <Sessions1/>
//         <Sessions2/>
//         <ProfileEdit/>

//     */}
//   </div>
//   //   <Nav />
//   //   <HeroSection />
//   //   <Info />
//   //   <Features />
//   //   <UserInfo />
//   //   <Newsletter />
//   //   <Footer />
//   // </div>
// );

export default App;
