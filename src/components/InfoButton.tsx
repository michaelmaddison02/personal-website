// This Info button is used in siteHeaderNav.tsx
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

type InfoButtonStyle = {
    className?: string;
};

export default function InfoButton({ className = '' }: InfoButtonStyle) {
    return (
        <Dialog>
            <DialogTrigger asChild className={className}>
                <div className={className}>INFO</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}