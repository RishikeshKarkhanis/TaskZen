export const filterTasks = ( tasks, search, priorityFilter, categoryFilter, statusFilter ) => {

    return tasks.filter((task) => {

        const keyword = search.toLowerCase();

        const matchesSearch =
            task.title.toLowerCase().includes(keyword) ||
            task.description.toLowerCase().includes(keyword) ||
            task.category.toLowerCase().includes(keyword);

        const matchesPriority =
            priorityFilter === "All" ||
            task.priority === priorityFilter;

        const matchesCategory =
            categoryFilter === "All" ||
            task.category === categoryFilter;

        let matchesStatus = true;

        if (statusFilter === "Completed") {
            matchesStatus = task.status === "Completed";
        }

        if (statusFilter === "Pending") {
            matchesStatus = task.status !== "Completed";
        }

        return (
            matchesSearch &&
            matchesPriority &&
            matchesCategory &&
            matchesStatus
        );

    });

};