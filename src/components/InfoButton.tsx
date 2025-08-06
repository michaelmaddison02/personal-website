// This Info button is used in siteHeaderNav.tsx
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

type InfoButtonStyle = {
    className?: string;
};

const skills = ["Python", "Java", "C", "SQL", "SAIL", "Bash", "Javascript", "Typescript", "React", "React Native", "Next.js", "CSS", "Node.js", "FastAPI", "Backend", "RTK Query", "API development", "REST APIs", "PostgreSQL", "Supabase", "MongoDB", "Git", "Jenkins", "Prometheus", "TRex", "Docker", "Google Cloud", "Agile", "Scrum", "Kanban"];

export default function InfoButton({ className = '' }: InfoButtonStyle) {
    const handleEmailClick = async () => {
        try {
            await navigator.clipboard.writeText('michael.maddison02@gmail.com');
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild className={className}>
                <div className={className}>INFO</div>
            </DialogTrigger>

            <DialogContent className="bg-black/50 border-none font-crit text-white backdrop-blur-md">
                <DialogHeader>
                    <DialogTitle className="pb-2">{"Hi, I'm Michael Maddison"}</DialogTitle>
                    <DialogDescription className="pb-2 font-crit text-white">
                        {"I'm a software engineer, currently focusing on full-stack development, who is passionate about building impactful digital experiences. I love exploring the intersection of technology and user experience, always asking: how can we make systems that both feel frictionless and perform elegantly?"}
                    </DialogDescription>
                </DialogHeader>
                <DialogDescription className="flex flex-wrap font-crit text-white gap-2">
                    {skills.map((item, index) => (
                        <Badge key={index} variant={"secondary"}>{item}</Badge>
                    ))}
                </DialogDescription>

                <DialogDescription className="flex flex-row items-start gap-4">
                    <a 
                        href="https://www.linkedin.com/in/michael-maddison/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-crit text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1"
                        >
                        LinkedIn
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://github.com/michaelmaddison02"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-crit text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1"
                        >
                        Github
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                    <button 
                        onClick={handleEmailClick}
                        className="font-crit text-white opacity-80 hover:text-gray-300 transition-colors flex items-center gap-1 focus:outline-none focus:ring-0"
                        >
                        Email: Michael.Maddison02@gmail.com
                    </button>
                </DialogDescription>                
            </DialogContent>
        
        </Dialog>
    );
}