import React from "react";

const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 flex flex-wrap items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-[500px]" src="https://i.pinimg.com/564x/63/be/61/63be6107f4740d7c71813de60bb849d4.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-wrap flex-col justify-center w-[100%] gap-8 pt-12 mt-[100px]">
                <div className="w-full lg:w-8/12 lg:pt-8 flex flex-wrap ">
                    <div className=" lg:gap-4 shadow-lg rounded-md">

                      <div className="flex p-10  " >
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Scrum Master</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Laith</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Product Owner</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Shahed</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Quality Assurance</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Lorans</p>
                        </div>
                      </div>

                      <div className="flex p-10">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Team Meamber</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Osama</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Team Meamber</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mohammad</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Team Meamber</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Haitham</p>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;