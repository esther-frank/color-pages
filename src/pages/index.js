import colors from "../data/colors.json"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-green-700 text-5xl text-center font-extrabold py-6">
          Color list
        </h1>
        <ul className="text-left">
          {colors.map((color) => (
            <li className="py-2 list-none text-lg" key={color.name}>
              <Link href={`/${color.name}`}>
                <div>{color.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
