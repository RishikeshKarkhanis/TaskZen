import { ClipboardList, Plus } from "lucide-react";
import Button from "../common/Button";

function EmptyState({ onCreateTask }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-12">

      <div className="flex flex-col items-center text-center">

        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">

          <ClipboardList
            size={40}
            className="text-emerald-600"
          />

        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          No Tasks Found
        </h2>

        <p className="mt-3 text-slate-500 max-w-md">
          Create your first task to stay organized and keep
          track of your work.
        </p>

        <div className="mt-8">

          <Button onClick={onCreateTask}>
            <Plus size={18} />
            Create Task
          </Button>

        </div>

      </div>

    </div>
  );
}

export default EmptyState;