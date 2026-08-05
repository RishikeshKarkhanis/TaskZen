export const getTaskStats = (tasks) => ({

    total: tasks.length,

    todo: tasks.filter(
        (task) => task.status === "Todo"
    ).length,

    inProgress: tasks.filter(
        (task) => task.status === "In Progress"
    ).length,

    completed: tasks.filter(
        (task) => task.status === "Completed"
    ).length,

});