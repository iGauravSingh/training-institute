"use client";
import useEvents from "@/app/hooks/useEvents";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum MonthEnum {
  JAN = "JAN",
  FEB = "FEB",
  MAR = "MAR",
  APR = "APR",
  MAY = "MAY",
  JUN = "JUN",
  JUL = "JUL",
  AUG = "AUG",
  SEP = "SEP",
  OCT = "OCT",
  NOV = "NOV",
  DEC = "DEC",
}

interface EventForm {
  date: number;
  month: MonthEnum;
  heading: String;
  venue: String;
  state: String;
  city: String;
  detail: String;
  timeStart: String;
  timeEnd: String;
}

const EventManager = () => {
  const router = useRouter();

  const { data, error, loading, addEvent, deleteEvent } = useEvents();

  const [btndisableStatus, setbtndisableStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventForm>();

  const onSubmit: SubmitHandler<EventForm> = async ({
    date,
    month,
    heading,
    venue,
    state,
    city,
    detail,
    timeStart,
    timeEnd,
  }) => {
    try {
      await addEvent({
        date,
        month,
        heading,
        venue,
        state,
        city,
        detail,
        timeStart,
        timeEnd,
      });

      //console.log("add event sent from event manager");
      setbtndisableStatus(true);
      try {
        // Assuming successful form submission
        window.location.reload(); // Trigger full page reload
      } catch (error) {
        console.error(error);
        // Handle form submission errors (optional)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEvent = (id: number) => {
    //console.log('from delete event',id)
    deleteEvent(id);
    setbtndisableStatus(true);
    try {
      // Assuming successful form submission
      window.location.reload(); // Trigger full page reload
    } catch (error) {
      console.error(error);
      // Handle form submission errors (optional)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> some error happened</div>;
  }

  return (
    <div>
      {/* form to enter new event  */}
      <form
        className=" flex flex-col gap-6 px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* date  and  month */}
        <div className=" flex gap-4 pt-8">
          <div className=" flex flex-col">
            <input
              type="text"
              {...register("date", {
                required: "required and between 1 to 31 ",
                min: 1,
                max: 31,
              })}
              placeholder="Date eg 1-31"
            />
            <p className=" text-red-500 text-sm">{errors.date?.message}</p>
          </div>

          {/* month  */}
          <select {...register("month")}>
            <option value="JAN">JAN</option>
            <option value="FEB">FEB</option>
            <option value="MAR">MAR</option>
            <option value="APR">APR</option>
            <option value="MAY">MAY</option>
            <option value="JUN">JUN</option>
            <option value="JUL">JUL</option>
            <option value="AUG">AUG</option>
            <option value="SEP">SEP</option>
            <option value="OCT">OCT</option>
            <option value="NOV">NOV</option>
            <option value="DEC">DEC</option>
          </select>
        </div>

        {/* heading  */}
        <div>
          <input
            type="text"
            className=" w-[60%]"
            {...register("heading", {
              required: "this is required and should be minimum of 3 length",
              minLength: 3,
            })}
            placeholder="Event Name eg- Hands Python Django Workshop"
          />
          <p className=" text-red-500 text-sm">{errors.heading?.message}</p>
        </div>

        {/* venue city state  */}
        <div className=" flex gap-5">
          {/* venue  */}
          <div>
          <input
            type="text"
            {...register("venue", { required: 'please provide venue or place', minLength: 3 })}
            placeholder="Venue eg- SMS Collage"
          />
          <p className=" text-red-500 text-sm">{errors.venue?.message}</p>
          </div>
          {/* city  */}
          <div>
          <input
            type="text"
            {...register("city", { required: 'please provide city', minLength: 3 })}
            placeholder="city eg- Lucknow"
          />
          <p className=" text-red-500 text-sm">{errors.city?.message}</p>
          </div>
          {/* state  */}
          <div>
          <input
            type="text"
            {...register("state", { required: 'please provide state', minLength: 2 })}
            placeholder="State eg- U.P"
          />
          <p className=" text-red-500 text-sm">{errors.state?.message}</p>
          </div>
        </div>

        {/* start and end time */}
        <div className=" flex gap-5 w-full ">
          <div className=" w-[50%]">
          <input
            className=" w-[80%]"
            type="text"
            {...register("timeStart", { required: 'Event start time required' })}
            placeholder="Event Start Timimg eg- 10:00am"
          />
          <p className=" text-red-500 text-sm">{errors.timeStart?.message}</p>
          </div>
          <div className=" w-[50%]">
          <input
            className=" w-[80%]"
            type="text"
            {...register("timeEnd", { required: 'Event end time required' })}
            placeholder="Event End Timimg eg- 12:00 pm"
          />
          
          </div>
        </div>
        <div>
        <textarea
        className=" w-[60%] h-20"
          {...register("detail", { required: 'Event Details required' })}
          id=""
          placeholder="Details of event"
        ></textarea>
        <p className=" text-red-500 text-sm">{errors.detail?.message}</p>
        </div>
        <div className=" flex justify-center items-center ">
          <input
            disabled={btndisableStatus}
            className=" font-bold hover:border-2 hover:border-newblue cursor-pointer bg-newblue text-white hover:bg-white hover:text-newblue px-4 py-6 w-28 h-20 rounded-2xl"
            type="submit"
          />
        </div>
      </form>

      {/* event list with cross buton to delete event  */}
      {data &&
        data.map((evnt) => (
          <div key={evnt.id} className="">
            <div className=" flex justify-between items-center px-6 mt-6">
              <div className=" flex gap-6">
                <p>{evnt.date}</p>
                <p>{evnt.month}</p>
                <p>{evnt.heading}</p>
              </div>
              <div
                onClick={() => handleDeleteEvent(evnt.id)}
                className=" border-2 border-red-700 w-8 h-8 flex justify-center items-center cursor-pointer"
              >
                <button
                  disabled={btndisableStatus}
                  className=" text-xl font-bold text-red-700"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventManager;
