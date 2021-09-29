import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 5px;
    transform: translateY(100%);

    a {
        padding-left: 5px; 
    }
`;

export default FooterContainer;
