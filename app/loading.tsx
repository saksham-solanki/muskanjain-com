export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blush">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full bg-coral/20 animate-ping" />
          <span className="absolute inset-2 rounded-full bg-coral animate-pulse" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-faint tabular">
          OPENING THE ROOM
        </span>
      </div>
    </div>
  )
}
