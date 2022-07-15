import { styled } from "@stitches/react";
const Wrapper = styled("div", {
  display: "grid",
  gridArea: "nav",
});

export function Navigation() {
  return (
    <Wrapper>
      <h1>Navigation</h1>;
    </Wrapper>
  );
}
