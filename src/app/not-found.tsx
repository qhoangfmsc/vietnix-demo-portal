import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ShoppingCart } from 'lucide-react'

export default function NotFound() {
    return (
        <div className='h-full text-center content-center'>
            <h1 className='text-6xl md:text-7xl font-bold text-foreground mb-4'>Không tìm thấy trang</h1>
            <p className='text-lg text-muted-foreground mb-8'>Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu.</p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 items-center'>
                <Button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 text-base font-semibold' asChild>
                    <Link href="/"><ShoppingCart className='mr-1' />Quay về trang mua sắm</Link>
                </Button>
                <Link href="/lien-he" className='flex items-center text-base text-muted-foreground font-medium hover:underline'>
                    Liên hệ hỗ trợ <ArrowRight className='ml-2' />
                </Link>
            </div>
        </div>
    )
}