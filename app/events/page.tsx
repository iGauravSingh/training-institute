
import Navbar2 from '../Components/navbar2/navbar2'
import Footer from '../Components/Footer/Footer'

import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import useEvents from "@/app/hooks/useEvents";

const page = () => {

    const { data, error, loading } = useEvents();

    if(loading) {
        return <div>Loading...</div>
    }

  return (
    <div>
        <Navbar2 />
        <div>
        <div className=" w-screen min-h-screen font-quicksand ">
      <div className="w-full h-full flex flex-col py-20 items-center">
        <div className=" w-[85%] flex flex-col justify-start">
          <h3 className=" text-newblue font-bold text-lg mb-16">
            UPCOMING EVENTS
          </h3>

          {data?.reverse().map((evnt) => (
            <div key={evnt.id}>
              {/* card containr  */}
              <div className=" flex border-b-2 justify-between items-center pb-5 pt-4">
                {/* Date Detail Container  */}
                <div className=" flex justify-between items-center gap-6">
                  {/* Date  */}
                  <div className=" w-[80px] h-[80px] rounded-xl bg-newblue text-white flex flex-col justify-center items-center">
                    <p className=" text-[1rem]">{evnt.month}</p>
                    <p className=" text-5xl font-bold">{evnt.date}</p>
                  </div>

                  {/* Details  */}
                  <div className=" flex flex-col gap-2">
                    <h3 className=" font-bold text-xl">
                      {evnt.heading}
                    </h3>
                    <div>
                        <p className=' font-roboto'>{evnt.detail}</p>
                    </div>
                    <div className=" flex gap-7">
                      {/* college  */}
                      <div className=" flex items-center">
                        <FaUniversity size={12} color="#2e8ece" />
                        <p>
                          {evnt.venue}
                        </p>
                      </div>
                      {/* location  */}
                      <div className=" flex items-center">
                        <FaLocationDot size={12} color="#2e8ece" />
                        <p>
                          {evnt.city},{evnt.state}
                        </p>
                      </div>
                      {/* time  */}
                      <div className=" flex items-center">
                        <FiClock size={14} color="#2e8ece" />
                        <p>
                          {evnt.timeStart},{evnt.timeEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button  */}
                
              </div>

              {/* card containr  */}
            </div>
          ))}
          {/* all events  */}
          
        </div>
      </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default page