import { createFileRoute } from '@tanstack/react-router'
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue/10 via-background to-purple/10">
            <div className="max-w-3xl mx-auto pt-16 px-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">Profile</h1>
                <p className="text-muted-foreground mb-10">Manage your account settings</p>

                <div className="bg-white rounded-xl shadow-lg border-2 border-blue/20 p-8">
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="First name"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="surname">Surname</Label>
                            <Input
                                id="surname"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="Last name"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input
                                id="new-password"
                                type="password"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="Confirm new password"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                                id="country"
                                className="p-6 focus:ring-blue focus:border-blue"
                                placeholder="Sweden"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full pt-4">
                            <Button className="p-6 bg-blue-dark hover:bg-[#1d3d8a] text-white font-semibold">
                                Save changes
                            </Button>
                            <Button className="p-6 bg-red-500 hover:bg-destructive/90 text-black font-semibold">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
