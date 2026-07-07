export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#1a0a2e]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e]/80 via-[#1a0a2e] to-[#14082a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#3d2a5c]/25 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2d1b4e]/40 blur-[120px]" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-[#d4af37]/[0.03] blur-[100px]" />
    </div>
  )
}
