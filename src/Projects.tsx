import muslimpocket from "./assets/images/muslimpocket.svg";
import servicetime from "./assets/images/servicetime.svg";
import penareport from "./assets/images/penareport.svg";
import star from "./assets/images/star.svg";
import pokasi from "./assets/images/pokasi.png";
import flutter from "./assets/images/flutter.svg";
import firebase from "./assets/images/firebase.svg";
import supabase from "./assets/images/supabase.svg";
import codeigniter from "./assets/images/codeigniter.svg";
import rive from "./assets/images/rive.svg";
import csharp from "./assets/images/csharp.svg";
import sql from "./assets/images/microsoft-sql-server.svg";
import TiltedCard from "./lib/Components/TiltedCard/TiltedCard";

function Projects() {
    return (
        <>
            <section className="z-50 bg-[#fdf4ff]">
                <div className="w-full border-b-[1px] border-fuchsia-950 md:flex">
                    <div className="basis-1/2">
                        <img
                            className="h-full w-full object-cover md:hidden"
                            src={muslimpocket}
                            alt="Muslim Pocket Preview"
                        />
                        <TiltedCard
                            imageSrc={muslimpocket}
                            altText="Muslim Pocket"
                            captionText="Muslim Pocket"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={0}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent={false}
                        />
                    </div>
                    <div className="basis-1/2 p-16 flex flex-col justify-center align-middle">
                        <div className="flex align-middle">
                            <h2 className="font-bold text-left text-2xl mr-3">
                                Muslim Pocket
                            </h2>
                            {/* <svg
                                className="mt-[1px]"
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
                            </svg> */}
                        </div>
                        <p className="text-left pt-5 pb-7">
                            a simple and practical app that helps you stay
                            connected to your daily worship and faith with
                            features like a Solat Tracker, Online Tasbih,
                            location-based prayer times, and a digital Qur'an
                            with translations (in Indonesia).
                        </p>
                        <p className="text-left font-bold my-2">Made With : </p>
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
                                <img
                                    className="h-5"
                                    src={rive}
                                    alt="Rive Logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse w-full border-b-[1px] border-fuchsia-950 md:flex-row">
                    <div className="basis-1/2 p-16 flex flex-col justify-center align-middle">
                        <div className="flex align-middle">
                            <h2 className="font-bold text-left text-2xl mr-3">
                                Service Time
                            </h2>
                            {/* <svg
                                className="mt-[1px]"
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
                            </svg> */}
                        </div>
                        <p className="text-left pt-5 pb-7">
                            a smart mobile POS app for motorcycle service
                            shops—manage services and spare parts with ease, and
                            streamline operations with role-based access for
                            Admin, Owner, and Cashier. Fast, simple, and built
                            for your workshop.
                        </p>
                        <p className="text-left font-bold my-2">Made With : </p>
                        <div className="flex gap-3 h-8 items-center">
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
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img
                            className="h-full w-full object-cover md:hidden"
                            src={servicetime}
                            alt="Service Time Preview"
                        />
                        <TiltedCard
                            imageSrc={servicetime}
                            altText="Service Time"
                            captionText="Service Time"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={0}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent={false}
                        />
                    </div>
                </div>

                <div className="w-full border-b-[1px] border-fuchsia-950 md:flex">
                    <div className="basis-1/2">
                        <img
                            className="h-full w-full object-cover md:hidden"
                            src={penareport}
                            alt="Pena Report Preview"
                        />
                        <TiltedCard
                            imageSrc={penareport}
                            altText="Pena Report"
                            captionText="Pena Report"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={0}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent={false}
                        />
                    </div>
                    <div className="basis-1/2 p-16 flex flex-col justify-center align-middle">
                        <div className="flex align-middle">
                            <h2 className="font-bold text-left text-2xl mr-3">
                                Pena Report
                            </h2>
                            {/* <svg
                                className="mt-[1px]"
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
                            </svg> */}
                        </div>
                        <p className="text-left pt-5 pb-7">
                            a mobile application that simplifies the process for
                            students to create their entrepreneurship reports
                            and provides easier access to information on various
                            aspects of entrepreneurship.
                        </p>
                        <p className="text-left font-bold my-2">Made With : </p>
                        <div className="flex gap-3 h-8 items-center">
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
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse w-full border-b-[1px] border-fuchsia-950 md:flex-row">
                    <div className="basis-1/2 p-16 flex flex-col justify-center align-middle">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="flex align-middle">
                                <h2 className="font-bold text-left text-2xl mr-3">
                                    POKASI (Poin Pelanggaran Siswa)
                                </h2>
                                <svg
                                    className="mt-[1px]"
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
                        <p className="text-left pt-5 pb-7">
                            a smart school website system for tracking student
                            behavior through a point-based system. It records
                            rule violations with penalty points and also
                            encourages positive actions with reward
                            points—helping schools maintain discipline while
                            promoting good behavior in a balanced and
                            transparent way.
                        </p>
                        <p className="text-left font-bold my-2">Made With : </p>
                        <div className="flex gap-3 h-8 items-center">
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
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img
                            className="h-full w-full object-cover md:hidden"
                            src={pokasi}
                            alt="Pokasi Website Preview"
                        />
                        <TiltedCard
                            imageSrc={pokasi}
                            altText="POKASI (Poin Pelanggaran Siswa)"
                            captionText="POKASI (Poin Pelanggaran Siswa)"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={0}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent={false}
                        />
                    </div>
                </div>

                <div className="w-full border-b-[1px] border-fuchsia-950 md:flex">
                    <div className="basis-1/2">
                        <img
                            className="h-full w-full object-cover md:hidden"
                            src={star}
                            alt="STAR Hotel Preview"
                        />
                        <TiltedCard
                            imageSrc={star}
                            altText="STAR Hotel"
                            captionText="STAR Hotel"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={0}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent={false}
                        />
                    </div>
                    <div className="basis-1/2 p-16 flex flex-col justify-center align-middle">
                        <div className="flex align-middle">
                            <h2 className="font-bold text-left text-2xl mr-3">
                                STAR Hotel
                            </h2>
                            {/* <svg
                                className="mt-[1px]"
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
                            </svg> */}
                        </div>
                        <p className="text-left pt-5 pb-7">
                            a desktop application made for hotel management,
                            with cashier and admin role to simplifies the
                            transactions data and rooms data. All activities are
                            recorded make it easier to track a human error.
                        </p>
                        <p className="text-left font-bold my-2">Made With : </p>
                        <div className="flex gap-3 h-8 items-center">
                            <img
                                className="h-14 object-cover"
                                src={csharp}
                                alt="C# Logo"
                            />
                            <img
                                className="h-12 object-cover"
                                src={sql}
                                alt="Microsoft SQL Server Logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
