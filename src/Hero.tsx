import muslimpocket from "./assets/images/muslimpocket.svg";
import star from "./assets/images/star.svg";
import pokasi from "./assets/images/pokasi.png";
import flutter from "./assets/images/flutter.svg";
import firebase from "./assets/images/firebase.svg";
import supabase from "./assets/images/supabase.svg";
import codeigniter from "./assets/images/codeigniter.svg";
import laravel from "./assets/images/laravel.svg";
import rive from "./assets/images/rive.svg";
import SplitText from "./lib/TextAnimations/SplitText/SplitText";
import DescryptedText from "./lib/TextAnimations/DecryptedText/DecryptedText";
import CardSwap, { Card } from "./lib/Components/CardSwap/CardSwap";

function Hero() {
    return (
        <>
            <main className="flex md:flex-row flex-col h-[calc(100vh-80px)] border-b-[1px] border-fuchsia-950 mt-20 md:mt-0">
                <section className="basis-1/2 px-16 flex flex-col justify-center align-middle border-r-[1px] border-fuchsia-950 text-left">
                    <SplitText
                        text="Hello, I'm Amel"
                        className="text-6xl font-bold"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <p className="text-left pt-5 pb-8">
                        An independent and hard-working person with experience
                        in developing
                        <DescryptedText
                            className="font-bold"
                            text="desktop, mobile, and web applications. "
                            sequential={true}
                            speed={60}
                            animateOn="view"
                            useOriginalCharsOnly
                            maxIterations={10}
                        />
                        {/* <span className="font-bold">
                            {" "}
                            desktop, mobile, and web applications
                        </span> */}
                        I am eager to contribute to dynamic teams and further
                        enhance my problem-solving abilities.
                    </p>
                    <p className="text-left font-bold my-2 text-xl">
                        Language Skills :{" "}
                    </p>
                    <span className="font-semibold mb-3">
                        Indonesia (Native), English (Intermediate), Korea
                        (Beginner)
                    </span>
                    <p className="text-left font-bold my-2 text-xl">
                        Tech Skills :{" "}
                    </p>
                    <div className="flex gap-3 h-8 items-center flex-wrap">
                        <a
                            href="https://flutter.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 object-cover"
                                src={flutter}
                                alt="Flutter Logo"
                            />
                        </a>
                        <a
                            href="https://firebase.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 object-cover"
                                src={firebase}
                                alt="Firebase Logo"
                            />
                        </a>
                        <a
                            href="https://rive.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-5" src={rive} alt="Rive Logo" />
                        </a>

                        <a
                            href="https://supabase.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 object-cover"
                                src={supabase}
                                alt="Supabase Logo"
                            />
                        </a>
                        <a
                            href="https://codeigniter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 object-cover"
                                src={codeigniter}
                                alt="Codeigniter Logo"
                            />
                        </a>
                        <a
                            href="https://laravel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 object-cover"
                                src={laravel}
                                alt="Laravel Logo"
                            />
                        </a>
                    </div>
                </section>
                <section className="basis-1/2 hidden md:block ">
                    <div className="h-full w-full relative -z-10">

                    <CardSwap
                        cardDistance={60}
                        verticalDistance={40}
                        delay={3000}
                        skewAmount={6}
                            height={360}
                            
                        pauseOnHover
                    >
                        <Card className="text-white p-5">
                            <div className="flex gap-2 mb-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    >
                                        <rect
                                            width="16"
                                            height="22"
                                            x="4"
                                            y="1"
                                            rx="3"
                                        />
                                        <path d="M10 19h4" />
                                    </g>
                                </svg>
                                <h3 className="text-left">
                                    Mobile Development
                                </h3>
                            </div>
                            <img
                                className="object-cover"
                                src={muslimpocket}
                                alt="Muslim Pocket Preview"
                            />
                        </Card>
                        <Card className="text-white p-5">
                            <div className="flex gap-2 mb-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M8.095 1.546C11.381 1.279 16.586 1 24 1s12.619.279 15.905.546c3.532.287 6.263 3.017 6.55 6.55C46.722 11.38 47 16.585 47 24s-.278 12.619-.545 15.905c-.287 3.532-3.018 6.263-6.55 6.55C36.619 46.722 31.414 47 24 47s-12.619-.278-15.905-.545c-3.532-.287-6.263-3.018-6.55-6.55C1.28 36.619 1 31.414 1 24s.279-12.619.546-15.905c.287-3.532 3.017-6.263 6.55-6.55M5.175 14.5A239 239 0 0 0 5 24c0 7.314.275 12.41.532 15.58c.129 1.58 1.309 2.76 2.887 2.888C11.59 42.725 16.686 43 24 43s12.41-.275 15.58-.532c1.58-.129 2.76-1.309 2.888-2.887C42.725 36.41 43 31.314 43 24c0-3.73-.071-6.884-.176-9.5zm2.075-6c0-.966.784-1.75 1.75-1.75h2a1.75 1.75 0 1 1 0 3.5H9A1.75 1.75 0 0 1 7.25 8.5M17 6.75a1.75 1.75 0 1 0 0 3.5h2a1.75 1.75 0 1 0 0-3.5z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <h3 className="text-left">
                                    Website Development
                                </h3>
                            </div>
                            <img
                                className="object-cover"
                                src={pokasi}
                                alt="Pokasi Website Preview"
                            />
                        </Card>
                        <Card className="text-white p-5">
                            <div className="flex gap-2 mb-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M8.095 1.546C11.381 1.279 16.586 1 24 1s12.619.279 15.905.546c3.532.287 6.263 3.017 6.55 6.55C46.722 11.38 47 16.585 47 24s-.278 12.619-.545 15.905c-.287 3.532-3.018 6.263-6.55 6.55C36.619 46.722 31.414 47 24 47s-12.619-.278-15.905-.545c-3.532-.287-6.263-3.018-6.55-6.55C1.28 36.619 1 31.414 1 24s.279-12.619.546-15.905c.287-3.532 3.017-6.263 6.55-6.55M5.175 14.5A239 239 0 0 0 5 24c0 7.314.275 12.41.532 15.58c.129 1.58 1.309 2.76 2.887 2.888C11.59 42.725 16.686 43 24 43s12.41-.275 15.58-.532c1.58-.129 2.76-1.309 2.888-2.887C42.725 36.41 43 31.314 43 24c0-3.73-.071-6.884-.176-9.5zm2.075-6c0-.966.784-1.75 1.75-1.75h2a1.75 1.75 0 1 1 0 3.5H9A1.75 1.75 0 0 1 7.25 8.5M17 6.75a1.75 1.75 0 1 0 0 3.5h2a1.75 1.75 0 1 0 0-3.5z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <h3 className="text-left">
                                    Desktop Development
                                </h3>
                            </div>
                            <img
                                className="object-cover"
                                src={star}
                                alt="STAR Hotel Preview"
                            />
                        </Card>
                    </CardSwap>
                    </div>
                    {/* <img
                        className="h-full w-full object-cover"
                        src={hero}
                        alt=""
                    /> */}

                    {/* Photo by{" "}
                    <a href="https://unsplash.com/@altumcode?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        AltumCode
                    </a>{" "}
                    on{" "}
                    <a href="https://unsplash.com/photos/macbook-pro-on-black-wooden-table-PNbDkQ2DDgM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash
                    </a> */}
                </section>
            </main>
        </>
    );
}

export default Hero;
