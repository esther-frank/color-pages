import colors from "../data/colors.json"
import BackButton from "../components/BackButton"

export async function getStaticPaths() {
  // loop through color array
  const paths = colors.map((color) => ({
    // return an object with params.color set to the color's name
    params: { color: color.name }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // find the info for just one color
  const color = colors.find((color) => color.name === params.color)
  // return it in the necessary format
  return { props: { color } }
}

export default function ColorPage({ color }) {
  return (
    <div
      style={{ background: color.hex }} className="p-8 flex flex-col gap-8 h-full"
    >
      <h1 className="text-4xl font-extrabold">{color.name}</h1>
      <p className="text-2xl font-medium">Hex code: {color.hex}</p>
      <BackButton />
    </div>
  )
}
