import { P } from "../../ui";

function Tabs({
  tabs,
  currentTab,
  setCurrentTab,
  text,
}: {
  tabs: string[];
  currentTab: number;
  text: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <P>{text}</P>
      <div className="flex bg-slate-100 hover:bg-slate-200 rounded-lg transition p-1 dark:bg-slate-700 dark:hover:bg-slate-600">
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              className={`py-2 px-4 rounded-md text-lg ${
                currentTab === i
                  ? "bg-white dark:bg-slate-900 text-pink-500"
                  : "hover:text-pink-500 dark:text-slate-200"
              } `}
              onClick={() => setCurrentTab(i)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
