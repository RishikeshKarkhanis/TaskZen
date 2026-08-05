import {
  ListTodo,
  Circle,
  Clock3,
  CircleCheck,
} from "lucide-react";

import StatCard from "./StatCard";

function StatsCards({stats}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Tasks"
        value={stats.total}
        icon={ListTodo}
        color="emerald"
      />

      <StatCard
        title="Todo"
        value={stats.todo}
        icon={Circle}
        color="gray"
      />

      <StatCard
        title="In Progress"
        value={stats.inProgress}
        icon={Clock3}
        color="blue"
      />

      <StatCard
        title="Completed"
        value={stats.completed}
        icon={CircleCheck}
        color="green"
      />

    </div>
  );
}

export default StatsCards;