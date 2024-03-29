import { For } from "solid-js";
import { createSolidTable, getCoreRowModel, flexRender } from "@tanstack/solid-table";

function defaultData() {
    return [
        {
            id: 1,
            task: "",
            progress: 0,
            time: 0,
            started: false,
        },
        {
            id: 2,
            task: "",
            progress: 50,
            time: 0,
            started: false,
        },
        {
            id: 3,
            task: "",
            progress: 100,
            time: 0,
            started: false,
        },
    ];
}

const getProgressClass = progress => {
    if (progress < 50) {
        return "text-error";
    } else if (progress < 100) {
        return "text-warning";
    } else {
        return "text-success";
    }
};

const exampleTaskPlaceholder = ["Read a book", "Write a blog post", "Learn a new language"];
const getRandTaskPlaceholder = () =>
    exampleTaskPlaceholder[Math.floor(Math.random() * exampleTaskPlaceholder.length)];

function TasksTable() {
    const table = createSolidTable({
        get data() {
            return defaultData();
        },
        columns: [
            {
                accessorKey: "task",
                header: "Task",
                cell: row => (
                    <textarea
                        class="textarea h-8"
                        placeholder={getRandTaskPlaceholder()}
                        value={row.getValue()}
                    />
                ),
                defaultData,
            },
            {
                accessorKey: "progress",
                header: "Progress",
                cell: row => (
                    <div
                        className={`radial-progress ${getProgressClass(row.getValue())}`}
                        style={{ "--value": row.getValue(), "--size": "2rem", "--thickness": "4px" }}
                        role="progressbar"
                    />
                ),
            },
            {
                accessorKey: "time",
                header: "Pomo",
                cell: row => (
                    <button class="btn btn-md">
                        <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="28" fill="#ff5347" />

                            <ellipse
                                cx="28"
                                cy="16"
                                rx="8"
                                ry="16"
                                fill="white"
                                opacity="0.5"
                                transform="rotate(20)"
                            />

                            <path d="M32 4 L30 16 L52 12 Z" fill="green" />
                        </svg>
                    </button>
                ),
            },
        ],
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div class="overflow-x-au</svg>to">
            <table class="table">
                <thead>
                    <For each={table.getHeaderGroups()}>
                        {headerGroup => (
                            <tr>
                                <For each={headerGroup.headers}>
                                    {header => (
                                        <th>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext(),
                                                  )}
                                        </th>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </thead>
                <tbody>
                    <For each={table.getRowModel().rows}>
                        {row => (
                            <tr>
                                <For each={row.getVisibleCells()}>
                                    {cell => (
                                        <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
}

export default TasksTable;
