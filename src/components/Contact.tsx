import React from 'react'
export default function Contact() {
    return (
        <div className="mt-12 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-center text-white">Contact Me</h1>
            <div className="flex flex-col items-start justify-center w-[24rem] gap-2">
            <label className="text-sm font-medium text-gray-300 mb-2">Email</label>
            <input type="email" className="form-input w-full rounded-md border-0 bg-[#1c2127] p-3 text-base text-white placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#1173d4]" placeholder="youremail@example.com" />
            <label className="text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea className="form-textarea w-full rounded-md border-0 bg-[#1c2127] p-3 text-base text-white placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#1173d4]" placeholder="Write your message here" />
            </div>
        </div>
    )
}