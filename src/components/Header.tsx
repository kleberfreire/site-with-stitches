import { styled } from "@stitches/react";
const Wrapper = styled("div", {
  display: "grid",
  gridArea: "logo",
});

export function Header() {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
}
