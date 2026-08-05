import { useEffect, useState } from "react";
import Button from "../common/Button";
import { X, LoaderCircle } from "lucide-react";

function TaskModal({ isOpen, mode = "create", task = null, loading = false, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Personal");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Todo");
  const [dueDate, setDueDate] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setCategory(task.category || "Personal");
      setPriority(task.priority || "Medium");
      setStatus(task.status || "Todo");
      setDueDate(task.dueDate || "");
    }

    else {
      setTitle("");
      setDescription("");
      setCategory("Personal");
      setPriority("Medium");
      setStatus("Todo");
      setDueDate("");
    }

    setErrors({});
  }, [task, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Task title is required.";
    }

    if (title.length > 100) {
      newErrors.title = "Maximum 100 characters allowed.";
    }

    if (description.length > 500) {
      newErrors.description = "Maximum 500 characters allowed.";
    }

    if (!dueDate) {
      newErrors.dueDate = "Please select a due date.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {

    if (!validate()) return;

    try {

      await onSubmit({
        title,
        description,
        category,
        priority,
        status,
        dueDate,
      });

      onClose();

    } catch (error) {
      // Modal open rahega agar request fail ho
    }

  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">

        <div className="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

            <h2 className="text-2xl font-bold text-slate-900">
              {mode === "create" ? "Create New Task" : "Edit Task"}
            </h2>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-slate-100 transition"
            >
              <X size={20} />
            </button>

          </div>

          {/* Body */}

          <div className="flex-1 overflow-y-auto space-y-5 p-6">

            {/* Title */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Task Title *
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />

              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title}
                </p>
              )}

            </div>

            {/* Description */}

            <div>

              <label className="mb-2 block text-sm font-medium">Description</label>

              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full resize-none rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />

              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}

            </div>

            {/* Category */}

            <div>

              <label className="mb-2 block text-sm font-medium">Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              >
                <option>College</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Health</option>
              </select>

            </div>

            {/* Priority */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Priority
              </label>

              <div className="flex flex-wrap gap-6">

                {["Low", "Medium", "High"].map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >

                    <input
                      type="radio"
                      value={item}
                      checked={priority === item}
                      onChange={(e) => setPriority(e.target.value)}
                    />

                    {item}

                  </label>

                ))}

              </div>

            </div>

            {/* Status */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Status
              </label>

              <div className="flex flex-wrap gap-6">

                {["Todo", "In Progress", "Completed"].map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >

                    <input
                      type="radio"
                      value={item}
                      checked={status === item}
                      onChange={(e) => setStatus(e.target.value)}
                    />

                    {item}

                  </label>

                ))}

              </div>

            </div>

            {/* Due Date */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Due Date *
              </label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />

              {errors.dueDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.dueDate}
                </p>
              )}

            </div>

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t border-slate-200 p-6">

            <Button
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={16}
                    className="animate-spin"
                  />
                  Saving...
                </>
              ) : (
                mode === "create"
                  ? "Save Task"
                  : "Update Task"
              )}
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TaskModal;