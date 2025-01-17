import colors from "../data/colors.json"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-teal-900 text-5xl text-center font-extrabold py-6">
          Color list
        </h1>
        <ul className="text-left">
          {colors.map((color) => (
            <li
              className="py-2 list-none text-lg text-pink-900"
              key={color.name}
            >
              {/* hello, testing! */}
              <Link href={`/${color.name}`}>
                🎨
                <div className="inline underline decoration-dotted pl-2">
                  {color.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
