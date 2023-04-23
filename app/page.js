import Card from "@/components/Card"
import RightSide from "@/components/RightSide"
import Sidebar from "@/components/Sidebar"
import Stories from "@/components/Stories"
import WideSidebar from "@/components/WideSidebar"
import React from "react"

const Home = async () => {
  // Fetch data from the API
  const res = await fetch(
    "https://randomuser.me/api/?results=14&inc=picture,name,location&noinfo?nat=us?seed=fubufoo"
  )

  const data = await res.json()
  const res2 = await fetch(
    "https://randomuser.me/api/?results=5&inc=picture,name,location&noinfo?nat=us?seed=fubu"
  )
  const data2 = await res2.json()
  return (
    <>
      <Sidebar />
      <WideSidebar />
      <div className="flex gap-6 justify-evenly xl:justify-center w-full">
        <div className="flex justify-center gap-14 w-full">
          <div className="flex flex-col md:ml-[74px] xl:ml-[244px] items-center justify-center w-full md:w-auto">
            <Stories data={data} />
            <div className="pb-12" id="cards">
              {data.results.map((user) => (
                <Card
                  key={user.name.first}
                  name={user.name.first}
                  picture={user.picture.large}
                  location={user.location.city}
                />
              ))}
            </div>
          </div>
          <RightSide data={data2} />
        </div>
      </div>
    </>
  )
}

export default Home
