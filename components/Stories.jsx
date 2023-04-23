import Image from "next/image"

const Stories = ({ data }) => {
  return (
    <ul
      id="stories"
      className="mt-[60px]  md:mt-0 max-w-[585px] overflow-x-scroll flex gap-4 pb-5 pt-8 w-full pl-2 pr-3"
    >
      {data.results.map((user, i) => (
        <li
          key={user.name.first.toLowerCase()}
          className="flex-shrink-0 flex flex-col items-center justify-center pr-1"
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
  )
}

export default Stories
