export default function Footer() {
    return (
        <footer className="absolute bottom-0 flex h-32 w-full flex-col items-center justify-center">
            <h2 className="text-lg mb-1 font-semibold">Contact</h2>
            <span className="flex">
                <img
                    className="mr-2"
                    src="/icons/envelope.png"
                    alt="Email icon"
                ></img>
                piotrg9890@gmail.com
            </span>
            <p className="text-neutral-600">
                Icons by{' '}
                <a className="underline" href="https://icons8.com">
                    Icons8
                </a>
            </p>
        </footer>
    )
}
