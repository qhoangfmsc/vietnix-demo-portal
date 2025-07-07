import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function TestRedirectButton() {
    return (
        <Button asChild>
            <Link href="/test">
                Test
            </Link>
        </Button>
    )
}

export default TestRedirectButton