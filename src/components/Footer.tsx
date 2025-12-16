export function Footer() {
    return (
        <footer className="bg-gray-100 absolute bottom-0 w-full border-t border-gray-300 py-8 mt-12">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    {/* EU Logo placeholder */}
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">EU</span>
                        </div>
                        <span className="text-gray-500 text-sm">Co-funded by the European Union</span>
                    </div>

                    {/* ELLIPSE Logo placeholder */}
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">ELLIPSE</span>
                        </div>
                        <span className="text-gray-500 text-sm">ELLIPSE Project</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
