export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple/5 via-blue/5 to-mint/5 w-full border-t border-purple/20 py-8 mt-auto">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    {/* EU Logo placeholder */}
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-blue/20 border-2 border-dashed border-blue/40 rounded flex items-center justify-center">
                            <span className="text-blue-dark text-xs font-semibold">EU</span>
                        </div>
                        <span className="text-muted-foreground text-sm">Co-funded by the European Union</span>
                    </div>

                    {/* ELLIPSE Logo placeholder */}
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-purple/20 border-2 border-dashed border-purple/40 rounded flex items-center justify-center">
                            <span className="text-purple-dark text-xs font-semibold">ELLIPSE</span>
                        </div>
                        <span className="text-muted-foreground text-sm">ELLIPSE Project</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
