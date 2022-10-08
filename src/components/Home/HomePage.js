import { Transition } from "@headlessui/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { mainPageImageAlt } from "../../utils/textForImages";

export const HomePage = () => {

    return (
        <>

                
                <div className=" transition ease-in-out delay-150  max-w-full  mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">

                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Proyectos para</span>{' '}
                                <span className="block text-green-600 xl:inline"> la vida</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                En wolrd-in-net  queremos darle al usuario un espacio para crecer y para el aprendizaje, para la organizacion y el estudio, un espacio para si mismo, este espacio le ofrecera al usuario distintas aplicaciones que le ayudaran en su dia a dia</p>

                        </div>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    className="transition ease-in-out delay-150  flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-900 md:py-4 md:px-10 md:text-lg"
                                    to={"/principal"}>Ingresa al sitio</Link>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0">

                        <img className="h-60 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full imgLogo" alt={mainPageImageAlt} />
 
                    </div>
                </div>
            
        </>
    )
}