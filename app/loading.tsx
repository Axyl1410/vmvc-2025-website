import SpinnerbLoader from "@/components/ui/SpinnerbLoader";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SpinnerbLoader className="w-10 border-2 border-gray-300 border-r-gray-600" />
    </div>
  );
}
