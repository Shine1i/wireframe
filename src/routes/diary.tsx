import { createFileRoute } from '@tanstack/react-router'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
export const Route = createFileRoute('/diary')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="pt-20 mx-auto max-w-5xl ">
        <Button className="mb-12 w-1/2 pb-20 p-6 mx-auto bg-gray-900 hover:bg-gray-800 mt-6">
            Back to prepare
        </Button>

        <Card>
            <CardHeader className="Diay">
                <CardTitle className="text-3xl text-center">Diary</CardTitle>
                <CardDescription className="text-lg text-black/80">Here you can write about your experiences. It is also a section that you can use to comment on any Indexes from the CHECK section. You may conclude that it was not a red dot or a green dot. If you have a contact with a therapist, just give such a situation a short comment in the THERAPY NOTES section.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="text-xl font-bold">
                   <span>Memory</span>
                <Input
                    className="p-6"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                />
               </div>
            </CardContent>
            <CardFooter className="w-full">
                <div className="text-xl w-full font-bold">
                    <span>Text</span>
                    <Textarea className="py-20" placeholder="Type your message here." />
                </div>
            </CardFooter>
            <Button className="w-full w-72 p-6 mx-auto bg-gray-900 hover:bg-gray-800 mt-6">
                Sign in
            </Button>
        </Card>

    </div>
  );
}
