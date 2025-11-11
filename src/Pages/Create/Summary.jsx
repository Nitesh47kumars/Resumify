import { useStep } from "../../Context/StepContext";

export default function Summary() {
  const { formData } = useStep();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Summary</h1>
      <pre className="bg-gray-100 p-4 rounded w-full max-w-xl text-sm">
        {JSON.stringify(formData, null, 2)}
      </pre>
      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
        Generate Resume
      </button>
    </div>
  );
}
