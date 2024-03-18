import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/navbar2/navbar2'

import vision from './vision.jpg';
import mission from './mission.jpg';
import Image from 'next/image';



const page = () => {
  return (
    <div>
      <Navbar2 />
      <div>
      <div className="flex flex-col justify-between p-4">
      <div className="flex items-center">
        <Image
          src={vision}
          alt="Placeholder"
          className=" w-[371px] mr-4"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">OUR-VISION</h2>
          <p className=" text-justify my-4">The “vision thing” is still with us, but while leaders insist in having a compelling vision, the fact is that many – both the leaders and the visions – leave people standing still, unmoved. A leader who engages stakeholders when developing a vision will, in the end, articulate one that resonates strongly and impels people to act.The way we manage energy and water will define this century. By applying knowledge and technology, together we can create a more resourceful world.Teamwork makes the dream work, but a vision becomes a nightmare when the leader has a big dream and a bad team.</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h2 className="text-xl font-bold mb-2">OUR-MISSION</h2>
          <p className=" text-justify my-4">Founded by a highly technical and experienced management team, this company is growing consistently based on successful installations and commissioning and rich after sales service support network and that too at very reasonable rates is winning hearts of our customers.My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. Everyone has his own specific vocation or mission in life; everyone must carry out a concrete assignment that demands fulfillment. Therein he cannot be replaced, nor can his life be repeated, thus, everyone’s task is unique as his specific opportunity to implement it.</p>
        </div>
        <Image
          src={mission}
          alt="Placeholder"
          className="w-[371px] ml-4"
        />
      </div>
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default page