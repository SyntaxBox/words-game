import React from "react";

function Tabs({
  tabs,
  currentTab,
  setCurrentTab,
}: {
  tabs: string[];
  currentTab: number;
  setCurrentTab: (e: number) => unknown;
}) {
  return (
    <div className="flex bg-slate-100 hover:bg-slate-200 rounded-lg transition p-1 dark:bg-slate-700 dark:hover:bg-slate-600">
      {tabs.map((tab, i) => {
        return (
          <button
            key={i}
            className={`py-2 px-4 rounded-md text-lg ${
              currentTab === i
                ? "bg-white dark:bg-slate-900 text-pink-500"
                : "hover:text-pink-500"
            } `}
            onClick={() => setCurrentTab(i)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
