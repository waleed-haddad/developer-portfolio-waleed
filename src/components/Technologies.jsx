import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import { SiJenkins } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <RiNodejsLine className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoPython className="text-7xl text-yellow-600"/>
            </div>
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <SiJenkins className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoDocker className="text-7xl text-blue-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies