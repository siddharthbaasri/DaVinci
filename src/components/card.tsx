type CardProps = {
    image: string;
    heading: string;
    text: string;
};

export default function Card({ image, heading, text }: CardProps) {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img className="rounded-t-lg object-contain h-80 max-w-full" src={image} alt="palceholder" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {heading}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {text}
            </p>
          </div>
        </div>
    )
}