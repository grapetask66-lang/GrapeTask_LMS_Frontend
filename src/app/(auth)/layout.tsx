export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#010411] text-white selection:bg-[#f0591f] selection:text-white">
      {/* Background ambient effects common for auth pages */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#f0591f]/[0.03] to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/[0.02] blur-[150px] rounded-full" />
      </div>
      
      <main className="relative z-10 w-full min-h-screen flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
