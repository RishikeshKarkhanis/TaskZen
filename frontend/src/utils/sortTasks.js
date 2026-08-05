export const sortTasks = (tasks, sortBy) => {

    return [...tasks].sort((a, b) => {

        if (sortBy === "newest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }

        if (sortBy === "oldest") {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }

        if (sortBy === "priority") {

            const priorityOrder = {
                High: 3,
                Medium: 2,
                Low: 1,
            };

            return (
                priorityOrder[b.priority] -
                priorityOrder[a.priority]
            );

        }

        return 0;

    });

};