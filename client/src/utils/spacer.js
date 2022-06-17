import { css } from "styled-components";

export const spacer = (props) => css`
  ${ props?.mt && css`margin-top: ${props.mt}` };
  ${ props?.mb && css`margin-bottom: ${props.mb}` };
`