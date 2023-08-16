import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Tabs from "./Tabs";

test("renders tabs with correct styling", () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const currentTab = 0;
  const text = "Test Text";
  const setCurrentTab = vi.fn(); // Mock setCurrentTab function

  const { getByText } = render(
    <Tabs
      tabs={tabs}
      currentTab={currentTab}
      text={text}
      setCurrentTab={setCurrentTab}
    />
  );

  // Check if the provided text is rendered
  expect(getByText(text)).toBeInTheDocument();

  // Check if all tab buttons are rendered
  tabs.forEach((tab) => {
    expect(getByText(tab)).toBeInTheDocument();
  });

  // Check if the active tab is styled correctly
  const activeTab = getByText(tabs[currentTab]);
  expect(activeTab).toHaveClass("bg-white dark:bg-slate-900 text-pink-500");

  // Simulate a click on a tab button
  const tabToClick = getByText(tabs[1]);
  fireEvent.click(tabToClick);
  expect(setCurrentTab).toHaveBeenCalledWith(1);
});
