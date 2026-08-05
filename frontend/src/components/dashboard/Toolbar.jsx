import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

import Button from "../common/Button";

function Toolbar({
  search = "",
  sortBy,
  onSearchChange,
  onSortClick,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-3">

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

        {/* Search Box */}

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              py-2
              pl-12
              pr-4
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-200
            "
          />

        </div>

        {/* Actions */}

        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={onSortClick}
          >
            <ArrowUpDown size={18} />
            {
              sortBy === "newest"
                ? "Newest"
                : sortBy === "oldest"
                  ? "Oldest"
                  : "Priority"
            }
          </Button>
        </div>

      </div>

    </div>
  );
}

export default Toolbar;