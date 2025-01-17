import colors from '../data/colors.json';
import BackButton from '../components/BackButton';

export async function getStaticPaths () {
    // loop through color array
    const paths = colors.map(color => ({
        // return an object with params.color set to the color's name
        params: { color: color.name }
    }))
    return {paths, fallback: false}
}
    
export async function getStaticProps ({params}) {
    // find the info for just one color
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format
    return {props: {color}}
}

export default function ColorPage ({color}) {
    return (
        <div style={{backgroundColor: color.hex}}>
            <h1>{color.name}</h1>
            <p>Hex code: {color.hex}</p>
            <BackButton />
        </div>
    )
}