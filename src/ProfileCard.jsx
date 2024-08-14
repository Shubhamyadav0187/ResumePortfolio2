import React from 'react';
import SkillItem from './SkillItem';
import EducationItem from './EducationItem';
import ProjectCard from './ProjectCard'
import projectData from './ProjectData'
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
    return (
        <div className={cardContainerClass}>
            <div className={flexItemsCenterClass + " mb-6 gap-9"}>
            <img src="https://static.vecteezy.com/system/resources/previews/007/043/161/original/male-avatar-smiling-portrait-of-a-cheerful-young-man-with-a-happy-smile-vector.jpg" alt="Profile Image" class="w-28 h-28 rounded-full object-cover" />
                {/* <div className='h-20 w-20 rounded-2xl bg-red-500 '><img src="https://static.vecteezy.com/system/resources/previews/007/043/161/original/male-avatar-smiling-portrait-of-a-cheerful-young-man-with-a-happy-smile-vector.jpg" alt="Profile Picture" className={  + "object-cover"} />
                </div> */}
                
                <div>
                    <h1 className="text-5xl font-bold">Hi, I'm Shubham <span className="text-5xl">👋</span></h1>
                    <p className={textMutedClass}>Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</p>
                </div>
            </div>
            <h2 className="text-xl font-semibold mt-4">About</h2>
            <p className={textMutedClass + " mb-6"}>
                At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past,
                <a href="#" className={textPrimaryClass + " " + linkHoverClass}>I pursued a double degree in computer science and business</a>, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun.
                I also had the pleasure of being a part of the first ever in-person cohort of buildspace called <a href="#" className={textPrimaryClass + " " + linkHoverClass}>buildspace sf1</a>.
            </p>
            <h2 className="text-xl mt-10 font-semibold">Work Experience</h2>
            <div className="mt-4">
                <div className={workExperienceItemClass }>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.4JIQHZbp3COrxJQZjmFhwQHaFj&pid=Api&P=0&w=300&h=300" alt="Atomic Finance" className="mr-0.1 h-10" />
                    <div>
                        <h3 className="font-bold">IBM </h3>
                        <span className="text-muted text-right">25th June 2024 - 5th August 2024</span>
                        <p className={textMutedClass}>Frontend Web-Development Internship <span className="text-muted">May 2024 - Oct 2024</span></p>
                        <p className={textMutedClass}>Skill Acquisition: Mastered HTML, CSS, and JavaScript through intensive company-led training.</p>
                        <p className={textMutedClass}>Project Leadership: Co-led the creation of a cutting-edge, animated website frontend for a wildlife conservation platform, promoting sustainable development.</p>
                        <p className={textMutedClass}>Innovative Design: Designed and implemented a responsive, user-friendly interface using modern web development practices.</p>
                        <p className={textMutedClass}>Impactful Solutions: Developed features that enhance user engagement and accessibility, aligning with environmental conservation goals.</p>
                    </div>
                </div>
                <div className={workExperienceItemClass}>
                    <img src="https://static.vecteezy.com/system/resources/previews/011/658/583/original/letter-a-abstract-logo-flat-capital-letter-a-abstract-logo-icon-image-with-transparent-background-png.png" alt="Shopify" className="mr-2 h-10" />
                    <div>
                        <h3 className="font-bold">Freelance Frontend Web Developer || Adore Design</h3>
                        <p className={textMutedClass}><span className="text-muted  ">1st August 2024 - 15th August 2024</span></p>
                        <p className={textMutedClass}>Project: Developed a visually stunning interior design website for Adore Design, enhancing their online presence.</p>
                        <p className={textMutedClass}>Technologies: Utilized HTML, CSS, GSAP, and Locomotive to create smooth, engaging animations and a seamless user experience.</p>
                        <p className={textMutedClass}>Impact: Delivered a modern, responsive site that effectively showcases design portfolios, improving client engagement and satisfaction.</p>
                    </div>
                </div>

            </div>
 




            <h2 className="text-xl mt-10 font-semibold">Education</h2>
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
                    <img src="" alt="SV" className="mr-2 h-10" />
                    <div>
                        <h3 className="font-bold">Srushti Vidya Mandir Higher Secondary School, Bairagarh, Bhopal MP</h3>
                        <p className={textMutedClass}><span className="text-muted">2017</span></p>
                        <p className={textMutedClass}>10th | MP Board | 72%</p>
                    </div>
                </div>

            </div>


            <h2 className=" mt-9 text-xl font-bold mb-9 text-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
                <SkillItem skill="React" />
                <SkillItem skill="JavaScript" />
                
                <SkillItem skill="Git" />
                <SkillItem skill="GitHub" />
                <SkillItem skill="Tailwind CSS" />
                <SkillItem skill="SQL" />
                <SkillItem skill="C" />
                <SkillItem skill="C++" />
            </div>


            <h2 className=" text-center mb-4 mt-24 "> <span className="bg-black text-white px-6 py-1 rounded-xl shadow">My Project</span></h2>
            <div className="container mx-auto p-6 mt-2">
                <h2 className="text-4xl font-bold text-center mb-4 text-primary">Check out my latest work</h2>
                <p className="text-center text-muted-foreground mb-8">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>












        </div>
    );
};

export default ProfileCard;
