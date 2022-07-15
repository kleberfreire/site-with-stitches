import { styled } from "@stitches/react";
const Wrapper = styled("div", {
  display: "grid",
  gridArea: "content",
});

export function Main() {
  return (
    <Wrapper>
      <h1>Main</h1>
    </Wrapper>
  );
}
