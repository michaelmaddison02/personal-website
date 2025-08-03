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
        <>
        <div className="min-h-screen min-w-screen flex flex-col gap-3">
            <div id="hero-section" className="h-[250px] w-full relative rounded-3xl overflow-hidden border-customorange border-2">
                <Image src={'/images/geronimo-stilton/mouse_motif.jpg'} alt="crowd of people" fill className="object-cover opacity-50"/>
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
                    <div className="text-3xl md:text-3xl">GERONIMO STILTON</div>
                    <div className="text-s font-light italic">Full-stack Creative Coding Project</div>
                </div>
                <a 
                    href="https://github.com/NPande25/PulseLink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-6 font-crit text-sm italic text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                    GitHub
                    <ExternalLinkIcon className="w-5 h-5" />
                </a>
            </div>
            <div className="p-4">
                {/* <SiteHeaderNav /> */}

                <div id="siteBody" className="flex flex-col items-center">
                    <div className="flex flex-col gap-8 w-full max-w-[650px] px-4">
                        {/* <div id="projectHeader" className="flex flex-col text-white">
                            <span className="font-crit font-regular text-xl">GERONIMO STILTON</span>
                            <span id="geronimoStilton_ShortDescription" className="font-crit font-light italic text-s">Full-stack Creative Coding Project</span>
                        </div> */}

                        <Card color="customorange">
                            <div id="projectDescription" className="flex flex-row gap-8">
                                <div className="min-w-[130px] flex justify-center items-center">
                                    <Card color="customred">
                                        <div className="flex flex-col text-sm">
                                            <div className="font-bold mt-2">TIMELINE</div>
                                            <div className="text-xs">1 week</div>
                                            <div className="font-bold mt-2">TECH STACK</div>
                                            <div className="text-xs">Next.js</div>
                                            <div className="text-xs">Typescript</div>
                                            <div className="text-xs">Tailwind CSS</div>
                                            <div className="text-xs">Fast API</div>
                                            <div className="font-bold mt-2">TEAM</div>
                                            <div className="text-xs">Solo Project</div>
                                            <div className="mb-2"></div>
                                        </div>
                                    </Card>
                                </div>
                                <div id="aboutSection" className="flex flex-col">
                                    <span className="font-crit font-regular underline text-lg mb-2">ABOUT</span>
                                    <span className="font-crit font-regular text-justify text-sm">My creative coding project draws inspiration from children's author Elisabetta Dami and her Geronimo Stilton book series. In these books, Dami uses distinctive typography—varying fonts, sizes, and colors—to emphasize the emotional meaning of words. A word like "shock," for instance, might appear in large, orange text with a bold, striking typeface. My application uses sentiment analysis to detect the emotional valence of words and applies the appropriate visual styling to highlight the meaning behind emotionally charged words.</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center overflow-hidden">
                <video 
                    src="/videos/geronimo-stilton-changing-default-text.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[450px] object-contain border-customorange opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/geronimo-stilton-restyling.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[450px] object-contain border-customorange opacity-90 border-2 rounded-lg"
                />
                <video 
                    src="/videos/geronimo-stilton-click-restyling.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[450px] object-contain border-customorange opacity-90 border-2 rounded-lg"
                />
            </div>
            <div id="siteBody" className="flex flex-col items-center p-4">
                <div className="flex flex-col gap-8 w-full max-w-[650px] px-4">
                    <Card color="customorange">
                    <div className="flex flex-col">
                        <span className="font-crit font-regular underline text-lg mb-2">TECHNOLOGY</span>
                        
                        <span className="font-crit font-regular font-bold italic text-md mb-0.5">Sentiment Analysis</span>
                        <span className="font-crit font-regular text-justify text-sm mb-8">For my project, I needed a sentiment analysis model that could analyze individual words (rather than sentences or paragraphs) and detect multiple emotional categories. I ultimately landed on NRCLex, which is a Python library built on the NRC Emotion Lexicon. It contains a pre-built lexicon that maps thousands of words to their associated emotions and sentiment polarities, including anger, anticipation, disgust, fear, joy, sadness, surprise, trust and positive/negative sentiment. While NRCLex is great at identifying the valence of words in its lexicon, one limitation is that it is unable to extrapolate to words outside of its lexicon. Nevertheless, I integrated NRCLex into a FastAPI backend to provide real-time emotion analysis on my website.</span>
                        
                        <span className="font-crit font-regular font-bold italic text-md mb-0.5">Emotional Styling</span>
                        <span className="font-crit font-regular text-justify text-sm  mb-2">Thinking through the emotive styling of each emotion was the most fun part of this project. NRCLex is able to identify the valence of 8 emotions as well as positive/negative sentiments, however, I chose to only select for fear, anger, sadness, disgust, and joy. For these emotions, I compiled a list of fonts and colors that I felt represented and emphasized the feeling behind the emotions. After calling NRCLex to analyze each individual word, I randomly select the appropriate font and color dictionaries. In cases where a word returns multiple emotional valences, I select for the most salient one.</span>
                    </div>
                    </Card>
                </div>
            </div>
        </div>
        {/* <div className="h-[300px]"></div> */}
        </>
    );
  }