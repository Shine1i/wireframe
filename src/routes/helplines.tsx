import { createFileRoute } from "@tanstack/react-router";
import { Phone, Globe, Info, MessageSquare, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/helplines")({ component: HelplinesPage });

const helplines = [
    { number: "08457 909090", name: "Samaritans", category: "general" },
    { number: "0800 1111", name: "Childline", category: "youth" },
    { number: "0800 0185023", name: "Brook Young People's Information Service", category: "youth" },
    { number: "01494 793223", name: "Eating Disorder Support", category: "mental-health" },
    { number: "0844 477 5774", name: "Anxiety UK", category: "mental-health" },
    { number: "0845 123 23 20", name: "Depression Alliance", category: "mental-health" },
    { number: "01708 765200", name: "Rape Crisis Centre", category: "trauma" },
    { number: "0808 8000 123", name: "Rape/Sexual Assault (Female)", category: "trauma" },
    { number: "0808 8000 122", name: "Rape/Sexual Assault (Male)", category: "trauma" },
    { number: "01924 200799", name: "Miscarriage Association", category: "health" },
    { number: "0300 330 0630", name: "LLGS Helpline (LGBT)", category: "identity" },
    { number: "01708 765200", name: "Sexuality Support", category: "identity" },
    { number: "0800 9177 416", name: "Bereavement", category: "grief" },
    { number: "0808 8000 122", name: "Runaway/Homeless", category: "crisis" },
    { number: "0800 028 2228", name: "CareConfidential Pregnancy/Post Abortion", category: "health" },
    { number: "0345 023 468", name: "Domestic Violence Helpline", category: "trauma" },
    { number: "0800 567 123", name: "National AIDS Helpline", category: "health" },
];

function HelplinesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-6 py-10">
                    <h1 className="text-3xl font-semibold text-gray-900 text-center sm:text-4xl">
                        Helplines
                    </h1>
                    <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
                        Here you will find phone numbers and resources in your country. Call them if people from your contacts list are not available, or if you feel emotionally alone. A stranger who wants to help is just a call away.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="mx-auto max-w-4xl px-6 py-8">
                <Tabs defaultValue="call" className="w-full">
                    <TabsList className="grid w-full grid-cols-5 mb-8">
                        <TabsTrigger value="call" className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">Call</span>
                        </TabsTrigger>
                        <TabsTrigger value="website" className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <span className="hidden sm:inline">Website</span>
                        </TabsTrigger>
                        <TabsTrigger value="info" className="flex items-center gap-2">
                            <Info className="w-4 h-4" />
                            <span className="hidden sm:inline">Info</span>
                        </TabsTrigger>
                        <TabsTrigger value="chat" className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Chat</span>
                        </TabsTrigger>
                        <TabsTrigger value="find" className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="hidden sm:inline">Find Help</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="call">
                        <div className="border rounded-lg divide-y">
                            {helplines.map((helpline, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="min-w-0 flex-1">
                                        <p className="font-medium text-gray-900 text-sm truncate">{helpline.name}</p>
                                        <p className="text-xs text-gray-500">{helpline.number}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="ml-2 text-gray-600 hover:text-gray-900"
                                    >
                                        <Phone className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="website">
                        <div className="text-center py-12 text-gray-500">
                            <Globe className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>Website resources placeholder</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="info">
                        <div className="text-center py-12 text-gray-500">
                            <Info className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>Information placeholder</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="chat">
                        <div className="text-center py-12 text-gray-500">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>Chat services placeholder</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="find">
                        <div className="text-center py-12 text-gray-500">
                            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>Find local help placeholder</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Emergency notice */}
            <div className="border-t border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-4xl px-6 py-6 text-center">
                    <p className="text-sm text-gray-600">
                        In an emergency, always call <span className="font-semibold">999</span> or your local emergency number.
                    </p>
                </div>
            </div>
        </div>
    );
}
