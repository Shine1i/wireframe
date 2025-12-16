import { createFileRoute } from '@tanstack/react-router'
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="max-w-3xl mx-auto pt-16">
            <div className=" rounded-xl  max-w-4xl  text-4xl font-bold">Profile</div>
            <div className="flex flex-col gap-4 pt-10">
            <Input type="email" className="p-6" placeholder="Namn"/>
            <Input type="email" className="p-6" placeholder="Efternamn"/>
            <Input type="email" className="p-6" placeholder="Email"/>
            <Input type="email" className="p-6" placeholder="New Password"/>
            <Input type="email" className="p-6" placeholder="Confirm new password"/>
            <Input type="email" className="p-6" placeholder="Sweden"/>
                <div className="grid grid-cols-2 gap-4 w-full">
                <Button className="p-6  bg-green-500">
                    Save changes
                </Button>
                    <Button className="p-6 bg-red-500">
                    Logout
                </Button>
                </div>
            </div>


        </div>
    );
}