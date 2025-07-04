import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
    return (
        <div className='h-full text-center content-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl md:text-7xl font-bold text-gray-900 mb-4'>Không tìm thấy trang</h1>
                <p className='text-lg text-gray-500 mb-8'>Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu.</p>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 items-center'>
                    <Button className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 text-base font-semibold' asChild>
                        <Link href="/">Quay về trang chủ</Link>
                    </Button>
                    <Link href="/lien-he" className='flex items-center text-base text-gray-700 font-medium hover:underline'>
                        Liên hệ hỗ trợ <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                </div>
            </div>
        </div>
    )
}