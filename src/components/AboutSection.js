import React from 'react';
import ae from '../assets/ae.jpg';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import {titleAnimation, fade, photoAnimation} from '../animation'
import Curly from './Curly' 
import Connect from './Connect'
import Resume from './Resume'

const AboutSection = () => {
    
    return (
        <>
        <Curly/>
        <motion.div  variants = {pageAnimation} initial = "hidden" animate = "show" >
        
        <StyledAbout>
    
            <div className = "description" id="about" >
                <div className = "title">
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation}>My name is <StyledA>Andreea</StyledA>
                        </motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation} ><span>and I'm an aspiring</span></motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <StyledH2  variants = {titleAnimation}><span>Web Developer.</span></StyledH2>
                    </StyledAllBigText>
                </div>
                
                    <StyledP variants = {fade}>I'm very ----insert adjective here--- by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end
                    </StyledP>
                    
                <Resume/>
                
            </div>
        
            
            <motion.div  variants = {photoAnimation} className = "image">
                <StyledImg 
                whileHover={{ scale: 1.1 }}
                    src = {ae} 
                    alt = "andreea egli" />
            </motion.div>
            
        </StyledAbout>
        <Connect/>

        </motion.div>
        
        </>
    );
};

const StyledAbout = styled.div`
    min-height: 95vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: whitesmoke;
    margin-bottom: 20vh;

@media (max-width: 1024px){
    display: block;
    text-align: center;
    padding: 2rem 2rem;
    margin-top: 8rem;
    }
@media (max-width: 500px){
    padding: 4rem 1rem;
    margin-top: 1.7rem;
    
    }
`
const StyledP = styled(motion.p)`
    margin-top: 1rem;
    font-weight: 300;
    padding-right: 8rem;

@media (max-width: 1024px){
    display: block;
    text-align: center;
    padding: 2rem;
    }
@media (max-width: 500px){
    display: block;
    text-align: center;
    padding: 2rem 1rem 2rem 1rem;
    margin-top: 0;
    }
`
const StyledH2 = styled(motion.h2)`
    font-weight: 900;
    color: lightgreen;
    
`
const StyledA = styled.a `
    color: lightgreen;
    font-weight: 900;
`
const StyledImg = styled(motion.img)`
    width: 35vh;
    height: 35vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 7px; 
    box-shadow: 0 8px 6px -6px black;
    overflow: hidden;

@media (max-width: 1024px){
    margin: 1rem 12rem 5rem 0rem; 
    width: 20vh;
    height: 20vh;
    }
@media (max-width: 500px){
    text-align: center;
    width: 17vh;
    height: 17vh;
    /* display: none; */
    }
`
const StyledAllBigText = styled.div `
    overflow: hidden;
`
export default AboutSection;

