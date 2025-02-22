import { Loader2 } from 'lucide-react'
import React, { FC } from 'react'

interface LoadingOverlayProps {
    loading: boolean
}

const LoadingOverlay:FC<LoadingOverlayProps> = ({ loading }) => {
    if(!loading) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
    )
}

export default LoadingOverlay