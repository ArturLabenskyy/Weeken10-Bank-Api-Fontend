import styled from "styled-components";

const Wrapped = styled.div`
    display: flex;
    flex-direction: column;

    .user-info {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .single-account {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

export default Wrapped;
