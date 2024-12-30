import { Suspense } from "react";
import courses from "./courses.json"

type CourseCardProps = {
    name: string,
    description: string
}

function CourseCard({ name, description }: CourseCardProps) {
    return ( 
        <div className="flex flex-col w-full rounded-lg border overflow-hidden bg-white border-stone-200 max-w-xs shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h6 className="font-sans border-b-2 px-6 py-3 text-center antialiased font-bold text-base md:text-lg lg:text-xl text-current">{name}</h6>
            <div className="w-full flex-grow h-max rounded px-3.5 py-2.5">                
                <p className="font-sans antialiased text-base my-1 text-stone-600">{description}</p>
            </div>
            <div className="flex w-full px-3.5 pt-2 pb-3.5 rounded justify-center">
                <button className="inline-flex border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Register</button>
            </div>
        </div>
    )
}

export default async function Courses () {

    async function getCourses() {
        return courses;
    }

    const courseData = await getCourses();

    return (
        <div className = "py-10">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="container mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {courseData.map((course) => (
                            <CourseCard key = {course.courseId} name = {course.title} description = {course.description}/>
                        ))}
                    </div>
                </div>
            </Suspense>
        </div>
    )
}