import styled from 'styled-components'

const FooterSection = () => {
    return (
        
        <StyledDiv>
            <StyledH4>Made with ❤️ by Andreea Egli 2021</StyledH4>
        </StyledDiv>
    
    )
}

const StyledDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    @media (max-width: 1024px){
            margin-bottom: 2rem; 
        }

`
const StyledH4 = styled.h4`
    color: whitesmoke;
    font-weight: lighter;
    font-size: 0.8rem;
    @media (max-width: 1024px){
            font-size: 1rem; 
        }
    /* writing-mode: vertical-rl;
    text-orientation: mixed;  */
`

export default FooterSection;
