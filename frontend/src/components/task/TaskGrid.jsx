import TaskCard from "./TaskCard";

function TaskGrid({
  tasks,
  onEdit,
  onDelete,
}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

      {tasks.map((task) => (

        <TaskCard
          key={task._id}

          title={task.title}
          description={task.description}

          priority={task.priority}
          status={task.status}
          category={task.category}

          dueDate={task.dueDate}

          onEdit={() => onEdit(task._id)}
          onDelete={() => onDelete(task._id)}
        />

      ))}

    </div>
  );

}

export default TaskGrid;