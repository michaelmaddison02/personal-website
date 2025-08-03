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
            <div id="hero-section" className="h-[250px] w-full relative sm:rounded-3xl overflow-hidden border-white border-2">
                <Image src={'/images/voxcura/red_cells.jpg'} alt="red cells" fill className="object-cover opacity-50"/>
                <button 
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
                >
                    <BackArrowIcon className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 font-crit font-bold text-white opacity-80">
                    <div className="text-3xl md:text-3xl">VOXCURA</div>
                    <div className="text-s font-light italic">A Multi-Modal Medical Chatbot</div>
                </div>
                <a 
                    href="https://voxcura.dartmouth.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-6 font-crit text-sm italic text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                    View Site
                    <ExternalLinkIcon className="w-5 h-5" />
                </a>
            </div>
            <div className="p-2">
                {/* <SiteHeaderNav /> */}

                <div id="siteBody" className="flex flex-col items-center">
                    <div className="flex flex-col gap-4 w-full max-w-[650px]">
                        {/* <div id="projectHeader" className="flex flex-col text-white">
                            <span className="font-crit font-regular text-xl">GERONIMO STILTON</span>
                            <span id="geronimoStilton_ShortDescription" className="font-crit font-light italic text-s">Full-stack Creative Coding Project</span>
                        </div> */}

                        <Card color="customwhite">
                            <div id="projectDescription" className="flex flex-row gap-8 p-4">
                                <div className="min-w-[130px] h-fit flex justify-center">
                                    <Card color="customred">
                                        <div className="flex flex-col text-sm text-center">
                                            <div className="font-bold mt-2">TIMELINE</div>
                                            <div className="text-xs">6 months</div>
                                            <div className="font-bold mt-2">TECH STACK</div>
                                            <div className="text-xs">Python</div>
                                            <div className="text-xs">ChainLit</div>
                                            <div className="font-bold mt-2">TEAM</div>
                                            <div className="text-xs">3 People</div>
                                            <div className="mb-2"></div>
                                        </div>
                                    </Card>
                                </div>
                                <div id="aboutSection" className="flex flex-col">
                                    <span className="font-crit font-regular underline text-lg mb-2">ABOUT</span>
                                    <span className="font-crit font-regular text-justify text-sm">Voxcura is a multi-modal medical chatbot that allows patients to understand their medical conditions through conversations about their symptoms. While patients should be cautious about any online diganosis, Voxcura outpaces the average medical student on the medical licesnsing exam and can thus provide diagnosises with good accuracy.
                                    </span>
                                    <span className="font-crit font-regular underline text-lg mt-4 mb-2">WHAT I DID</span>
                                    <span className="font-crit font-regular text-justify text-sm">Voxcura was my first opportunity with full-stack development. I primarily led our frontend developmnt, building the chat interface with Chainlit–a python package designed to build production level conversational AI. Beyond this, I assisted with backend API development, prompt engineering, and our RAG pipeline.
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row px-2 gap-4 justify-center items-center overflow-hidden">
                <video 
                    src="/videos/voxcura/voxcura_demo_initial_questions.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[550px] object-contain border-white opacity-90 border-2 rounded-lg"
                />
                <video
                    src="/videos/voxcura/voxcura_demo_differential_diagnosis.mov"
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
                                <span className="font-crit font-regular underline text-lg mb-2">PROBLEM</span>
                                <span className="font-crit font-regular text-justify text-sm">Just because seeing a doctor is the status quo doesn’t mean its the best – seeing a physician can be complicated! More than 26 million Americans are uninsured or underinsured and nearly 60% of adults use the internet to look for health and medical information. For those who can afford to see a doctor, limited appointment availability means they can only secure visits weeks or months out, leaving patients without options for prompt medical attention.
                                </span>
                            </div>
                        </Card>

                        <div id="solution-section" className="flex flex-row gap-3">
                            <div className="w-3/5">
                                <Card color="customwhite">
                                    <div className="flex flex-col h-full p-4">             
                                        <span className="font-crit font-regular underline text-lg mb-2">SOLUTION</span>
                                        <span className="font-crit font-regular text-justify text-sm">Voxcura addresses these healthcare accessibility challenges by providing immediate, high-quality medical consultation without the traditional barriers. Unlike conventional healthcare that requires weeks-long waits and expensive office visits, Voxcura offers instant access to AI-powered medical expertise with no appointment scheduling, no insurance requirements, and costs less than a typical doctor's co-pay.
                                        </span>
                                    </div>
                                </Card>
                            </div>
                            <div className="w-2/5">
                                <Card color="customred">
                                    <div className="flex flex-col h-full p-4">             
                                        <span className="font-crit font-regular underline text-lg mb-2">AWARDS</span>
                                        <span className="font-crit font-regular text-sm mb-3">• Placed 2nd in Dartmouth Health-Tech Accelerator
                                        </span>
                                        <span className="font-crit font-regular text-sm">• Raised $50,000 in Pre-Seed Funding
                                        </span>
                                    </div>
                                </Card>
                            </div>
                            {/* <div className="w-2/5 rounded-lg overflow-hidden border-white border-2 relative">
                                <Image src={'/images/Film-Burn-8.jpg'} alt="decorative texture" fill className="object-cover"/>
                            </div> */}
                            
                        </div>

                        <Card color="customwhite">
                            <div className="flex flex-col p-4">
                                <span className="font-crit font-regular underline text-lg mb-2">TECHNOLOGY</span>
                                
                                <span className="font-crit font-regular font-bold italic text-md mb-0.5">Multi-Modal Agents</span>
                                <span className="font-crit font-regular text-justify text-sm mb-8">Voxcura employs a multi-agent architecture using AutoGen, where specialized AI agents collaborate in a structured group chat. The system consists of three agents: an Interviewer that conducts systematic patient interviews, a Diagnose agent that generates differential diagnoses using Bayesian probability, and a Polling agent that aggregates diagnostic opinions through majority voting. The agents communicate through a GroupChatManager that orchestrates the conversation flow, with the Interviewer directly interfacing with the patient while the diagnostic agents analyze the gathered information in the background to collaboratively reach medical conclusions.
                                </span>
                                
                                <span className="font-crit font-regular font-bold italic text-md mb-0.5">Prompt Engineering</span>
                                <span className="font-crit font-regular text-justify text-sm mb-8">The system uses extensive prompt engineering through carefully crafted system messages defining each agent's persona and methodology. The Interviewer follows structured patient interview protocols, systematically gathering chief complaint, history of present illness using a 7-attribute framework, and review of systems. The Diagnose agent applies evidence-based reasoning with instructions to incorporate disease base rates and Bayesian probability updates. The Polling agent is engineered to aggregate multiple diagnostic opinions through majority voting, analyzing frequency and rankings to produce consensus diagnoses.
                                </span>
                                
                                <span className="font-crit font-regular font-bold italic text-md mb-0.5">Retrival-Augmented Generation (RAG) Pipeline</span>
                                <span className="font-crit font-regular text-justify text-sm">When patients describe symptoms, the system queries vector databases containing medical texts and diagnostic criteria to retrieve relevant context that augments agent responses. The Interviewer agent accesses symptom-specific questioning protocols, while DiagnoseGPT agents retrieve current epidemiological data, differential diagnosis frameworks, and evidence-based guidelines to inform their Bayesian reasoning. This ensures all diagnoses are grounded in up-to-date medical evidence rather than static training data, maintaining accuracy and alignment with evolving medical standards.
                                </span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* </div> */}

            {/* <div id="siteBody" className="flex flex-col items-center p-4">
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
            </div> */}
        </div>
        {/* <div className="h-[300px]"></div> */}
        </>
    );
  }