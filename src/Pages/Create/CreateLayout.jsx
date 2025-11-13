import StepTracker from "../../Components/StepTracker";

export default function CreateLayout({ children, previewImage }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-1/5 p-6">
        <StepTracker />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">{children}</div>

      {/* Right Preview */}
      <div className="hidden lg:flex lg:w-1/4 p-6 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={previewImage || "/template1.jpg"}
            alt="Resume Preview"
            className="w-64 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
