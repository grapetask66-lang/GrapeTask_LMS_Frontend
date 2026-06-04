export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white p-6">
      <div className="text-center space-y-4 max-w-md">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-blue-500 text-3xl font-black">D</span>
        </div>
        <h1 className="text-3xl font-black">Student Dashboard</h1>
        <p className="text-[#a1a1aa] text-sm">
          Login hone ke baad aapka main dashboard yahan aayega jahan courses aur classes show hongi. Yeh page abhi design hona baqi hai!
        </p>
      </div>
    </div>
  );
}
