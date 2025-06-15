
function Navbar() {
    return (
        <>
            <nav className="flex flex-row flex-wrap items-center justify-between border-b-[1px] border-fuchsia-950 md:px-16 px-10 h-20">
                <p>
                    <a className="font-bold text-2xl" href="">
                        Amelinda
                    </a>
                </p>
                <div className="flex flex-row flex-wrap items-center justify-between gap-4 p-4">
                    {/* <p>
                        <a href="">Projects</a>
                    </p>
                    <p>
                        <a href="">Works</a>
                    </p>
                    <p>
                        <a href="">Contacts</a>
                    </p> */}
                </div>
                <button
                    className="bg-fuchsia-300 text-fuchsia-950"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                            "https://www.linkedin.com/in/amelinda-amelinda/";
                    }}
                >
                    Hit Me Up!
                </button>
            </nav>
        </>
    );
}

export default Navbar;
