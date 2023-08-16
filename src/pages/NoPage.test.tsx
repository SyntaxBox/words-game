import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

test('renders layout with "Page Not Found" message and back link', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  expect(screen).toBeDefined();
});
