import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="mx-auto max-w-5xl px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        {/* Logo placeholder */}
                        <div className="w-16 h-16 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center mb-6">
                            <span className="text-gray-500 text-xs">LOGO</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            12 Steps Safety Plan
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>

                        {/* Primary CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg"
                            >
                                12 Steps
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg"
                            >
                                Exercises
                            </Button>
                        </div>
                    </div>

                    {/* Right: Video placeholder */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md aspect-video bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                    <Play className="w-8 h-8 text-gray-500 ml-1" />
                                </div>
                                <span className="text-gray-400 text-sm">Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary section - Check status */}
            <div className="bg-gray-50 border-y border-gray-200">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">Check Your Status</h2>
                            <p className="mt-2 text-gray-600">Quick self-assessment to understand where you are</p>
                        </div>
                        <Button variant="outline" className="border-gray-300">
                            Take Assessment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
