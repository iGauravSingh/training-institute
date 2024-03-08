import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import ButtonGrey from "../Button/Button1";
import ButtonBlueHover from "../Button/button3";
import ButtonBlue from "../Button/Button2";

const eventData = [
  {
    id: 1,
    day: 10,
    month: "AUG",
    heading: "Hands On 3rd Regional Coaching Conference",
    city: "Montreal",
    state: "Canada",
    timeStart: "12:00 am",
    timeEnd: "05:00 pm",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus laudantium tenetur quia fuga expedita amet a libero autem. Voluptate.",
  },
  {
    id: 2,
    day: 10,
    month: "AUG",
    heading: "Hands On 4rd Regional Coaching Conference",
    city: "Montreal",
    state: "Canada",
    timeStart: "12:00 am",
    timeEnd: "05:00 pm",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus laudantium tenetur quia fuga expedita amet a libero autem. Voluptate.",
  },
  {
    id: 3,
    day: 15,
    month: "AUG",
    heading: "Hands On 5rd Regional Coaching Conference",
    city: "Montreal",
    state: "Canada",
    timeStart: "12:00 am",
    timeEnd: "05:00 pm",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus laudantium tenetur quia fuga expedita amet a libero autem. Voluptate.",
  },
  {
    id: 4,
    day: 16,
    month: "AUG",
    heading: "Hands On 6rd Regional Coaching Conference",
    city: "Montreal",
    state: "Canada",
    timeStart: "12:00 am",
    timeEnd: "05:00 pm",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus laudantium tenetur quia fuga expedita amet a libero autem. Voluptate.",
  },
  {
    id: 5,
    day: 17,
    month: "AUG",
    heading: "Hands On 7rd Regional Coaching Conference",
    city: "Montreal",
    state: "Canada",
    timeStart: "12:00 am",
    timeEnd: "05:00 pm",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus laudantium tenetur quia fuga expedita amet a libero autem. Voluptate.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className=" w-screen min-h-screen font-quicksand ">
      <div className="w-full h-full flex flex-col py-20 items-center">
        <div className=" w-[85%] flex flex-col justify-start">
          <h3 className=" text-newblue font-bold text-lg mb-16">
            UPCOMING EVENTS
          </h3>

          {eventData.map((evnt) => (
            <>
              {/* card containr  */}
              <div key={evnt.id} className=" flex border-b-2 justify-between items-center pb-5 pt-4">
                {/* Date Detail Container  */}
                <div className=" flex justify-between items-center gap-6">
                  {/* Date  */}
                  <div className=" w-[80px] h-[80px] rounded-xl bg-newblue text-white flex flex-col justify-center items-center">
                    <p className=" text-[1rem]">{evnt.month}</p>
                    <p className=" text-5xl font-bold">{evnt.day}</p>
                  </div>

                  {/* Details  */}
                  <div className=" flex flex-col gap-2">
                    <h3 className=" font-bold text-xl">
                      {evnt.heading}
                    </h3>
                    <div className=" flex gap-7">
                      {/* location  */}
                      <div className=" flex items-center">
                        <FaLocationDot size={12} color="#2e8ece" />
                        <p>
                          {eventData[1].city},{evnt.state}
                        </p>
                      </div>
                      {/* time  */}
                      <div className=" flex items-center">
                        <FiClock size={14} color="#2e8ece" />
                        <p>
                          {eventData[1].timeStart},{evnt.timeEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button  */}
                <div>
                  <ButtonBlueHover name="VIEW DETAIL" />
                </div>
              </div>

              {/* card containr  */}
            </>
          ))}
          {/* all events  */}
          <div className=" w-full flex justify-center items-center mt-12">
            <ButtonBlue name="ALL EVENTS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
