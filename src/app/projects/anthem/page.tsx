'use client';

import Card from "@/components/Card"
import ProjectHero from "@/components/ProjectHero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Page() {
    return (
        <div className="min-h-screen min-w-screen flex flex-col gap-3">
            <ProjectHero 
                title="ANTHEM"
                subtitle="An End-to-End Platform to Discover and Document Live Music"
                backgroundImage="/images/anthem/green-blue-grainy-gradient-extended.jpeg"
                backgroundAlt="green blue gradient background"
                borderColor="border-customgreen"
                rounded={false}
            />
            <div className="p-2">
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
            <div id="demo-videos" className="flex flex-col sm:flex-row px-2 gap-4 justify-center items-center overflow-hidden">
                <video 
                    src="/videos/anthem/Concert_Discovery_Friends_Page.mp4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/anthem/Concert_Discovery_Home_Artist_Event_Pages.mp4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/anthem/Concert_Discovery_Profile_Page.mp4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
            </div>
            <div className="p-4">
                <div id="siteBody" className="flex flex-col items-center">
                    <div id="features-section" className="flex flex-col gap-4 w-full max-w-[650px]">
                        <Card color="customgreen">
                            <div className="p-8">
                                <span id="features-title" className="font-crit font-regular underline text-lg mb-4 block">FEATURES</span>
                                <Carousel className="w-full max-w-full mx-auto">
                                    <CarouselContent>
                                        <CarouselItem id="home-page-feature">
                                            <div className="flex flex-col justify-between gap-4 h-full">
                                                <div className="flex flex-col">
                                                    <span className="font-crit font-regular font-bold italic text-md mb-2">Home Page</span>
                                                    <span className="font-crit font-regular text-justify text-sm">Anthem's home feed presents users with a personalized, infinite scroll of concert tiles featuring upcoming events based on their music preferences and location. Each tile shows artist names, venue details, dates, and visuals for quick browsing. Authenticated users can follow events, access "Events Near You" and "Recommended Artists" sections, and navigate to detailed event pages. The feed uses machine learning to surface both popular concerts and hidden gems through a clean design that hopefully makes discovering live music experiences more fun and effortless.
                                                    </span>
                                                </div>
                                                <div className="rounded-lg overflow-hidden border-white border-2">
                                                    <video 
                                                        src="/videos/anthem/Concert_Discovery_Home_Page.mp4"
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
                                        </CarouselItem>
                                        <CarouselItem id="artist-page-feature">
                                            <div className="flex flex-col justify-between gap-4 h-full">
                                                <div className="flex flex-col">
                                                    <span className="font-crit font-regular font-bold italic text-md mb-2">Artist Page</span>
                                                    <span className="font-crit font-regular text-justify text-sm">The artist page provides a comprehensive hub for exploring live music through a clean tabbed interface. Users can browse upcoming concerts with ticket links, view past performances with detailed setlists, and access artist details including Spotify integration. The page prominently displays artist profile information, while authenticated users can follow artists to receive personalized recommendations and tour updates, making it easy to track and engage with their favorite performers.
                                                    </span>
                                                </div>
                                                <div className="rounded-lg overflow-hidden border-customblue border-2">
                                                    <video 
                                                        src="/videos/anthem/Concert_Discovery_Artist_Page.mp4"
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
                                        </CarouselItem>
                                        <CarouselItem id="event-page-feature">
                                            <div className="flex flex-col justify-between gap-4 h-full">
                                                <div className="flex flex-col">
                                                    <span className="font-crit font-regular font-bold italic text-md mb-2">Event Page</span>
                                                    <span className="font-crit font-regular text-justify text-sm">The event page centralizes all concert information through its dynamic tabbed interface. The "Explore" tab serves as the social hub where users can view fan posts about the upcoming show, while the "Tickets" tab integrates TicketMaster links and purchasing options for future events. The "Details" tab displays essential logistics including venue information, date/time, and interactive Mapbox location features. The page header prominently shows event timing, and authenticated users can follow events to receive updates and notifications.
                                                    </span>
                                                </div>
                                                <div className="rounded-lg overflow-hidden border-customblue border-2">
                                                    <video 
                                                        src="/videos/anthem/Concert_Discovery_Event_Page.mp4"
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
                                        </CarouselItem>
                                        <CarouselItem id="community-page-feature">
                                            <div className="flex flex-col justify-between gap-4 h-full">
                                                <div className="flex flex-col">
                                                    <span className="font-crit font-regular font-bold italic text-md mb-2">Community Page</span>
                                                    <span className="font-crit font-regular text-justify text-sm">The community page serves as Anthem's social discovery hub where users browse and engage with content from fellow concert-goers. The page features an infinitely scrolling feed displaying users who recently posted concert content, showing profile pictures, names, and interactive concert tiles. Users can click profiles to view individual pages or select concert tiles to see event details and user-generated media like videos. This social discovery mechanism helps users find new concerts by seeing what shows others attend, fostering community engagement and connecting users with similar musical tastes.
                                                    </span>
                                                </div>
                                                <div className="rounded-lg overflow-hidden border-customblue border-2">
                                                    <video 
                                                        src="/videos/anthem/Concert_Discovery_Community_Page.mp4"
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
                                        </CarouselItem>
                                        <CarouselItem id="profile-page-feature">
                                            <div className="flex flex-col justify-between gap-4 h-full">
                                                <div className="flex flex-col">
                                                    <span className="font-crit font-regular font-bold italic text-md mb-2">Profile Page</span>
                                                    <span className="font-crit font-regular text-justify text-sm">The User Profile page serves as a personal hub where users showcase their concert identity and manage social connections. The page features a prominent header with profile information, avatar, and social metrics, while the main content uses a tabbed interface to organize concert posts, followed artists, and social connections. Interactive elements include follow buttons and modal windows for viewing follower lists. For profile owners, it functions as a concert diary and networking center, while visitors gain insight into musical tastes and attendance history, fostering community-driven concert discovery.
                                                    </span>
                                                </div>
                                                <div className="rounded-lg overflow-hidden border-customblue border-2">
                                                    <video 
                                                        src="/videos/anthem/Concert_Discovery_Profile_Page.mp4"
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
                                        </CarouselItem>
                                    </CarouselContent>
                                    <CarouselPrevious className="bg-customgreen text-white border-customgreen hover:bg-[#20924c] hover:text-white hover:border-customgreen -left-15" />
                                    <CarouselNext className="bg-customgreen text-white border-customgreen hover:bg-[#20924c] hover:text-white hover:border-customgreen -right-15" />
                                </Carousel>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
  }