import { useRouter } from 'next/router'

export default function BackButton () {
    const router = useRouter()

    return (
        <button style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}} className='w-fit' onClick={() => router.back()}>go back</button>
    )
}