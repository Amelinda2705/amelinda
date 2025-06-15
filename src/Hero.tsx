import hero from "./assets/images/hero.jpg";
import flutter from "./assets/images/flutter.svg";
import firebase from "./assets/images/firebase.svg";
import supabase from "./assets/images/supabase.svg";
import codeigniter from "./assets/images/codeigniter.svg";
import laravel from "./assets/images/laravel.svg";
import rive from "./assets/images/rive.svg";

function Hero() {
    return (
        <>
            <main className="flex md:flex-row flex-col h-[calc(100vh-80px)] border-b-[1px] border-fuchsia-950 mt-20 md:mt-0">
                <section className="basis-1/2 px-16 flex flex-col justify-center align-middle border-r-[1px] border-fuchsia-950 text-left">
                    <h1 className="font-bold ">Hello, I'm Amel</h1>
                    <p className="text-left pt-5 pb-8">
                        An independent and hard-working person with experience
                        in developing
                        <span className="font-bold">
                            {" "}
                            desktop, mobile, and web applications
                        </span>
                        , I am eager to contribute to dynamic teams and further
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
                <section className="basis-1/2 hidden md:block">
                    <img
                        className="h-full w-full object-cover"
                        src={hero}
                        alt=""
                    />
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
