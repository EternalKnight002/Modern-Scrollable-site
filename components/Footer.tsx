export default function Footer() {
    return (
        <footer className="relative bg-black py-24 text-white/50">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">PulseAIR</h3>
                    <p className="text-sm">Designed in India.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-white">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Warranty</a></li>
                        <li><a href="#" className="hover:text-white">Recycle</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-white">Social</h4>
                    <div className="flex space-x-4">
                        {/* Simple text or icon placeholders */}
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
