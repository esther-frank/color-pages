import colors from '../data/colors.json';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-700 text-4xl font-extrabold py-6'>Color list</h1>
            <ul className='max-w-7xl text-left'>
                {colors.map(color => (
                    <li className='py-2 list-none' key={color.name}>
                        <Link href={`/${color.name}`}>
                            <div>{color.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}