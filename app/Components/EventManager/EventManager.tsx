import useEvents from "@/app/hooks/useEvents";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface EventForm {
  date: number;
  month: String;
  heading: String;
  venue: String;
  state: String;
  city: String;
  detail: String;
  timeStart: String;
  timeEnd: String;
}

const EventManager = () => {
  const { data, error, loading, addEvent, deleteEvent } = useEvents();

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
      console.log("add event sent from event manager");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEvent =(id:number) => {
    console.log('from delete event',id)
    deleteEvent(id)
  }

  return (
    <div>
      {/* form to enter new event  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("date", { required: true })}
          placeholder="Date"
        />
        <input
          type="text"
          {...register("month", { required: true })}
          placeholder="Month"
        />
        <input
          type="text"
          {...register("heading", { required: true })}
          placeholder="Event Name"
        />
        <input
          type="text"
          {...register("venue", { required: true })}
          placeholder="Venue"
        />
        <input
          type="text"
          {...register("city", { required: true })}
          placeholder="city"
        />
        <input
          type="text"
          {...register("state", { required: true })}
          placeholder="State"
        />
        <input
          type="text"
          {...register("timeStart", { required: true })}
          placeholder="Event Start Timimg"
        />
        <input
          type="text"
          {...register("timeEnd", { required: true })}
          placeholder="Event End Timimg"
        />
        <textarea
          {...register("detail", { required: true })}
          id=""
          placeholder="Details of event"
        ></textarea>
        <input type="submit" />
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
              <div onClick={()=>handleDeleteEvent(evnt.id)} className=" border-2 border-red-700 w-8 h-8 flex justify-center items-center cursor-pointer">
                <p className=" text-xl font-bold">X</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventManager;
