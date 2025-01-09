import React from 'react'
import { useState, useEffect } from 'react';
import meTattoo from './images/me_tattoo.png';
import my from  './images/me.png';
import arrow from  './images/external-link.png';
import work from  './images/t.webp';
import resume from  './images/Resume.pdf';
import { Link } from 'react-router-dom';


const Home = () => {

    //  function updateTime() {
    //     try {
    //       // Get real-time clock for India
    //       const now = new Date();
    //       const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      
    //       // Format time as HH:MM AM/PM
    //       const time = indiaTime.toLocaleString("en-US", {
    //         hour: "2-digit",
    //         minute: "2-digit",
    //         second: "2-digit",
    //         hour12: true,
    //       });
      
    //       // Format date as Day, DD Month YYYY
    //       const date = indiaTime.toLocaleString("en-US", {
    //         weekday: "long",
    //         year: "numeric",
    //         month: "long",
    //         day: "numeric",
    //       });
      
    //       // Update the DOM
    //       document.querySelector("#current-time").textContent = time;
    //       document.querySelector("#current-time").style.color = " #F97316";
    //       document.querySelector("#current-date").textContent = date;
    //     } catch (error) {
    //       console.error("Error fetching time and date:", error);
    //       document.querySelector("#current-time").textContent = "Error loading time";
    //       document.querySelector("#current-date").textContent = "Error loading date";
    //     }
    //   }

    const [time, setTime] = useState('Loading time...');
    const [date, setDate] = useState('Loading date...');
  
    useEffect(() => {
      const updateTime = () => {
        try {
          const now = new Date();
          const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
          
          const formattedTime = indiaTime.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          });
  
          const formattedDate = indiaTime.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
  
          setTime(formattedTime);
          setDate(formattedDate);
        } catch (error) {
          console.error('Error fetching time and date:', error);
          setTime('Error loading time');
          setDate('Error loading date');
        }
      };
  
      updateTime();
      const interval = setInterval(updateTime, 1000); // Update every second
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  





    return (
        <>

            <div class=" container mx-auto lg:px-12 lg:py-12 px-3 py-8 grid grid-cols-1 lg:grid-cols-6 gap-6 ">

                {/* <!-- Welcome Section (Large Card) --> */}
                <div class=" col-span-6 lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border">

                    <div class="rounded-lg border bg-card text-card-foreground card-animate transfor-y-[-40%] align-start perspective-1200 group group relative col-span-1 h-auto w-full flex-none transform justify-start overflow-hidden p-6 shadow-lg transition duration-75 ease-in-out md:col-span-3 md:row-span-4">

                        <div class=" flex h-full w-full ">

                            <div class="flex flex-col justify-between gap-4 md:max-h-[300px]">
                                <div class="flex h-full flex-col">
                                    <h6 class="m-0 text-sm font-semibold text-gray-500">welcome</h6>
                                    <p class="m-0  font-bold text-gray-600">Hi, I'm <b class="font-bold text-black">Shubham Yadav</b>, a
                                        software
                                        developer and strong focus on the
                                        user experience, animations and micro interactions. I love to create
                                        beautiful and functional interfaces, I am passionate about technology
                                        and I am always looking for new challenges.</p>

                                </div>

                                <div class="flex gap-4">
                                    <a href="https://github.com/Shubhamyadav0187" aria-label="github profile" target="_blank">
                                        <button
                                            class=" bg-orange-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                            aria-label="github profile">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-github ">
                                                <path
                                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                                </path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg> <span class="sr-only">GitHub Profile</span> </button> </a> <a
                                                href="https://www.linkedin.com/in/shubham-yadav-5802732a7" aria-label="linkeding profile"
                                                target="_blank">
                                        <button
                                            class="bg-orange-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                            aria-label="linkedin profile"> <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-linkedin ">
                                                <path
                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                </path>
                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg> <span class="sr-only">Linkedin Profile</span> </button> </a> <a
                                                href="mailto:shubhamyadav64664@gmail.com" aria-label="mail profile" target="_blank">
                                        <button
                                            class="bg-orange-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-mail ">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg> <span class="sr-only">Email contact</span> </button> </a>
                                </div>
                            </div>
                            <img width="300" height="300" src={my}
                                class="pointer-events-none absolute bottom-[-20px] right-[-110px] z-[-1] max-h-[300px] w-auto select-none opacity-50 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100"
                                alt="memoji of andres plaza"/>


                        </div>
                    </div>
                </div>

                {/* <!-- About Me (Tall Card) --> */}
                <div class="border col-span-6 lg:col-span-2 row-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 class="text-lg font-bold">About Me</h2>
                    <p class=" text-gray-600 dark:text-gray-400 font-bold">Hi, I'm Shubham, a frontend developer from
                        India.</p>
                    <p class="mt-5 font-bold text-gray-600">My primary tools of choice include</p>
                    <ul class=" list-disc pl-6 text-gray-600 dark:text-gray-400 font-semibold">

                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwindcss</li>
                        <li>Bootstrap</li>
                        <li>Git/GitHub</li>
                        <li>SQL</li>

                    </ul>
                    <p class="
    text-gray-600 font-semibold mt-11">Beyond coding, I'm passionate about video editing and traveling. An unusual hobby of mine is play classical music in the guitar or ukulele.</p>
                </div>

                {/* <!-- CV (Tall Card) --> */}
                <div class="border col-span-6 lg:col-span-2 row-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    {/* <!-- Title --> */}
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200">CV</h2>

                    {/* <!-- Scrollable PDF Viewer --> */}
                    <div class="mt-4 border border-gray-300 rounded-lg overflow-hidden h-60">
                        <iframe
                            src={resume}
                            class="w-full h-full"
                            frameborder="0">
                        </iframe>
                    </div>

                    {/* <!-- Description --> */}
                    <p class="mt-4 text-gray-600 dark:text-gray-400">
                        View and download my resume by clicking on the button below:
                    </p>

                    {/* <!-- Download Button --> */}
                    <a
                        href="Resume.pdf"
                        download
                        class="mt-4 flex bg-orange-500 items-center justify-center text-white px-4 py-2 rounded-lg inline-block text-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                        Download Resume <img class="h-5 ml-4" src={arrow} alt="External Link"/>
                    </a>
                </div>




                {/* <!-- Portfolio & Projects (Standard Card) --> */}
               
                <div class="border col-span-6 lg:col-span-1  bg-white  hover:border-red-400 border p-3 rounded-lg shadow-md">
                    <span>
                        <Link to="./Resume" class="flex items-center lg:mt-2 text-sm text-muted-foreground">
                            <h3 class="text-lg font-bold">Web Resume  </h3><img class="h-5 ml-2 " src={arrow}/>
                            
                        </Link>
                        <Link to="./Resume" >
                        <h3 class="text-lg font-bold"> Portfolio & Projects </h3>
                        </Link>
                        

                    </span>

                    {/* <!-- <span> <h2 class="text-lg font-bold">Portfolio & Projects <img class="h-5 " src="external-link.png"></h2></span> -->
                    <!-- <p class="mt-4 text-gray-600 dark:text-gray-400">Explore my work.</p> --> */}

                </div>

                {/* <!-- Current Status (Standard Card) --> */}
                <div class="border col-span-6 lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div class="flex gap-4">
                        <h2 class="text-lg font-semibold">Now </h2>
                        <div class="glowing-dot lg:ml-14  ml-56"></div>
                    </div>
                    <p class="text-sm text-xs mt-1">Whats that ?</p>
                    <p class="mt-4 text-sm dark:text-gray-400">Currently working as a freelancer.</p>
                </div>

                {/* <!-- Time Zone (Standard Card) --> */}
                <div class="border col-span-6 lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="current-time" class="lg:text-8xl text-6xl text-orange-500 font-bold">{time}</h2>
                    <p className="current-date" class="mt-1 text-gray-600 dark:text-gray-400">{date}</p>
                    <i class="text-xs">India, Madhya Pradesh</i>
                </div>


                {/* <!-- LETS WORK (Tall Card) --> */}
                <div class="border col-span-6 lg:col-span-2 row-span-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold">Let's start working together </h2>

                    <h2 class="mt-6"> <i class="mt-4 text-gray-600 dark:text-gray-400 font-semibold">Contact Details</i></h2>
                    <h2 class=""> <i class="mt-4 text-gray-600 dark:text-gray-400 font-semibold">shubhamyadav64664@gmail.com</i></h2>
                    <h2 class=""> <i class="mt-4 text-gray-600 dark:text-gray-400 font-semibold">India, Madhya Pradesh, Bhopal</i></h2>

                    <ul class="mt-8 list-disc text- font-semibold text-gray-600 dark:text-gray-400">
                        <ul>Socials</ul>
                        <ul class="text-black"><a href="https://www.linkedin.com/in/shubham-yadav-5802732a7">Linkedin</a></ul>
                        <ul class="text-black"><a href="https://github.com/Shubhamyadav0187">Github</a></ul>
                        <ul class="text-black"><a href="https://www.instagram.com/theshubhamyadav_?igsh=Y3h3ejQ1NzZqcXQ=">Instagram</a></ul>



                    </ul>
                    <img src= {work} />
                </div>

                {/* <!-- Contact (Standard Card) --> */}
                <div class="border col-span-6 lg:col-span-2 row-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold">Study!</h2>
                    <p class="mt-4 text-gray-600 dark:text-gray-400">Bachelor of technology,  RGPV University</p>

                    <i class="text-xs">Bhopal, Madhya Pradesh</i>

                    <p class="mt-4 text-gray-600 dark:text-gray-400">Diploma in Mechanical Engineering. SVPC </p>
                    <i class="text-xs">Bhopal, Madhya Pradesh</i>

                    <p class="mt-4 text-gray-600 dark:text-gray-400">12th PCM, Ovm School  </p>
                    <i class="text-xs">Bhopal, Madhya Pradesh</i>
                </div>

                {/* <!-- Portfolio & Projects (Standard Card) --> */}
                <div class="border col-span-6 lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div class="flex">
                        <div class="h-4  w-4 text-red-600"></div>
                        <i class="text-lg text-gray-600">“Anything one man can imagine, other men can make real.”</i>


                    </div>
                    <p class="mt-4 text-gray-600 text-xs dark:text-gray-400">-Jules Verne.</p>


                </div>

                {/* <!-- instagram Status (Standard Card) --> */}
                <div class="border col-span-6 lg:col-span-1 row-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <a href="https://www.linkedin.com/in/shubham-yadav-5802732a7" class="block h-full w-full  ">
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right group-hover:text-primary position absolute right-6 ">
                            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                            <path d="m21 3-9 9"></path>
                            <path d="M15 3h6v6"></path>
                        </svg> --> */}
                        <h2 class="z-20 m-0 text-2xl font-bold">Jhuke ga nahi </h2>
                        <div class="flex h-full w-full flex-col">
                            <div>
                                <img width="10" height="10" src={meTattoo} class=" h-30  lg:h-full lg:w-full pointer-events-none  bottom-[-20px] right-[-110px] z-[-1] max-h-[300px] w-auto select-none opacity-50 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100"/>
                            </div>
                            <div>
                                <p class="mt-2 text-sm text-muted-foreground">If you want to connect, you can follow me on Linkedin.</p>
                            </div>
                            <span>
                                <h3 class="flex items-center text-lg lg:mt-8 text-bold font-bold text-muted-foreground">
                                    Click Please <img class="h-5 ml-2" src={arrow} alt="External Link"/>
                                </h3>
                            </span>


                        </div>

                    </a>

                </div>

                {/* <!-- Current Status (Standard Card) --> */}
                <div class=" border col-span-6 lg:col-span-1 row-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold">Experience</h2>
                    <h2 class="text-lg mt-2 text-orange-500 font-semibold">IBM </h2>
                    <p class=" text-gray-600 dark:text-gray-400">2024-2024.</p>

                    <p class="text-gray-600 dark:text-gray-400">Frontent Web development internship.</p>
                </div>

                {/* <!-- Current Status (Standard Card) --> */}
                {/* <!-- <div class="col-span-6 lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold">Now  </h2>
                    <p class="mt-4 text-gray-600 dark:text-gray-400">Currently working as a freelancer.</p>
                </div> --> */}




            </div>


            {/* <!-- Footer --> */}
            <footer class="border  flex justify-center w-full py-4 text-gray-500 dark:text-gray-400">
                <h3>Built with ❤️ by Shubham Yadav.</h3>
            </footer>

        </>
    )
}

export default Home;