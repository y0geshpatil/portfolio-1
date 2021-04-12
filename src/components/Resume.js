import cv from '../assets/cv.pdf'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fade} from '../animation'


const Resume = () => {
    
    return (
        <StyledDiv 
            whileTap={{ scale: 1.1 }} 
            variants = {fade}>
            <StyledA 
                onClick={() => window.open(cv)} 
                traget = "_blank" 
                >Resume
            </StyledA>
        </StyledDiv>
    );
    
}

const StyledDiv = styled(motion.div) `
    padding-top: 2rem;

    @media (max-width: 500px){
            margin: 1rem 1rem 5rem 1rem;  
            padding: 1.3rem 2rem; 
            font-size: 1.2rem;
    }
    
`
const StyledA = styled.a `
            font-weight: bold;
            font-size: 1rem;
            padding: 1rem 2rem;
            margin-top: 5vh;
            cursor: pointer;
            border: 1px solid darkgrey;
            color: darkgrey;
            transition: all 0.5s ease;
            outline: none;
            background: #495057;
            border-radius: 5%;
            &:hover {
                background-color: #343a40 ;
                color: lightgreen;
            }
        @media (max-width: 1024px){
            margin: 0 1rem 3rem 1rem;   
            }
        @media (max-width: 500px){
            margin: 1rem 1rem 5rem 1rem;  
            padding: 1.3rem 2rem; 
            font-size: 1.2rem;
            }
    
`

export default Resume;