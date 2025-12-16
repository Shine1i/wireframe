import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="w-full max-w-sm">
                {/* Logo placeholder */}
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">LOGO</span>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 text-center">
                    Welcome back
                </h1>
                <p className="mt-2 text-gray-500 text-center text-sm">
                    Sign in to your account
                </p>

                <form className="mt-8 space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 mt-6">
                        Sign in
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-gray-900 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
