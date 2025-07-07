import React from 'react'

function TestPage() {
    return (
        <div className="p-4">
            <div className="bg-success text-success-foreground p-4 rounded-md">
                ✅ Success class test
            </div>

            <div className="bg-[oklch(0.72_0.19_142)] text-[oklch(0.95_0_0)] p-4 rounded-md mt-4">
                ✅ Hardcoded color test
            </div>
        </div>
    )
}

export default TestPage