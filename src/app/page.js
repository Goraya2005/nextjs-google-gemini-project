import GeminiBody from "@/components/GeminiBody";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <GeminiBody />
      </div>

    </div>
  );
}
