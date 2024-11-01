import React, {useState} from 'react';
import SkillItem from './SkillItem';
import EducationItem from './EducationItem';
import ProjectCard from './ProjectCard'
import projectData from './ProjectData'
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
// import adoreImage from './images/Adore.png';
import { BsJournalBookmarkFill } from "react-icons/bs";
// import Blog from './Blog';
import { Link } from 'react-router-dom';
import LogoImage from './images/logo.jpg'


// Shared Tailwind CSS classes
const cardContainerClass = "max-w-3xl mx-auto p-6 bg-card text-foreground rounded-lg shadow-lg";
const textMutedClass = "text-muted-foreground";
const textPrimaryClass = "text-primary";
const linkHoverClass = "hover:underline";
const flexItemsCenterClass = "flex items-center";
const imageClass = "rounded-full mr-4 h-32";
const workExperienceItemClass = "flex  mb-4";


const sharedClass = 'text-muted-foreground'

const ProfileCard = () => {

    // const [isVisible, setIsVisible] = useState(false)


    // const toggleContentVisibility = () => {
    //     setIsVisible(!isVisible);
    // }
    return (
        <div className={cardContainerClass}>
            <div className={flexItemsCenterClass + " mb-6 gap-9"}>
                <img src={LogoImage} alt="Profile Image" class="w-28 h-28 rounded-full object-cover" />
                {/* <div className='h-20 w-20 rounded-2xl bg-red-500 '><img src="https://static.vecteezy.com/system/resources/previews/007/043/161/original/male-avatar-smiling-portrait-of-a-cheerful-young-man-with-a-happy-smile-vector.jpg" alt="Profile Picture" className={  + "object-cover"} />
                </div> */}

                <div>
                    <h1 className="lg:text-5xl text-2xl font-bold">Hi, I'm Shubham <span className="lg:text-5xl text-2xl">👋</span></h1>
                    <p className={textMutedClass}>Software Engineer. I love building things and helping people. Very active on Linkdin & Twitter.</p>
                </div>
            </div>
            <h2 className="text-xl font-bold mt-4">About</h2>
            <p className={textMutedClass + " mb-6"}>
                Frontend Web Developer with hands-on experience gained through a virtual internship at IBM. Strong practical knowledge of HTML, CSS, JavaScript, and React.js. Demonstrated ability to develop responsive and user-friendly web applications, with a focus on clean code and best practices. Enthusiastic about leveraging technical skills and innovative thinking to contribute to dynamic and forward-thinking projects.


            </p>
            <h2 className="text-xl font-bold mt-10 font-bold">Work Experience</h2>
            <div className="mt-4">
                <div className={workExperienceItemClass}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.4JIQHZbp3COrxJQZjmFhwQHaFj&pid=Api&P=0&w=300&h=300" alt="Atomic Finance" className="mr-0.1 h-10" />
                    <div>
                        <div className='flex  justify-between'>
                            <h3 className="flex   justify-between font-bold cursor-pointer" >IBM </h3>
                            <h5 className="text-muted text-right">25th June 2024 - 5th August 2024</h5>
                        </div>
                    
                            <div className="content">
                                <p className={textMutedClass}>Frontend Web-Development Internship </p>
                                <p className={textMutedClass}>Skill Acquisition: Mastered HTML, CSS, and JavaScript through intensive company-led training.</p>
                                <p className={textMutedClass}>Project Leadership: Co-led the creation of a cutting-edge, animated website frontend for a wildlife conservation platform, promoting sustainable development.</p>
                                <p className={textMutedClass}>Innovative Design: Designed and implemented a responsive, user-friendly interface using modern web development practices.</p>
                                <p className={textMutedClass}>Impactful Solutions: Developed features that enhance user engagement and accessibility, aligning with environmental conservation goals.</p>
                            </div>
                
                    </div>

                </div>
                <div className={workExperienceItemClass}>
                    <img src="https://static.vecteezy.com/system/resources/previews/011/658/583/original/letter-a-abstract-logo-flat-capital-letter-a-abstract-logo-icon-image-with-transparent-background-png.png" alt="Shopify" className="mr-2 h-10" />
                    <div>
                        <div className='flex justify-between'  >
                            <h3 className="font-bold cursor-pointer ">Freelance FWD || Adore Design </h3>
                            <p className={textMutedClass}><span className="text-muted  ">August 2024 - September 2024</span></p>
                        </div>
                        
                            <div className='content'>
                            <p className={textMutedClass}>Project: Developed a visually stunning interior design website for Adore Design, enhancing their online presence.</p>
                            <p className={textMutedClass}>Technologies: Utilized HTML, CSS, GSAP, and Locomotive to create smooth, engaging animations and a seamless user experience.</p>
                            <p className={textMutedClass}>Impact: Delivered a modern, responsive site that effectively showcases design portfolios, improving client engagement and satisfaction.</p>
    
                            </div>
                    
                        
                       
                    </div>
                </div>

            </div>





            <h2 className="text-xl  mt-10 font-bold">Education</h2>
            <div className="mt-4">
                <div className={workExperienceItemClass}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.rTN83wRIr9E1Swll2ofLBwHaIv&pid=Api&P=0&h=180" alt="Atomic Finance" className="mr-2 h-10" />
                    <div>
                        <h3 className="font-bold">Sagar Group of Institutions - SISTec Bhopal MP</h3>
                        <p className={textMutedClass}><span className="text-muted">2022 - 2025</span></p>
                        <p className={textMutedClass}>B. Tec- Computer Science & Engineering | CGPA- 6.22</p>
                    </div>
                </div>
                <div className={workExperienceItemClass}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.c6Rx9yX7fWLVRvhilpldJQHaGl&pid=Api&P=0&h=180" alt="Shopify" className="mr-0 h-9" />
                    <div>
                        <h3 className="font-bold">Sardar Vallabhbhai Polytechnic College, Bhopal MP</h3>
                        <p className={textMutedClass}><span className="text-muted">2019 - 2022</span></p>
                        <p className={textMutedClass}>Diploma in Mechanical Engineering | CGPA- 7. 63</p>
                    </div>
                </div>
                <div className={workExperienceItemClass}>
                    <img src="https://www.ovmschool.in/img/logo.png" alt="Shopify" className="mr-2 h-10" />
                    <div>
                        <h3 className="font-bold">Om Vidya Mandir Higher Secondary School, Bairagarh, Bhopal MP</h3>
                        <p className={textMutedClass}><span className="text-muted">2019</span></p>
                        <p className={textMutedClass}>12th | MP Board | 72%</p>
                    </div>
                </div>
                <div className={workExperienceItemClass}>
                    <img src="https://www.ovmschool.in/img/logo.png" alt="SV" className="mr-2 h-10" />
                    <div>
                        <h3 className="font-bold">Srushti Vidya Mandir Higher Secondary School, Bairagarh, Bhopal MP</h3>
                        <p className={textMutedClass}><span className="text-muted">2017</span></p>
                        <p className={textMutedClass}>10th | MP Board | 68%</p>
                    </div>
                </div>

            </div>


            <h2 className=" mt-9 text-xl font-bold mb-9 text-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
                <SkillItem skill="React.js" />
                <SkillItem skill="JavaScript" />

                <SkillItem skill="Git" />
                <SkillItem skill="GitHub" />
                <SkillItem skill="Tailwind CSS" />
                <SkillItem skill="HTML" />
                <SkillItem skill="SQL" />
                <SkillItem skill="C" />
                <SkillItem skill="C++" />
            </div>


            <h2 className=" text-center mb-1 mt-24"> <span className="bg-black text-white px-6 py-1 rounded-xl shadow">My Project</span></h2>
            <div className="container mx-auto p-1 mt-3">
                <h2 className="text-4xl font-bold text-center mb-4 text-primary">Check out my latest work</h2>
                <p className="text-center text-muted-foreground mb-8">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>




            <h2 className="text-xl font-bold mt-12 font-bold">Certifications</h2>
            <div className="mt-4">
                <div className={workExperienceItemClass}>
                    <a href='https://www.credly.com/badges/4ec6efec-c7cd-4301-a1a3-4b0ba50ff201/linked_in_profile'><img src="https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1732147200&v=beta&t=9CfVQaaHBmQkb0Tp6qxvk6ggG68effyESrAObRpNhtY" alt="Atomic Finance" className="mr-2 h-10" /></a>
                    <div>
                        <h3 className="font-bold"><a href='https://www.credly.com/badges/4ec6efec-c7cd-4301-a1a3-4b0ba50ff201/linked_in_profile'> Web Development Fundamentals || IBM</a></h3>
                        <p className={textMutedClass}><span className="text-muted">Jun 2024 - Aug 2024</span></p>
                        <p className={textMutedClass}></p>
                    </div>
                </div>
                <div className={workExperienceItemClass}>
                    <a href='https://www.credly.com/badges/4ec6efec-c7cd-4301-a1a3-4b0ba50ff201/linked_in_profile'><img src="https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1732147200&v=beta&t=9CfVQaaHBmQkb0Tp6qxvk6ggG68effyESrAObRpNhtY" alt="Atomic Finance" className="mr-2 h-10" /></a>
                    <div>
                        <h3 className="font-bold"><a href='https://www.credly.com/badges/4ec6efec-c7cd-4301-a1a3-4b0ba50ff201/linked_in_profile'> Project Management Fundamentals || IBM</a></h3>
                        <p className={textMutedClass}><span className="text-muted">Jun 2024 - Aug 2024</span></p>
                        <p className={textMutedClass}></p>
                    </div>
                </div>


            </div>


           



            <h2 className=" text-center mt-32 "> <span className="bg-black text-white px-4 py-1 rounded-xl shadow">Contact</span></h2>
            <div className="container mb-20 mx-auto p-1 ">
                <h2 className="text-6xl font-bold text-center mb-2 text-primary">Get in touch</h2>
                <p className="text-center text-muted-foreground mb-24">Want to chat? Just shoot me a dm with a direct question on twitter, Linkedin & Instagram and I'll respond whenever I can. I will ignore all soliciting..</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                </div>
            </div>




            <div className="  fixed bottom-4 left-0 right-0 mx-auto lg:w-1/4 w-2/3 rounded-full bg-gray-200 flex items-center justify-around gap-y-4 p-5 shadow-lg z-999">
                <a href="#" class="text-muted-foreground hover:text-primary ">
                    <FaHome />
                </a>
                <Link  to="./Blog" class="text-muted-foreground hover:text-primary ">
                <BsJournalBookmarkFill />
                </Link>
                <a href="https://www.linkedin.com/in/shubham-yadav-5802732a7" class="text-muted-foreground hover:text-primary">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Shubhamyadav0187" class="text-muted-foreground hover:text-primary">
                    <FaGithub />
                </a>
                <a href="https://x.com/Shubham100X?s=09" class="text-muted-foreground hover:text-primary">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/theshubhamyadav_?igsh=Y3h3ejQ1NzZqcXQ=" class="text-muted-foreground hover:text-primary">
                    <IoLogoInstagram />
                </a>
            </div>




        </div>
    );
};

export default ProfileCard;
