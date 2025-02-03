export function LoadingOverlay() {
    return (
      <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#004851] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-[#004851] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-[#004851] rounded-full animate-bounce"></div>
        </div>
      </div>
    )
  }
  
  