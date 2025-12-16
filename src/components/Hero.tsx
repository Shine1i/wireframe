import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Link} from "@tanstack/react-router";

export function HeroSection() {
    return (
        <div className="bg-background">
            {/* Hero section */}
            <div className="mx-auto max-w-5xl px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        {/* Logo placeholder */}
                        <div className="w-16 h-16 bg-purple/20 border-2 border-dashed border-purple/40 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-purple-dark text-xs font-semibold">
                                                                        <img src="https://12stepsplan.com/wp-content/plugins/apostrophe-twelve-steps/template/img/logo-min.png" alt="TanStack Logo" className="h-10" />

                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            12 Steps Safety Plan
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            12 Steps Safety Plan is your “friend” ready to help you navigate during the stormy periods of your life <br/>
                            <br/>
                            Learning how to navigate and sending an SOS & focusing on safety needs is the basis of survival during these extreme disturbing periods in life. These skills you can learn using this app. The more time you use it, the better results you can expect. You will also be better at helping others and more understanding of their needs.

                        </p>

                        {/* Primary CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-purple-dark hover:bg-[#3d2d8a] text-white px-8 py-6 text-lg"
                            >
                                12 Steps
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-purple-dark text-purple-dark hover:bg-purple/10 px-8 py-6 text-lg"
                            >
                                <Link   to="/exercises">
                                Exercises
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div className="flex justify-center  lg:justify-end">
                        <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/1RYU95XlOjE"
                                title="12 Steps Safety Plan"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img
                    src="https://12stepsplan.com/wp-content/plugins/apostrophe-twelve-steps/template/img/main/BANER_MAIN.png"
                    className="h-48 mx-auto mt-16 mb-16"/>
                <span
                    className="absolute text-white text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Login/Register</span>
            </div>
            <img src="https://12stepsplan.com/wp-content/uploads/2021/11/xbaner-EN-1.png.pagespeed.ic.C_k1K9XgVO.webp" className="h-48 mx-auto mt-16 mb-20 "/>
            {/* Secondary section - Check status */}
            <div className="bg-gradient-to-r  from-mint/20 via-teal/20 to-blue/20 border-y border-mint/30">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground">Check Your Status</h2>
                            <p className="mt-2 text-muted-foreground">Quick self-assessment to understand where you are</p>
                        </div>
                        <Button variant="outline" className="border-mint-dark text-mint-dark hover:bg-mint/20 font-semibold">
                            Take Assessment
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
