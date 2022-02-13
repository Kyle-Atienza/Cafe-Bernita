import { useRouter } from "next/router";

import cafeBernita from "../../assets/cafe-bernita.png";
import swirl from "../../assets/swirl-1.svg";
import card2Img from "../../assets/card1-img.png";

import Image from "next/image";
import React from "react";

function HomeContent() {
  const router = useRouter();

  return (
    <div className="px-5 mx-auto">
      <div className="hero h-screen p-5 flex justify-center flex-col md:p-28 ">
        <div className="content md:-translate-y-14">
          <h1 className="font-rozha text-6xl md:text-8xl text-white h-min md:w-min">
            Taste something different
          </h1>
          <button
            className=" bg-primary w-fit py-3 px-8 mt-4  hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white"
            onClick={() => router.push("/menu")}
          >
            Order Now
          </button>
        </div>
      </div>

      <article className="content container mx-auto  mt-48">
        <div className="about-us flex relative flex-col h-screen bg-primary lg:flex-row-reverse md:h-[50vh] ">
          <p className="text-white text-center basis-2/5 grid place-items-center px-10 text-sm lg:place-items-start lg:px-20 self-center z-30">
            Cafe Bernita is a family run business which offers variety of
            homemade dishes that is focused on bringing authentic flavor to the
            table, our menu is mainly based of mushroom dishes along with
            traditional filipino cuisines. Cafe bernita is happy to be part of
            many peoples lives, bringing them happiness through delicous food.
          </p>
          <div className="image h-full relative basis-3/5 overflow-clip lg:overflow-visible">
            <div className="img bottom-0 lg:hidden relative h-full">
              <Image
                src={cafeBernita}
                className="absolute-important"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <div className="img bottom-0 hidden absolute lg:block h-fit w-full">
              <Image
                src={cafeBernita}
                className="object-cover"
                layout="responsive"
                alt=""
              />
            </div>
          </div>

          <div className="svg absolute -right-20 -bottom-20 z-20 pointer-events-none">
            <div className="swirl w-96 sm:w-[60vw] lg:w-[40vw]">
              <Image src={swirl} className="drop-shadow-2xl" layout="" alt="" />
            </div>
          </div>
        </div>

        <div className="cards mt-10 flex flex-col gap-5 lg:flex-row">
          <div
            className="card aspect-square sm:aspect-[2/1] lg:aspect-square relative  flex-1"
            id="card1"
          >
            <div className="content p-14 text-center h-full flex-col flex justify-end text-dark">
              <i className="fas fa-utensils text-xl mb-5"></i>
              <h3 className="text-5xl font-bold">Cravings on Trays</h3>
            </div>
          </div>
          <div
            className="card aspect-square sm:aspect-[2/1] lg:aspect-square relative brightness-100 overflow-clip  flex-1"
            id="card2"
          >
            <div className="content h-full flex flex-col relative z-20 sm:flex-row sm:items-center lg:flex-col lg:items-start p-14">
              <div className="text text-white">
                <h3 className="text-5xl font-bold">Pick-up</h3>
                <h3 className="text-5xl font-bold">Delivery</h3>
                <p className="mt-3  uppercase text-xs tracking-widest">
                  San Teodoro Area Only*
                </p>
              </div>
              <i className="fas fa-motorcycle text-white text-[8rem] mt-auto"></i>
            </div>
            <div
              className="image absolute w-full h-full top-0 left-0 brightness-75 z-10 hover:scale-110 ease-in-out duration-300"
              id="image"
            >
              <Image
                src={card2Img}
                alt=""
                className="absolute-important"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div
            className="card aspect-square sm:aspect-[2/1] lg:aspect-square relative flex-1"
            id="card3"
          >
            <div className="content p-14 sm:grid sm:place-items-end lg:place-items-start h-full">
              <h3 className="text-5xl font-bold text-dark text-right">
                Oyster Mushroom Dishes
              </h3>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default HomeContent;
