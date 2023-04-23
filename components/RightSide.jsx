import Image from "next/image"
import Link from "next/link"

const RightSide = ({ data }) => {
  return (
    <div className="min-w-[316px] max-w-[326px] relative hidden lg:block pt-8">
      <div className="hidden  lg:block   min-w-[316px] max-w-[326px]">
        {/* image with name */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/face.jpg"
              width={57}
              className="rounded-full"
              height={100}
              alt="face"
            />
            <div>
              <h6 className="text-sm font-semibold">clffsnchz</h6>
              <p className="text-sm opacity-90 -translate-y-0.5">
                Cliff Sanchez
              </p>
            </div>
          </div>
          <p className="text-xs font-semibold text-[#0095F6]">Switch</p>
        </div>
        {/* suggested text */}
        <div className="flex justify-between items-center">
          <h6 className=" text-sm -translate-y-0.5 font-semibold text-neutral-600 pt-4 pb-3">
            Suggested for you
          </h6>
          <p className="text-xs font-semibold">See All</p>
        </div>
        {/* list of recommended  */}
        <ul className="pl-1">
          {data.results.map((user) => (
            <li key={user.name.first} className="mb-3 ">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Image
                    src={user.picture.large}
                    width={35}
                    className=" rounded-full border border-neutral-200"
                    height={100}
                    alt="face"
                  />
                  <div>
                    <h6 className="text-sm font-semibold">{user.name.first.toLowerCase()}</h6>
                    <p className="text-xs opacity-90 -translate-y-0.5">
                      {user.name.first + " " + user.name.last}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095F6]">Follow</p>
              </div>
            </li>
          ))}
        </ul>
        {/* site links */}
        <ul
          id="site-links"
          className="text-xs text-neutral-400 flex flex-wrap gap-x-1 gap-y-1 mt-10"
        >
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Help</Link>
          </li>
          <li>
            <Link href="/">Press</Link>
          </li>
          <li>
            <Link href="/">API</Link>
          </li>
          <li>
            <Link href="/">Jobs</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/">Terms</Link>
          </li>
          <li>
            <Link href="/">Locations</Link>
          </li>
          <li>
            <Link href="/">Language</Link>
          </li>
          <li>
            <Link href="/">Meta Verified</Link>
          </li>
        </ul>
        {/* copyright */}
        <p className="mt-4 text-xs text-neutral-400">
          &copy; 2023 CSD FOR INSTAGRAM FROM META
        </p>
      </div>
    </div>
  )
}

export default RightSide
