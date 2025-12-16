import { createFileRoute } from '@tanstack/react-router'
import {
    Card,
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
    <div className="min-h-screen bg-gradient-to-br from-periwinkle/10 via-background to-purple/10">
        <div className="pt-20 mx-auto max-w-5xl px-6">
            <Button className="mb-12 w-full sm:w-1/2 p-6 mx-auto block bg-periwinkle-dark hover:bg-[#2a2f8a] text-white">
                Back to prepare
            </Button>

            <Card className="border-2 border-periwinkle/30 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl text-center text-foreground">Diary</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                        Here you can write about your experiences. It is also a section that you can use to comment on any Indexes from the CHECK section. You may conclude that it was not a red dot or a green dot. If you have a contact with a therapist, just give such a situation a short comment in the THERAPY NOTES section.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="space-y-2">
                       <span className="text-lg font-semibold text-foreground">Memory</span>
                    <Input
                        className="p-6 focus:ring-periwinkle focus:border-periwinkle"
                        id="memory"
                        type="text"
                        placeholder="Name this memory..."
                    />
                   </div>
                </CardContent>
                <CardFooter className="w-full flex-col">
                    <div className="w-full space-y-2">
                        <span className="text-lg font-semibold text-foreground">Text</span>
                        <Textarea
                            className="min-h-[200px] focus:ring-periwinkle focus:border-periwinkle"
                            placeholder="Write about your experiences..."
                        />
                    </div>
                    <Button className="w-full sm:w-72 p-6 mx-auto bg-periwinkle-dark hover:bg-[#2a2f8a] text-white mt-6">
                        Save Entry
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
