import { styled } from "@stitches/react";
const Wrapper = styled("div", {
  display: "grid",
  gridArea: "footer",
});

export function Footer() {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
}
