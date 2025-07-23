import SiteHeaderNav from "@/components/siteHeaderNav"

export default function Page() {
    return (
        <>
        <div className="min-h-screen min-w-screen bg-white flex flex-col gap-12">
            <div className="p-4">
                <SiteHeaderNav />

                <div id="siteBody" className="flex flex-col items-center">
                    <div className="flex flex-col gap-8 w-full max-w-[650px] px-4">
                        <div id="projectHeader" className="flex flex-col">
                            <span className="font-crit font-regular text-xl">GERONIMO STILTON</span>
                            <span id="geronimoStilton_ShortDescription" className="font-crit font-light italic text-s">Full-stack Creative Coding Project</span>
                        </div>

                        <div id="projectDescription" className="flex flex-row gap-8">
                            <div id="sideBox" className="flex flex-col h-fit min-w-[130px] bg-white p-5 border ">
                                <span className="font-crit font-regular text-sm mb-2">TIMELINE</span>
                                <span className="font-crit font-regular text-xs text-gray-500">1 Week</span>

                                <span className="font-crit font-regular text-sm mt-4 mb-2">TECH STACK</span>
                                <span className="font-crit font-regular text-xs text-gray-500">Next.js</span>
                                <span className="font-crit font-regular text-xs text-gray-500">Typescript</span>
                                <span className="font-crit font-regular text-xs text-gray-500">Tailwind CSS</span>
                                <span className="font-crit font-regular text-xs text-gray-500">Fast API</span>
                            </div>
                            <div id="aboutSection" className="flex flex-col">
                                <span className="font-crit font-regular underline text-lg mb-2">ABOUT</span>
                                <span className="font-crit font-regular text-justify text-sm">My creative coding project draws inspiration from children's author Elisabetta Dami and her Geronimo Stilton book series. In these books, Dami uses distinctive typography—varying fonts, sizes, and colors—to emphasize the emotional meaning of words. A word like "shock," for instance, might appear in large, orange text with a bold, striking typeface. My application uses sentiment analysis to detect the emotional valence of words and applies the appropriate visual styling to highlight the meaning behind emotionally charged words.</span>
                            </div>
                        </div>
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
                    className="w-[450px] object-contain border"
                />
                <video 
                    src="/videos/geronimo-stilton-restyling.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[450px] object-contain border"
                />
                <video 
                    src="/videos/geronimo-stilton-click-restyling.mov"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-[450px] object-contain border"
                />
            </div>
            <div id="siteBody" className="flex flex-col items-center p-4">
                <div className="flex flex-col gap-8 w-full max-w-[650px] px-4">
                    <div id="" className="flex flex-col">
                        <span className="font-crit font-regular underline text-lg mb-1">TECHNOLOGY</span>
                        
                        <span className="font-crit font-regular italic text-md mb-2">Sentiment Analysis</span>
                        <span className="font-crit font-regular text-justify text-sm mb-6">For my project, I needed a sentiment analysis model that could analyze individual words (rather than sentences or paragraphs) and detect multiple emotional categories. I ultimately landed on NRCLex, which is a Python library built on the NRC Emotion Lexicon. It contains a pre-built lexicon that maps thousands of words to their associated emotions and sentiment polarities, including anger, anticipation, disgust, fear, joy, sadness, surprise, trust and positive/negative sentiment. While NRCLex is great at identifying the valence of words in its lexicon, one limitation is that it is unable to extrapolate to words outside of its lexicon. Nevertheless, I integrated NRCLex into a FastAPI backend to provide real-time emotion analysis on my website.</span>
                        
                        <span className="font-crit font-regular italic text-md mb-2">Emotional Styling</span>
                        <span className="font-crit font-regular text-justify text-sm  mb-12">Thinking through the emotive styling of each emotion was the most fun part of this project. NRCLex is able to identify the valence of 8 emotions as well as positive/negative sentiments, however, I chose to only select for fear, anger, sadness, disgust, and joy. For these emotions, I compiled a list of fonts and colors that I felt represented and emphasized the feeling behind the emotions. After calling NRCLex to analyze each individual word, I randomly select the appropriate font and color dictionaries. In cases where a word returns multiple emotional valences, I select for the most salient one.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[300px]"></div>
        </>
    );
  }