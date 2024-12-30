import Card from "../components/card"

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center py-16 bg-gray-50 sm:py-24 lg:py-32 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-neutral-700 dark:to-neutral-800"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg text-center max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block mb-6">I am learning Tailwind Elements</span>
              <span className="block text-3xl">and its awesome</span>
            </h1>
            <p className="mt-6 text-xl text-teal-50 max-w-3xl mb-6">
              Tailwind Elements is a fantastic library, offering reusable UI components that save development time, ensure
              design consistency, and boost productivity. Its seamless integration with Tailwind CSS enables effortless
              customization.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <Card image = {'https://tecdn.b-cdn.net/img/new/textures/small/1.jpg'} heading = {"Are you ready?"} 
            text = {"A great adventure is ahead of us! Get ready for a fascinating journey into the world of web design 🚀"}/>

          <Card image = {'https://tecdn.b-cdn.net/img/new/textures/small/103.jpg'} heading = {"UI and UX"} 
            text = {"We will explore the unknown lands of creating great interfaces and designing the perfect user experience"}/>

          <Card image = {'https://tecdn.b-cdn.net/img/new/textures/small/56.jpg'} heading = {"Future of web dev"} 
            text = {"You know the saying that the future is today? There is no need to delay, lets start our journey"}/>

        </div>
      </div>
    </>

  );
}
