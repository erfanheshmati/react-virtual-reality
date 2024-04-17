import { resourcesLinks, platformLinks, communityLinks } from "../constants"

export default function Footer() {
    return (
        <>
            <footer className="mt-10 max-w-7xl mx-auto px-6 border-t py-10 border-neutral-700">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {resourcesLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-neutral-400 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Platform
                        </h3>
                        <ul className="space-y-2">
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-neutral-400 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Community
                        </h3>
                        <ul className="space-y-2">
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-neutral-400 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </footer>
            <div className="bg-neutral-900 p-4 text-center text-xs sm:text-base">
                &copy; 2024 All Rights Reserved | Developed By Erfan Heshmati
            </div>
        </>
    )
}
