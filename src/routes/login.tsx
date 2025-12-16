import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple/10 via-background to-blue/10 flex items-center justify-center px-6">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 border border-purple/20">
                {/* Logo placeholder */}
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-purple/20 border-2 border-dashed border-purple/40 rounded-lg flex items-center justify-center">
                        <span className="text-purple-dark text-xs font-semibold">LOGO</span>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-foreground text-center">
                    Welcome back
                </h1>
                <p className="mt-2 text-muted-foreground text-center text-sm">
                    Sign in to your account
                </p>

                <form className="mt-8 space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="focus:ring-purple focus:border-purple"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="focus:ring-purple focus:border-purple"
                        />
                    </div>

                    <Button className="w-full bg-purple-dark hover:bg-[#3d2d8a] text-white font-semibold mt-6">
                        Sign in
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-purple-dark font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
