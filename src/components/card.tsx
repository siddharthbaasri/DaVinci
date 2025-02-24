type CardProps = {
    image: string;
    heading: string;
    text: string;
};

export default function Card({ image, heading, text }: CardProps) {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-200">
          <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img className="rounded-t-lg object-cover object-top w-full h-60 max-w-full" src={image} alt="placeholder" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-700">
                {heading}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-500">
              {text}
            </p>
          </div>
        </div>
    )
}