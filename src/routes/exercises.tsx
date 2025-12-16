import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
    Wind,
    Trash2,
    Heart,
    MessageCircle,
    Phone,
    Play,
    Upload,
    Link as LinkIcon, Timer,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/exercises")({ component: ExercisesPage });

const exercises = [
    {
        id: "breathing",
        icon: Wind,
        title: "Breathing",
        description: "Slow, guided breathing to calm your nervous system",
        type: "video",
    },
    {
        id: "bin-memories",
        icon: Trash2,
        title: "Bin Memories",
        description: "Transform recurrent bad memories by finding positive meaning",
        type: "form",
    },
    {
        id: "supportive-memories",
        icon: Heart,
        title: "Supportive Memories",
        description: "Collect and revisit memories that bring you comfort",
        type: "form",
    },
];

const memoryTypes = [
    { value: "childhood", label: "Childhood" },
    { value: "relationship", label: "Relationship" },
    { value: "work", label: "Work/School" },
    { value: "loss", label: "Loss/Grief" },
    { value: "trauma", label: "Traumatic Event" },
    { value: "other", label: "Other" },
];

const supportiveMemoryTypes = [
    { value: "achievement", label: "Achievement" },
    { value: "connection", label: "Connection with others" },
    { value: "nature", label: "Nature/Places" },
    { value: "milestone", label: "Life Milestone" },
    { value: "kindness", label: "Act of Kindness" },
    { value: "other", label: "Other" },
];

type Exercise = (typeof exercises)[number];

function VideoContent() {
    return (
        <div className="mt-4 aspect-video bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                    <Play className="w-8 h-8 text-gray-500 ml-1" />
                </div>
                <span className="text-gray-400 text-sm">Video placeholder</span>
            </div>
        </div>
    );
}

function BinMemoriesForm() {
    return (
        <div className="mt-4 space-y-5">
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                Add recurrent bad memories you want to transform. Try to find something positive in each one.
                This challenging exercise often benefits from support — a friend, family member, or professional.
            </p>

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="memory-title">Memory Title</Label>
                    <Input id="memory-title" placeholder="Give this memory a name..." />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="memory-type">Type of Memory</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                            {memoryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="memory-description">Describe the Memory</Label>
                    <Textarea
                        id="memory-description"
                        placeholder="What happened? How did it make you feel?"
                        rows={3}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="positive-reframe">Positive Reframe</Label>
                    <Textarea
                        id="positive-reframe"
                        placeholder="What positive meaning or lesson can you find in this memory?"
                        rows={3}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="memory-link">Related Link</Label>
                        <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input id="memory-link" placeholder="https://..." className="pl-9" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Attachment</Label>
                        <Button variant="outline" className="w-full justify-start text-gray-500">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload file
                        </Button>
                    </div>
                </div>
            </div>

            <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gray-900 hover:bg-gray-800">Save Memory</Button>
            </DialogFooter>
        </div>
    );
}

function SupportiveMemoriesForm() {
    return (
        <div className="mt-4 space-y-5">
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                Collect memories that bring you comfort, joy, or strength. These can be moments of achievement,
                connection, or simply times when you felt at peace.
            </p>

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="supportive-title">Memory Title</Label>
                    <Input id="supportive-title" placeholder="Name this happy memory..." />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="supportive-type">Type of Memory</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                            {supportiveMemoryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="supportive-description">Describe the Memory</Label>
                    <Textarea
                        id="supportive-description"
                        placeholder="What happened? Who was there? How did you feel?"
                        rows={3}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="why-special">Why is this memory special?</Label>
                    <Textarea
                        id="why-special"
                        placeholder="What makes this memory meaningful to you?"
                        rows={2}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="supportive-link">Related Link</Label>
                        <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input id="supportive-link" placeholder="https://..." className="pl-9" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Photo/Attachment</Label>
                        <Button variant="outline" className="w-full justify-start text-gray-500">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload file
                        </Button>
                    </div>
                </div>
            </div>

            <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gray-900 hover:bg-gray-800">Save Memory</Button>
            </DialogFooter>
        </div>
    );
}

function ExercisesPage() {
    const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

    const renderDialogContent = () => {
        if (!selectedExercise) return null;

        switch (selectedExercise.id) {
            case "breathing":
                return <VideoContent />;
            case "bin-memories":
                return <BinMemoriesForm />;
            case "supportive-memories":
                return <SupportiveMemoriesForm />;
            default:
                return <VideoContent />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Exercise Dialog */}
            <Dialog open={!!selectedExercise} onOpenChange={(open) => !open && setSelectedExercise(null)}>
                <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
                    {selectedExercise && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <selectedExercise.icon className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <DialogTitle>{selectedExercise.title}</DialogTitle>
                                        <DialogDescription>{selectedExercise.description}</DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                            {renderDialogContent()}
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Header with reassurance */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-6 py-10 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                        You're not alone
                    </p>
                    <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                        Take a moment to breathe
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Choose any exercise below. There's no right order — pick what feels right for you right now.
                    </p>
                </div>
            </div>

            {/* Exercise cards */}
            <div className="mx-auto max-w-4xl px-6 py-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.map((exercise) => (
                        <Card
                            key={exercise.title}
                            onClick={() => setSelectedExercise(exercise)}
                            className="group cursor-pointer border-2 border-gray-200 hover:border-gray-400 transition-colors"
                        >
                            <CardHeader className="text-center py-8">
                                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                    <exercise.icon className="w-7 h-7 text-gray-600" />
                                </div>
                                <CardTitle className="text-lg text-gray-900">
                                    {exercise.title}
                                </CardTitle>
                                <CardDescription className="text-gray-500 mt-2">
                                    {exercise.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Talk to someone section */}
            <div className="border-t border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-4xl px-6 py-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Need to talk?
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Reach out to someone who can help
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="border-gray-300">
                                <Phone className="w-4 h-4 mr-2" />
                                Helplines
                            </Button>
                            <Button className="bg-gray-900 hover:bg-gray-800">
                                My Contacts
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timer/Quick actions */}
            <div className="border-t border-gray-200">
                <div className="mx-auto max-w-4xl px-6 py-8">
                    <div className="flex items-center justify-center gap-6 text-gray-500">
                        <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <Timer className="w-5 h-5" />
                            <span className="text-sm">Set a timer</span>
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">Daily check-in</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
