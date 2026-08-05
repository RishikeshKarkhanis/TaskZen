function ViewSelector({

    priorityFilter,

    categoryFilter,

    statusFilter,

    setPriorityFilter,

    setCategoryFilter,

    setStatusFilter,

}) {

    const priorities = [
        "All",
        "High",
        "Medium",
        "Low",
    ];

    const categories = [
        "All",
        "College",
        "Personal",
        "Work",
        "Health",
        "Career",
        "Study",
    ];

    const handlePriority = () => {

        const current = priorities.indexOf(priorityFilter);

        const next = (current + 1) % priorities.length;

        setPriorityFilter(priorities[next]);

    };

    const handleCategory = () => {

        const current = categories.indexOf(categoryFilter);

        const next = (current + 1) % categories.length;

        setCategoryFilter(categories[next]);

    };

    const views = [

        {
            label: "All Tasks",

            action: () => {

                setPriorityFilter("All");
                setCategoryFilter("All");
                setStatusFilter("All");

            },

            active:
                priorityFilter === "All" &&
                categoryFilter === "All" &&
                statusFilter === "All",

        },

        {

            label:
                priorityFilter === "All"
                    ? "By Priority"
                    : priorityFilter,

            action: handlePriority,

            active: priorityFilter !== "All",

        },

        {

            label:
                categoryFilter === "All"
                    ? "By Category"
                    : categoryFilter,

            action: handleCategory,

            active: categoryFilter !== "All",

        },

        {

            label: "Completed",

            action: () => setStatusFilter("Completed"),

            active: statusFilter === "Completed",

        },

        {

            label: "Pending",

            action: () => setStatusFilter("Pending"),

            active: statusFilter === "Pending",

        },

    ];

    return (

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

            {views.map((view) => (

                <button
                    key={view.label}
                    onClick={view.action}
                    className={`
        flex-shrink-0
        px-5
        py-2
        rounded-full
        text-sm
        font-medium
        transition-all
        duration-200
        ${view.active
                            ? "bg-emerald-500 text-white shadow"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }
    `}
                >
                    {view.label}
                </button>

            ))}

        </div>

    );

}

export default ViewSelector;