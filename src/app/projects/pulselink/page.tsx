'use client';

import Card from "@/components/Card";
import SiteHeaderNav from "@/components/siteHeaderNav"
import { David_Libre } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackArrowIcon from "@/components/icons/BackArrowIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

export default function Page() {
    const router = useRouter();
    
    return (
        
        <div className="min-h-screen min-w-screen flex flex-col gap-3">
            <div id="hero-section" className="h-[250px] w-full relative rounded-3xl overflow-hidden">
                <Image src={'/images/pulselink/music_festival_crowd.jpg'} alt="crowd of people" fill className="object-cover opacity-50"/>
                <button 
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
                >
                    <BackArrowIcon className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 font-crit font-bold text-white opacity-80 text-3xl md:text-5xl">
                    PULSELINK
                </div>
                <a 
                    href="https://github.com/NPande25/PulseLink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 font-crit font-bold text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                    GitHub
                    <ExternalLinkIcon className="w-5 h-5" />
                </a>
            </div>

            <div id="siteBody" className="flex flex-col items-center gap-3 px-4">
                <div className="flex flex-col w-full max-w-[650px] gap-3">
                    
                    <Card color="customblue">
                        <div id="project-header" className="flex flex-col p-4">
                            <span className="font-crit font-bold text-xl">WE CREATED PULSELINK - A PROXIMITY SENSING WATCH TO HELP ONE FIND THEIR FRIENDS IN CROWDED INDOOR AREAS</span>
                        </div>
                    </Card>

                    <div id="intro-section" className="flex flex-row gap-3">
                        <div className="hidden min-[650px]:block">
                            <Card>
                                <div className="w-[400px] min-h-[350px] relative -m-3 overflow-hidden rounded-lg">
                                    <Image src={'/images/Film-Burn-8.jpg'} alt="film burn texture" fill className="object-cover"/>
                                </div>
                            </Card>
                        </div> 
                        <Card color="customblue">
                            <div className="flex items-center h-full p-4">             
                                <span className="font-crit text-sm text-justify">This project was my first comprehensive dive into <span className="text-custompurple">wearable technology</span> and the process of <span className="text-custompurple">human-centered design</span>. With the three teammates, we underwent the full human-centered design process starting with <span className="text-custompurple">initial user research</span> and finishing with a <span className="text-custompurple">fully functional prototype.</span></span>
                            </div>
                        </Card>
                    </div>
                    
                    
                    <Card color="customblue">
                        <div className="flex flex-col gap-8 w-full p-4">                        
                            <div id="project-description" className="flex flex-row gap-8">
                                
                                <div className="min-w-[130px] flex items-center">
                                    <Card color="custompurple">
                                    <div className="flex flex-col text-sm">
                                        <div className="font-bold mt-2">TIMELINE</div>
                                        <div className="text-xs">3 weeks</div>
                                        <div className="font-bold mt-2">TECH STACK</div>
                                        <div className="text-xs">Arduino</div>
                                        <div className="text-xs">C++</div>
                                        <div className="font-bold mt-2">TEAM</div>
                                        <div className="text-xs">4 People</div>
                                        <div className="mb-2"></div>
                                    </div>
                                    
                                    </Card>
                                </div>
                                <div id="challenge-section" className="flex flex-col">
                                    <span className="font-crit font-regular underline text-lg mb-2">CHALLENGE</span>
                                    <span className="font-crit font-regular text-justify text-sm">We were tasked to improve networking and connecting among Dartmouth students. More specifically, we were prompted to think through how we might create connections in a divided time, how we might meet people in a new place, and/or how we might enable individuals to identify people in a crowded space. Additionally, we were challenged to think beyond app-based solutions and innovate with wearables, AR/VR, interactive dashboards, etc.</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div id="solution-section" className="flex flex-row gap-3">
                        <Card color="customblue">
                            <div className="flex flex-col h-full p-4">             
                                <span className="font-crit font-regular underline text-lg mb-2">SOLUTION</span>
                                <span className="font-crit font-regular text-justify text-sm">PulseLink is a wearable friend-finding device optimized for crowded indoor environments. Unlike existing products like Totem Compass and Crowd Compass, PulseLink uses a mesh network of devices and anchors to enable precise indoor positioning. Devices communicate with local anchors to determine their location, then broadcast to paired devices, displaying friends' direction and distance on an intuitive LED matrix. User testing confirmed PulseLink significantly improves users' ability to quickly reconnect with friends in crowded spaces.
                                </span>
                            </div>
                        </Card>
                        <div className="hidden min-[650px]:block">
                            <Card>
                                <div className="w-[300px] h-full min-h-[400px] relative -m-3 overflow-hidden rounded-lg">
                                    <Image src={'/images/Film-Burn-8.jpg'} alt="film burn texture" fill className="object-cover"/>
                                </div>
                            </Card>
                        </div>
                    </div>
                    
                    <Card color="customblue">
                        <div id="design-process" className="flex flex-col h-full p-4 gap-2">             
                            <span className="font-crit font-regular underline text-lg">THE DESIGN PROCESS</span>


                            <span className="font-crit font-regular text-justify text-sm">Beginning with structured focus groups and informal consultations within our Greek life community, we identified key pain points around staying connected in busy, crowded spaces. Interviewees often explained the frustration and anxiety that comes from trying to navigate back to one’s friends after stepping away for a moment.
                            </span>
                            
                            <div className="flex flex-row">
                                <div className="flex min-w-[100px]"></div>
                                <span className="font-crit font-regular text-justify text-sm">“During Green Key [Dartmouth’s annual springtime music festival], I left my friends in the front to go to the bathroom. By the time I made my way back to them, they weren’t in the area I thought I had left them. Find My Friends wasn’t helpful, since it said I was practically on top of them. And even when they were answering their texts, it was so hard to communicate where in the large crowd they were.”
                                </span>
                            </div>
                            

                            <span className="font-crit font-regular text-justify text-sm">Using key insights from our exploratory research, our team brainstormed use cases and generated low-fidelity storyboards showing moments where people lost contact with friends in crowded spaces (e.g., music festivals, frat parties). From these, we thought through key user needs and "How Might We" questions to guide prototyping.
                            </span>
                        </div>
                    </Card>
                </div>

                <div id="design-artifacts" className="flex flex-col sm:flex-row gap-3 px-4">
                    <Card color="customgreen">
                        <div className="flex -m-3 overflow-hidden rounded-lg">
                            <Image src={'/images/pulselink/User_Journey.jpg'} alt="User Journey" width={600} height={400} className="w-full h-auto"/>
                        </div>
                    </Card>
                    <Card color="customgreen">
                        <div className="-m-3 overflow-hidden rounded-lg">
                            <Image src={'/images/pulselink/HMW_Questions.jpg'} alt="How Might We Questions" width={600} height={400} className="w-full h-auto"/>
                        </div>
                    </Card>
                </div>

                <div id="prototypes-and-technical" className="flex flex-col w-full max-w-[650px] gap-3">
                    <div id="prototypes-section" className="flex flex-row gap-3">
                        <Card color="customgreen">
                            <div className="relative -m-3 overflow-hidden rounded-lg">
                                <Image src={'/images/pulselink/pulselink_prototypes.png'} alt="PulseLink prototypes" width={500} height={400} className="object-contain"/>
                            </div>
                        </Card>
                        <Card color="customblue">
                            <div className="flex flex-col h-full p-8 justify-center items-center">             
                                <span className="font-crit font-regular text-justify text-sm px-4">We developed multiple low-fidelity prototypes before committing to a working MVP. These included two paper prototypes of wrist-worn designs. One had a monochrome OLED screen and one had an 8×8 LED matrix. Both mocked up proximity indicators and elevation cues using blinking and symbolic representations. We ultimately selected the 8×8 LED matrix in our final MVP for its simplicity and availability. 
                                </span>
                            </div>
                        </Card>
                    </div>

                    <Card color="customblue">
                        <div id="technical-implementation" className="flex flex-col h-full p-4 gap-4">             
                            <span className="font-crit font-regular underline text-lg">TECHNICAL IMPLEMENTATION</span>
                            <div>
                                <span className="font-crit font-bold text-sm mb-1 block">ANCHORS AND REAL-TIME TRILATERATION ALGORITHM</span>
                                <span className="font-crit font-regular text-justify text-sm">PulseLink employs a simplified 2D trilateration system using fixed Bluetooth Low Energy anchors positioned at known coordinates throughout the environment. One device serves as the origin point (0,0), while additional anchors are manually positioned at measured coordinates relative to this origin. PulseLink devices within this anchored space measure their distance from the anchors and use geometric trilateration principles to calculate their (x, y) position. Paired PulseLink devices in the same space communicate their position to each other and are thus able to detect and display the direction and distance of one another.</span>
                            </div>
                        </div>
                    </Card>

                    <div id="technical-details" className="flex flex-row gap-3">
                        <Card color="customblue">
                            <div className="flex flex-col h-full p-4 gap-4">
                                <div>
                                    <span className="font-crit font-bold text-sm mb-1 block">RSSI-BASED DISTANCE ESTIMATION</span>
                                    <span className="font-crit font-regular text-justify text-sm">The system leverages Received Signal Strength Indicator (RSSI) measurements from BLE communications to estimate inter-device distances. Each PulseLink device measures the signal strength of incoming BLE advertisements from nearby anchors and paired devices, then applies a logarithmic path-loss model to convert RSSI values into approximate distance measurements. Since RSSI signals can encounter temporary instabilities or environmental interference, the system processes these values through calibrated distance conversion algorithms designed for indoor signal propagation characteristics.</span>
                                </div>
                                <div>
                                    <span className="font-crit font-bold text-sm mb-1 block">MULTI-DEVICE MESH NETWORK</span>
                                    <span className="font-crit font-regular text-justify text-sm">PulseLink implements a peer-to-peer BLE mesh network where each ESP32 anchor and device simultaneously acts as both advertiser and scanner. Every PulseLink device broadcasts its location data via BLE advertisements every 500ms while continuously scanning for anchors and other paired PulseLink devices in the vicinity.</span>
                                </div>
                            </div>
                        </Card>
                        <div className="hidden min-[650px]:block">
                            <Card>
                                <div className="w-[300px] min-h-[725px] relative -m-3 overflow-hidden rounded-lg">
                                    <Image src={'/images/Film-Burn-8.jpg'} alt="film burn texture" fill className="object-cover"/>
                                </div>
                            </Card>
                       </div>
                    </div>

                    <Card color="customblue">
                        <div id="led-display-section" className="flex flex-col h-full p-4">
                            <span className="font-crit font-bold text-sm mb-1 block">RELATIVE POSITIONING LED DISPLAY</span>
                            <span className="font-crit font-regular text-justify text-sm">The 8×8 LED matrix powered by the MAX7219 driver chip displays friend locations as a real-time spatial map with the user positioned at the center. Each friend appears as a dot on the matrix, with the dot's position indicating relative direction and distance—closer friends appear in inner rings while more distant friends appear toward the matrix edges.</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        
    );
  }