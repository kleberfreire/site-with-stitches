import { styled } from "@stitches/react";
const Wrapper = styled("div", {
  display: "grid",
  gridArea: "sidebar",
});

export function Sidebar() {
  return (
    <Wrapper>
      <h1>Sidebar</h1>;
    </Wrapper>
  );
}
