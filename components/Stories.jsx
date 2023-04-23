import Image from "next/image"

const Stories = ({ data }) => {
  return (
    <div
      id="stories"
      className="overflow-x-scroll overflow-hidden max-w-[620px]   mt-[60px]  md:mt-0"
    >
      <ul className="flex gap-2 mx-2 pt-8 pb-5 w-full px-2 md:px-0">
        {data.results.map((user, i) => (
          <li
            key={user.name.first.toLowerCase()}
            className="flex-shrink-0 flex flex-col items-center justify-center pr-4"
          >
            <div className="rounded-full overflow-hidden shadow-ring">
              <Image
                src={user.picture.large}
                alt=""
                height={54}
                width={54}
                className=" rounded-full"
              />
            </div>
            <p className="text-xs mt-2 font-medium">
              {user.name.first.toLowerCase()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Stories
