import React, { useEffect, useRef } from "react";
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
// import IdeaForm from "./components/IdeaForm";
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
import Editor from "./pages/Editor";
import GRegister from "./Group/GRegister";
import Glogin from "./Group/Glogin";
import CreateSession from "./Group/CreateSession";
import Post1 from "./components/Post1";
import Upload1 from "./components/Upload1";
import GroupTasks from "./Group/GroupTasks";
import UpdateSession from "./Group/UpdateSession";
import GroupDashboard from "./Group/GroupDashboard";
import GprofileEdit from "./Group/GprofileEdit";
import CPDCreate from "./Group/CPDCreate";
import CreateProject from "./Group/CreateProject";
import GSidebar from "./Group/GSidebar";
import GProfile from "./Group/GProfile";
import Badges from "./components/Badges";
import CPDetails from "./components/CPDetails";
import Developers from "./components/Developers";
import Aos from "aos";
import "aos/dist/aos.css";
import PNF from "./components/PNF";
import { Oval } from "react-loader-spinner";
import LoginRegister from "./components/LoginRegister";
import Chat from "./components/Chat";
import VerifyIdeas from "./components/VerifyIdeas";
import Verification from "./components/Verification";
import { collection, orderBy, onSnapshot, doc } from "firebase/firestore";
// import {mail} from "../src/Email";
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
import CreatePro from "./Group/CreatePro";
import Search from "./components/Search";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";
import Topbutton from "./components/TopButton";

const App = () => {
  const [changetoUpload, setChangetoUpload] = useState(false);
  useEffect(() => {
    alanBtn({
      key: "696ba602ac32d4223f4a6bc5a5076c4c2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
        } else if (commandData.command === "changetoUpload") {
          console.log(commandData.command);
          useNavigate("/Idea-Upload");
        } else if (commandData.command === "changetoDashboard") {
          useNavigate("/Dashboard");
        } else if (commandData.command === "changetoProfile") {
          useNavigate("/profile");
        } else if (commandData.command === "changetoVerification") {
          useNavigate("/Verification");
        } else if (commandData.command === "changetoMaturity") {
          useNavigate("/Maturity");
        } else if (commandData.command === "changetoProfile") {
          useNavigate("/profile");
        } else if (commandData.command === "changetoPost") {
          useNavigate("/Post");
        } else if (commandData.command === "changetoCurrPro") {
          useNavigate("/current-projects");
        } else if (commandData.command === "changetoTask") {
          useNavigate("/Tasks");
        } else if (commandData.command === "changetoSessions") {
          useNavigate("/sessions");
        } else if (commandData.command === "changetoTodo") {
          useNavigate("/To-Do-List");
        } else if (commandData.command === "changetoCalendar") {
          useNavigate("/Calendar");
        } else if (commandData.command === "changetoEditor") {
          useNavigate("/Switchi");
        } else if (commandData.command === "changetoFAQS") {
          useNavigate("/FAQs");
        } else if (commandData.command === "changetoKnowmore") {
          useNavigate("/Know-More");
        } else if (commandData.command === "changetoAboutus") {
          useNavigate("/About-Us");
        } else if (commandData.command === "changetoContactUs") {
          useNavigate("/Contact-us");
        } else if (commandData.command === "changetoDEVELOPERS") {
          useNavigate("/Developers");
        } else if (commandData.command === "changetoIdeaReview") {
          useNavigate("/Idea-Review");
        }
      },
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
  const [sessions, setSessions] = useState([]);
  const [category, setCategory] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const [email, setEmail] = useState();
  const [maturityResult, setMaturityResult] = useState();
  const [dataa, setData] = useState(null);
  pullData = setData;
  const userId = user?.uid;

  //retrieved user info from firebase
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        setUser(userAuth);
        if (userId) {
          onSnapshot(doc(db, "users", userId), (doc) => {
            setCategory(doc.data().category);
            setPhotoUrl(doc.data().photoURL);
            setEmail(doc.data().email);
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

  //retrieved ideas info from firebase
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

  useEffect(() => {
    if (userId) {
      onSnapshot(doc(db, "maturityPoints", auth.currentUser.uid), (doc) => {
        setMaturityResult(doc.data().maturityResult);
      });
    }
  }, [userId]);

  return (
    <div className="bg-[url('https://i.ibb.co/Smq2X7B/background.png')] bg-cover ">
      <BrowserRouter>
        {user && user.displayName ? (
          <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
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
                    className="hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[4rem] h-[4rem] pb-1 text-center justify-center font-extrabold font-poppins text-3xl mb-[7rem] mr-[.5rem] text-[#ffffff] rounded-[5rem] hover:text-[#000000] "
                  ></IconButton>
                </TooltipComponent>
              </div>
              {category === "institute" || category === "organization" ? (
                activeMenu ? (
                  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-[#ffffff] ">
                    <GSidebar />
                  </div>
                ) : (
                  <div className="w-0 dark:bg-secondary-dark-bg">
                    <GSidebar />
                  </div>
                )
              ) : activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-[#72D9FF] ">
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
                  <Navbar
                    username={user.displayName}
                    photoUrl={photoUrl}
                    email={email}
                    category={category}
                  />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>
                    <>
                      {/* {constan?(handleuup):null} */}
                      {category === "organization" ||
                      category === "institute" ? (
                        <>
                          <Route path="/Dashboard/Tasks" element={<GroupTasks />} />
                          <Route
                            path="/Dashboard/Create-Project"
                            element={<CreatePro />}
                          />
                          <Route
                            path="/Dashboard/Verify-Ideas"
                            element={ideas.map(({ id, data }) => (
                              <VerifyIdeas
                                key={id}
                                ideaId={id}
                                user={user}
                                username={data.userName}
                                title={data.title}
                                description={data.desc}
                                pdfFile={data.pdfFile}
                                statusLogo="https://i.ibb.co/W3Y9rx5/under-Verification.png"
                                status={data.status}
                                category={data.category} // category of the user who uploaded the idea
                                photoUrl={data.photoUrl}
                                cat={category} // current user category
                              />
                            ))}
                          />

                          <Route
                            path="/Dashboard"
                            element={
                              <GroupDashboard
                                username={user.displayName}
                                maturityResult={maturityResult}
                              />
                            }
                          />
                          <Route
                            path="/Dashboard/Create-Session"
                            element={<CreateSession />}
                          />
                          <Route
                            path="/Dashboard/ProfileEdit"
                            element={<GprofileEdit />}
                          />
                          <Route
                            path="/Dashboard/UpdateSession"
                            element={<UpdateSession />}
                          />
                          <Route path="/Dashboard/Profile" element={<GProfile />} />
                        </>
                      ) : (
                        <>
                          <Route
                            path="/Dashboard/profile"
                            element={
                              <Profile
                                username={user.displayName}
                                photoUrl={photoUrl}
                              />
                            }
                          />
                        </>
                      )}

                      {/* dashboard  */}
                      <Route
                        path="/Dashboard/dashboard"
                        element={
                          <Dashboard
                            username={user.displayName}
                            maturityResult={maturityResult}
                          />
                        }
                      />

                      {/* profile */}

                      {/* apps  */}
                      <Route path="/Dashboard/To-Do-List" element={<Std />} />

                      <Route path="/Dashboard/Calendar" element={<Calendar />} />
                      <Route path="/Dashboard/FAQs" element={<FAQs />} />
                      <Route
                        path="/Dashboard/Current-Projects"
                        element={<CurrentProjects />}
                      />
                      <Route path="/Dashboard/Tasks" element={<Tasks />} />
                      <Route path="/Dashboard/Session" element={<Sessions1 />} />
                      <Route
                        path="/Dashboard/Session-Details"
                        element={<Sessions2 user={user.uid} />}
                      />
                      <Route path="/Dashboard/Maturity" element={<Maturity1 />} />
                      <Route path="/Dashboard/Quiz" element={<Quiz />} />
                      <Route
                        path="/Dashboard/Profile-Edit"
                        element={
                          <ProfileEdit
                            username={user.displayName}
                            photoUrl={photoUrl}
                            electronicMail={email}
                          />
                        }
                      />
                      <Route
                        path="/Dashboard/Idea-Review"
                        element={ideas.map(({ id, data }) => (
                          <IdeaReview
                            key={id}
                            ideaId={id}
                            user={user}
                            username={data.userName}
                            title={data.title}
                            description={data.desc}
                            pdfFile={data.pdfFile}
                            statusLogo={data.statusLogo}
                            status={data.status}
                            category={data.category}
                            photoUrl={data.photoUrl}
                            aORrreason={data.aORrreason}
                          />
                        ))}
                      />
                      <Route
                        path="/Dashboard/Verify-Ideas"
                        element={ideas.map(({ id, data }) => (
                          <VerifyIdeas
                            key={id}
                            ideaId={id}
                            user={user}
                            username={data.userName}
                            title={data.title}
                            description={data.desc}
                            pdfFile={data.pdfFile}
                            statusLogo="https://i.ibb.co/W3Y9rx5/under-Verification.png"
                            status={data.status}
                            category={data.category} // category of the user who uploaded the idea
                            photoUrl={data.photoUrl}
                            cat={category} // current user category
                          />
                        ))}
                      />
                      <Route path="/Dashboard/Contact-us" element={<ContactUs />} />
                      <Route
                        path="/Dashboard/Post"
                        element={[
                          <Search pushData={App.pullData} />,
                          ideas.map(({ id, data }) =>
                            dataa === data.cat ? (
                              <IdeaPost
                                key={id}
                                ideaId={id}
                                user={user}
                                username={data.userName}
                                title={data.title}
                                description={data.desc}
                                pdfFile={data.pdfFile}
                                status={data.status}
                                photoUrl={data.photoUrl}
                                cmntPhoto={photoUrl}
                                likeStatus={data.likeStatus}
                              />
                            ) : null
                          ),
                        ]}
                      />
                      <Route path="/Dashboard/Switchi" element={<ToDoList />} />
                      <Route path="/Dashboard/chat" element={<Chat />} />
                      <Route
                        path="/Dashboard/Verification"
                        element={[<Verification />, <VScroll1 />]}
                      />
                      <Route
                        path="/Dashboard/Idea-Upload"
                        element={
                          <Upload1
                            username={user.displayName}
                            category={category}
                            photoUrl={photoUrl}
                          />
                        }
                      />
                      <Route
                        path="/Dashboard/Know-More"
                        element={[
                          <KnowMore1 />,
                          <KnowMore2 />,
                          <KnowMore3 />,
                          <KnowMore4 />,
                          <knowMore5 />,
                        ]}
                      />

                      <Route
                        path="/Dashboard/About-Us"
                        element={[
                          <AboutUs1 />,
                          <AboutUs2 />,
                          <AboutUs3 />,
                          <AboutUs4 />,
                          <AboutUs5 />,
                        ]}
                      />

                      {/* charts  */}
                      <Route path="/Dashboard/pie" element={<Pie />} />
                      <Route path="/Dashboard/Editor" element={<Editor />} />
                      <Route path="/Dashboard/Upload1" element={<Upload1 />} />

                      <Route path="/Dashboard/pbadges" element={<Badges />} />
                      <Route path="/Dashboard/uploadv" element={<VScroll2 />} />
                      <Route path="/Dashboard/cpdetails" element={<CPDetails />} />
                      {/* <Route
                            path="/Post1"
                            element={ideas.map(({ id, data }) => (
                              <Post1
                              key={id}
                              ideaId={id}
                              user={user}
                              username={data.userName}
                              title={data.title}
                              description={data.desc}
                              pdfFile={data.pdfFile}
                              status={data.status}
                              photoUrl={data.photoUrl}
                              cmntPhoto={photoUrl}
                              cat={data.cat}
                              />
                            ))}
                          /> */}

                      <Route
                        path="/Dashboard/Post1"
                        element={
                          <Post1
                            user={user}
                            cmntPhoto={photoUrl}
                            ideas={ideas}
                          />
                        }
                      />
                      <Route path="/Dashboard/Developers" element={<Developers />} />

                      {/* <Route path="/Post1" element={<Post1 />} /> */}
                    </>
                  </Routes>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Routes>
              <Route
                path="/Dashboard"
                element={[<Nav />, <HeroSection />, <Slogens />, <Features />]}
              />
              <Route path="/Dashboard/forgot-pass" element={<ForgotPass />} />
              <Route path="/Dashboard/login" element={[<Nav />, <Login />]} />
              <Route path="/Dashboard/register" element={[<Nav />, <Register />]} />
              <Route path="*" element={<PNF />} />
              <Route path="/Dashboard/groupregister" element={<GRegister />} />
              <Route path="/Dashboard/grouplogin" element={<Glogin />} />
              <Route path="/Dashboard/Developers" element={<Developers />} />
              <Route
                path="/Dashboard/about"
                element={[
                  <Nav />,
                  <AboutUs1 />,
                  <AboutUs2 />,
                  <AboutUs3 />,
                  <AboutUs4 />,
                  <AboutUs5 />,
                ]}
              />
              <Route path="/Dashboard/service" element={[<Nav />, <AboutUs3 />]} />
              <Route
                path="/Dashboard/know-more"
                element={[
                  <Nav />,
                  <KnowMore1 />,
                  <KnowMore2 />,
                  <KnowMore3 />,
                  <KnowMore4 />,
                  <KnowMore5 />,
                ]}
              />
              <Route path="/Dashboard/Logout" element={<LogOutSuccessful />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

var pullData;
App.pullData = (data) => {
  pullData(data);
};

export default App;
