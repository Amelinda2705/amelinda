function Contacts() {
    return (
        <>
            <div className="py-16 md:px-96 px-16 w-full border-b-[1px] border-fuchsia-950">
                <div className="flex align-middle">
                    <h2 className="font-bold text-left text-2xl mr-3">
                        Contact me
                    </h2>
                </div>
                <div className="text-left pt-5 pb-7">
                    <a
                        href="https://www.linkedin.com/in/amelinda-amelinda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold"
                    >
                        <div className="w-full h-14 border-[1px] border-fuchsia-950 flex justify-start p-5 items-center">
                            Linkedin
                            <svg
                                className="mt-[1px] ml-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                />
                            </svg>
                        </div>
                    </a>
                    <a
                        href="https://github.com/Amelinda2705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold"
                    >
                        <div className="w-full h-14 border-r-[1px]  border-l-[1px] border-b-[1px] border-fuchsia-950 flex justify-start p-5 items-center">
                            Github
                            <svg
                                className="mt-[1px] ml-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                />
                            </svg>
                        </div>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1HJ1GQJBmghIw3PNBbQH2CWieAhKKDb5e/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold"
                    >
                        <div className="w-full h-14 border-r-[1px]  border-l-[1px] border-b-[1px] border-fuchsia-950 flex justify-start p-5 items-center">
                            CV
                            <svg
                                className="mt-[1px] ml-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contacts;
