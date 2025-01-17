import { useRouter } from 'next/router'

export default function BackButton () {
    const router = useRouter()

    return (
        <button className='bg-white p-2.5 rounded-md w-fit' onClick={() => router.back()}>go back</button>
    )
}