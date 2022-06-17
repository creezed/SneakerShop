import styled from "styled-components";

export const Container = styled.div`
  max-width: ${( {theme} ) => theme.sizes.container.width};
  margin: 0 auto;
  padding: 0 30px;
`