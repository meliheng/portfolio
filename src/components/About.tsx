import React from 'react'

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-24 gap-10">
            <img src="https://www.serhatsirin.com/wp-content/uploads/2022/09/LinkedinyenibiriskariyercvloginiskurSecretCVelemannetcom_profil_fotografi_profile_photos_shoot.jpg" 
            alt="Profile" className="rounded-full w-48 h-48 mt-4" />
            <div className="flex flex-col items-start md:w-1/2 px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">Melihcan Yıldız</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1173d4] mb-4">Software Engineer</h2>
            <p className="text-gray-300 max-w-xl text-lg leading-relaxed text-left">Experienced software engineer specializing in web development and cloud technologies. Passionate about creating innovative solutions and contributing to impactful
            projects.
            </p>
            </div>
        </div>
    )
}