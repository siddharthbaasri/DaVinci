import Card from "../components/card"

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center py-16 bg-gray-50 sm:py-24 lg:py-32 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-700 dark:to-cyan-800"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg text-center max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block mb-6">Da Vinci Institute of Arts, Science and Humanities</span>
            </h1>
            <p className="mt-6 text-xl text-teal-50 max-w-4xl mb-6">
              Tens of Millions of students worldwide lack access to adequate education. Da Vinci Institute aims 
              to address this situation by offering affordable personalized education to students in need around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <Card image = {"./students.jpg"} heading = {"Of The Students, By The Students, For The Students"} 
            text = {`Da Vinci Institute's curricula are developed solely by tutors who
            have a deep understanding of students' needs. The lack of
            adherence to any common standard allows the lessons to be flexible
            and personalized for each student, helping the students to reach a
            level of understanding other institutions cannot provide with
            their traditional teaching methods`}/>

          <Card image = {'./education.jpg'} heading = {"Education For All"} 
            text = {`We firmly uphold the idea that education should be accessible to
            all. Thus, our class fees are strictly minimized and we offer fee
            waivers to students who cannot afford the classes. All revenue
            apart from the maintenance fee is used to directly contribute to
            our mission, either being donated to other educational charities,
            or added to the funds for the scholarship that we offer to our
            students.`}/>

          <Card image = {'./library.jpg'} heading = {"Unlimited Learning"} 
            text = { `Da Vinci Institute believes that all knowledge, regardless of
              subject, is valuable. The Institute aspires to provide all
              students with the support they need to develop and succeed as
              learners in all subjects. To achieve this, Da Vinci Institute
              provides courses in a wide variety of subjects for students in all
              levels of proficiency, and places great importance in expanding
              its curricula.`}/>

        </div>
      </div>
    </>

  );
}
