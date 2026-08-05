import { CalendarDays, SquarePen, Trash2 } from "lucide-react";
import { formatDate } from "../../utils/formatDate";

function TaskCard({title, description, priority, status, category, dueDate, onEdit, onDelete }) {

  const isOverdue = new Date(dueDate) < new Date() && status !== "Completed";

  const priorityStyles = 
    {
      High: {
        border: "border-t-red-500",
        badge: "bg-red-100 text-red-600",
      },

      Medium: {
        border: "border-t-orange-500",
        badge: "bg-orange-100 text-orange-600",
      },

      Low: {
        border: "border-t-emerald-500",
        badge: "bg-emerald-100 text-emerald-600",
      },
    };

  const statusStyles = 
    {
      Todo: "bg-slate-100 text-slate-600", "In Progress": "bg-blue-100 text-blue-600",
      Completed: "bg-green-100 text-green-600",
    };

  const priorityStyle = priorityStyles[priority] || priorityStyles.Low;

  return (
    <div
      className={`bg-white border border-slate-200 border-t-4 ${priorityStyle.border} rounded-2xl
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-6`}
    >

      {/* Title */}
      <h2 className="text-xl font-bold text-slate-900">{title} </h2>

      {/* Description */}
      <p className="mt-3 text-slate-500 leading-relaxed">{description}</p>

      {/* Badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityStyle.badge}`}>
          {priority}
        </span>

        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
          {status}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
          {category}
        </span>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <CalendarDays size={16} />
          <span className={isOverdue ? "text-red-500 font-medium" : ""}>{formatDate(dueDate)}</span>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onEdit} className=" p-2 rounded-lg text-slate-500 hover:bg-blue-100 
              hover:text-blue-600 transition"
          >
            <SquarePen size={18} />
          </button>

          <button onClick={onDelete} className=" p-2 rounded-lg text-slate-500 hover:bg-red-100 
            hover:text-red-600 transition"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;