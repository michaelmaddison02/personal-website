// This Info button is used in siteHeaderNav.tsx
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

type InfoButtonStyle = {
    className?: string;
};

const skills = ["Python", "Java", "C", "SQL", "SAIL", "Bash", "Javascript", "Typescript", "React", "React Native", "Next.js", "CSS", "Node.js", "FastAPI", "Backend", "RTK Query", "API development", "REST APIs", "PostgreSQL", "Supabase", "MongoDB", "Git", "Jenkins", "Prometheus", "TRex", "Docker", "Google Cloud", "Agile", "Scrum", "Kanban"];

export default function InfoButton({ className = '' }: InfoButtonStyle) {
    const handleEmailClick = async () => {
        try {
            await navigator.clipboard.writeText('michael.maddison02@gmail.com');
            toast.success('Email copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy email: ', err);
            toast.error('Failed to copy email');
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild className={className}>
                    <div className={className}>INFO</div>
                </DialogTrigger>

                <DialogContent className="bg-black/50 border-none font-crit text-white backdrop-blur-md">
                    <DialogHeader>
                        <DialogTitle className="text-start pb-2">{"Hi, I'm Michael Maddison"}</DialogTitle>
                        <DialogDescription className="flex text-start font-crit text-white pb-2">
                            {"I'm a software engineer, currently focusing on full-stack development, who is passionate about building impactful digital experiences. I love exploring the intersection of technology and user experience, always asking: How can we make systems that both feel frictionless and perform elegantly?"}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-wrap font-crit text-white gap-2 pb-2">
                        {skills.map((item, index) => (
                            <Badge key={index} variant={"secondary"}>{item}</Badge>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm: justify-between items-start gap-2">
                        <div className="flex flex-row items-start gap-4">
                            <a 
                                href="https://www.linkedin.com/in/michael-maddison/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-crit text-sm text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1"
                                >
                                LinkedIn
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://github.com/michaelmaddison02"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-crit text-sm text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1"
                                >
                                Github
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                        </div>
                        <button 
                            onClick={handleEmailClick}
                            className="font-crit text-sm text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1 focus:outline-none focus:ring-0"
                            >
                            Michael.Maddison02@gmail.com
                        </button>
                    </div>
                </DialogContent>
            
            </Dialog>
            <Toaster />
        </>
    );
}