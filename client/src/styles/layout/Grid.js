import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  gap: ${({ gap }) => gap}
`