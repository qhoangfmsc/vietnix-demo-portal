import React from 'react'

function TestPage() {
    return (
        <div className="space-y-4 p-8">
            <div className="bg-success text-white p-4 rounded-md">
                ✅ Success class test - Màu xanh lá
            </div>
            <div className="bg-warning text-white p-4 rounded-md">
                ⚠️ Warning class test - Màu cam vàng
            </div>
            <div className="bg-primary text-primary-foreground p-4 rounded-md">
                🔵 Primary class test - Màu xanh dương
            </div>
            <div className="bg-destructive text-white p-4 rounded-md">
                ❌ Destructive class test - Màu đỏ
            </div>
        </div>
    )
}

export default TestPage