import { primary } from "@/lib/colors";
import styled, { css } from "styled-components";
export const ButtonStyle = css`
  font-weight: 700;
  background-color: ${primary};
  border: 0;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  svg {
    height: 16px;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    `};
  ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 2px solid #000;
    `};
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      color: #fff;
      border: 2px solid ${primary};
    `};
  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 2px solid ${primary};
    `};
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
