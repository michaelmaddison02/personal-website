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

type InfoButtonStyle = {
    className?: string;
};

const skills = ["Python", "Java", "C", "SQL", "SAIL", "Bash", "Javascript", "Typescript", "React", "React Native", "Next.js", "CSS", "Node.js", "FastAPI", "Backend", "RTK Query", "API development", "REST APIs", "PostgreSQL", "Supabase", "MongoDB", "Git", "Jenkins", "Prometheus", "TRex", "Docker", "Google Cloud", "Agile", "Scrum", "Kanban"];

export default function InfoButton({ className = '' }: InfoButtonStyle) {
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
            </DialogContent>
        
        </Dialog>
    );
}