import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export default function Hero() {
    return (
        <div className="flex flex-col items-center lg:mt-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "} for developers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10 space-x-6">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 rounded-md hover:opacity-70">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 rounded-md border hover:opacity-70">
                    Documents
                </a>
            </div>
            <div className="flex my-4 justify-center space-x-4">
                <video className="rounded-lg w-1/2 border border-orange-700 shadow-red-400" autoPlay loop muted >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag!
                </video>
                <video className="rounded-lg w-1/2 border border-orange-700 shadow-red-400" autoPlay loop muted >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag!
                </video>
            </div>
        </div>
    )
}
