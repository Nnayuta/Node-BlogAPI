import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: calc(100vh - 126px);
`

export const Content = styled.main`
    display: flex;
    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.backgroundGeral};
`