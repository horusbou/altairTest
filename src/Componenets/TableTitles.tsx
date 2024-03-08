import React,{ memo } from "react";


function TableTitles({ titles, grids }: { titles: string[], grids: number }) {
  return (
    <div
      className={`grid text-logoBlack gap-x-4 my-3 mx-3`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grids},minmax(0,1fr))`,
        alignItems: "center"
      }}
    >
      {titles.map((title, id) => (
        <h4
          key={title}
          className={`text-[13px] overflow-x-auto customSrollBar font-medium ${id === grids - 1 && "justify-self-end"
            }`}
        >
          {title}
        </h4>
      ))}
    </div>
  );
}

export default memo(TableTitles);
