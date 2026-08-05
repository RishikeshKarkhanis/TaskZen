// Importing Components
import Navbar from "../layout/Navbar";
import StatsCards from "./StatsCards";
import Toolbar from "./Toolbar";
import ViewSelector from "./ViewSelector";
import TaskCard from "../task/TaskCard";
import TaskGrid from "../task/TaskGrid";
import TaskModal from "../modals/TaskModal";
import EmptyState from "../task/EmptyState";

// Dependencies
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import useTasks from "../../hooks/useTasks";

// Functions
import { getTaskStats } from "../../utils/taskStats";
import { filterTasks } from "../../utils/filterTasks";
import { sortTasks } from "../../utils/sortTasks";


const handleCreateTask = () => { setIsTaskModalOpen(true); };

function Dashboard() {

    const { tasks, loading, actionLoading, createNewTask, updateExistingTask, deleteExistingTask } = useTasks();
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [priorityFilter, setPriorityFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    const taskStats = getTaskStats(tasks);
    const filteredTasks = filterTasks(tasks, search, priorityFilter, categoryFilter, statusFilter);
    const sortedTasks = sortTasks(filteredTasks, sortBy);

    const handleCreateTask = () => {
        setSelectedTask(null);
        setIsTaskModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteExistingTask(id);
    };

    const handleEdit = (id) => {
        const task = tasks.find((t) => t._id === id);
        setSelectedTask(task);
        setIsTaskModalOpen(true);
    };

    const handleSaveTask = async (taskData) => {
        if (selectedTask) {
            await updateExistingTask(selectedTask._id, taskData);
        }
        else {
            await createNewTask(taskData);
        }

        // setSelectedTask(null);
        // setIsTaskModalOpen(false);
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleSort = () => {
        const options = ["newest", "oldest", "priority"];
        const currentIndex = options.indexOf(sortBy);
        const nextIndex = (currentIndex + 1) % options.length;
        setSortBy(options[nextIndex]);
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
                <div className="flex flex-col items-center text-center">

                    <LoaderCircle
                        size={56}
                        className="text-emerald-600 animate-spin"
                    />

                    <h1 className="mt-6 text-3xl font-bold text-slate-900">
                        Loading <span className="text-emerald-600">TaskZen</span>...
                    </h1>

                    <p className="mt-3 text-slate-600 text-lg">
                        Please wait while the backend starts on Render.
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        This may take up to 30–60 seconds if the server is waking up.
                    </p>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar onCreateTask={handleCreateTask} />
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Good to see you</h1>
                    <p className="mt-2 text-slate-500 text-lg">
                        Here's an overview of everything on your plate.
                    </p>
                </div>

                <StatsCards stats={taskStats} />

                <Toolbar
                    search={search}
                    sortBy={sortBy}
                    onSearchChange={handleSearch}
                    onSortClick={handleSort}
                />

                <ViewSelector
                    priorityFilter={priorityFilter}
                    categoryFilter={categoryFilter}
                    statusFilter={statusFilter}
                    setPriorityFilter={setPriorityFilter}
                    setCategoryFilter={setCategoryFilter}
                    setStatusFilter={setStatusFilter}
                />

                {sortedTasks.length > 0 ? (

                    <TaskGrid
                        tasks={sortedTasks}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                ) : (

                    <EmptyState
                        onCreateTask={handleCreateTask}
                    />

                )}

                <TaskModal
                    isOpen={isTaskModalOpen}
                    mode={selectedTask ? "edit" : "create"}
                    task={selectedTask}
                    loading={actionLoading}
                    onClose={() => {
                        setIsTaskModalOpen(false);
                        setSelectedTask(null);
                    }}
                    onSubmit={handleSaveTask}
                />
            </section>
        </main>
    );
}

export default Dashboard;