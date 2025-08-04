'use client';

import Card from "@/components/Card"
import SiteHeaderNav from "@/components/siteHeaderNav"
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackArrowIcon from "@/components/icons/BackArrowIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

export default function Page() {
    const router = useRouter();

    return (
        <div className="min-h-screen min-w-screen flex flex-col gap-3">
            <div id="hero-section" className="h-[250px] w-full relative sm:rounded-3xl overflow-hidden border-customgreen border-2">
                <Image src={'/images/anthem/green-blue-grainy-gradient-extended.jpeg'} alt="red cells" fill className="object-cover opacity-50"/>
                <div className="absolute top-4 left-4 right-4 z-10">
                    <SiteHeaderNav />
                </div>
                <button 
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-20"
                >
                    <BackArrowIcon className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 font-crit font-bold text-white opacity-80">
                    <div className="text-3xl md:text-3xl">ANTHEM</div>
                    <div className="text-s font-light italic">An End-to-End Platform to Discover and Document Live Music</div>
                </div>
                {/* <a 
                    href="https://voxcura.dartmouth.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-6 font-crit text-sm italic text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                    GitHub
                    <ExternalLinkIcon className="w-5 h-5" />
                </a> */}
            </div>
            <div className="p-2">
                {/* <SiteHeaderNav /> */}

                <div id="siteBody" className="flex flex-col items-center">
                    <div className="flex flex-col gap-4 w-full max-w-[650px]">

                        <Card color="customgreen">
                            <div id="projectDescription" className="flex flex-row gap-8 p-4">
                                <div className="min-w-[130px] h-fit flex justify-center">
                                    <Card color="customwhite">
                                        <div className="flex flex-col text-sm text-center">
                                            <div className="font-bold mt-2">TIMELINE</div>
                                            <div className="text-xs">7 months</div>
                                            <div className="font-bold mt-2">TECH STACK</div>
                                            <div className="text-xs">React</div>
                                            <div className="text-xs">Typescript</div>
                                            <div className="text-xs">Express.js</div>
                                            <div className="text-xs">MongoDB</div>
                                            <div className="text-xs">Python FastAPI</div>
                                            <div className="text-xs"></div>
                                            <div className="font-bold mt-2">TEAM</div>
                                            <div className="text-xs">4 People</div>
                                            <div className="mb-2"></div>
                                        </div>
                                    </Card>
                                </div>
                                <div id="aboutSection" className="flex flex-col">
                                    <span className="font-crit font-regular underline text-lg mb-2">ABOUT</span>
                                    <span className="font-crit font-regular text-justify text-sm">Deciding whether to buy concert tickets is not always an easy decision. It involves deciding who to see, but more importantly if they are worth seeing live. Anthem is an end-to-end live music platform that solves the concert-going decision problem by combining event discovery with social documentation.
                                    </span>
                                    <span className="font-crit font-regular underline text-lg mt-4 mb-2">WHAT I DID</span>
                                    <span className="font-crit font-regular text-justify text-sm">As a full-stack developer with a frontend focus, I built key features for this project including a personalized home feed that displays artists filtered by location, genre, or user interest. I developed comprehensive artist pages showcasing upcoming shows and past performance content to help users discover new live music, as well as user profile pages that enable music fans to document their concert experiences, track followed artists' upcoming events, and connect with friends in the community.
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row px-2 gap-4 justify-center items-center overflow-hidden">
                <video 
                    src="/videos/anthem/Concert_Discovery_Friends_Page.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/anthem/Concert_Discovery_Home_Artist_Event_Pages.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/anthem/Concert_Discovery_Profile_Page.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
            </div>
            <div className="p-2">
                <div id="siteBody" className="flex flex-col items-center">
                    <div className="flex flex-col gap-4 w-full max-w-[650px]">
                        
                        <Card color="customwhite">
                            <div id="challenge-section" className="flex flex-col p-4">
                                <span className="font-crit font-regular underline text-lg mb-2">FEATURES</span>
                                
                                <div id="solution-section" className="flex flex-col gap-8">
                                    <div className="w-full">
                                        
                                        <div className="flex flex-col h-full">             
                                            <span className="font-crit font-regular font-bold italic text-md mb-1">Home Page</span>
                                            <span className="font-crit font-regular text-justify text-sm">Siren's home feed presents users with a personalized, infinite scroll of concert tiles featuring upcoming events based on their music preferences and location. Each tile shows artist names, venue details, dates, and visuals for quick browsing. Authenticated users can follow events, access "Events Near You" and "Recommended Artists" sections, and navigate to detailed event pages. The feed uses machine learning to surface both popular concerts and hidden gems through a clean design that hopefully makes discovering live music experiences more fun and effortless.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-lg overflow-hidden border-customblue border-2 relative">
                                        <video 
                                            src="/videos/anthem/Concert_Discovery_Home_Page.mov"
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full object-cover"
                                            preload="metadata"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </Card>
 
                       <div id="solution-section" className="flex flex-row gap-3">
                            <div className="w-3/5">
                                <Card color="customblue">
                                    <div className="flex flex-col h-full p-4">             
                                        <span className="font-crit font-regular underline text-lg mb-2">SOLUTION</span>
                                        <span className="font-crit font-regular text-justify text-sm">PulseLink is a wearable friend-finding device optimized for crowded indoor environments. Unlike existing products like Totem Compass and Crowd Compass, PulseLink uses a mesh network of devices and anchors to enable precise indoor positioning. Devices communicate with local anchors to determine their location, then broadcast to paired devices, displaying friends' direction and distance on an intuitive LED matrix. User testing confirmed PulseLink significantly improves users' ability to quickly reconnect with friends in crowded spaces.
                                        </span>
                                    </div>
                                </Card>
                            </div>
                            <div className="w-2/5 rounded-lg overflow-hidden border-customblue border-2 relative">
                                <video 
                                    src="/videos/pulselink/pulselink-initial-prototype (online-video-cutter.com).mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
  }