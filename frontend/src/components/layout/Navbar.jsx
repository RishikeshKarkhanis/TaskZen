import { ClipboardCheck, Plus } from "lucide-react";
import Button from "../common/Button";

function Navbar({ onCreateTask }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <ClipboardCheck
              size={22}
              className="text-white"
            />
          </div>

          <h1 className="text-xl font-bold text-slate-900">
            TaskZen
          </h1>
        </div>

        {/* Button */}

        <Button onClick={onCreateTask}>
          <Plus size={18} />
          Create Task
        </Button>

      </div>
    </header>
  );
}

export default Navbar;