import React from 'react'
import projects from '../projects.json'
export default function Projects() {
    return (
        <div className="bg-gray-900 px-4 md:px-10 mt-24">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-center text-white pt-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-12">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-start bg-[#1c2127] transform hover:-translate-y-2 transition-transform duration-300 shadow-lg rounded-lg h-[20rem] overflow-hidden">
                        <img src={project.image} alt={project.name} className="h-1/2 object-cover w-full" />
                        <h2 className="text-start text-white text-xl font-semibold px-4 pt-4 pb-2">{project.name}</h2>
                        <p className="text-start text-gray-400 text-sm px-4">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}