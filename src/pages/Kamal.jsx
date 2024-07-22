import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
  
const GreetingContainer = styled.div`
  text-align: center;
  margin-top: 20%;
  font-family: Arial, sans-serif;
  color: #ff69b4;
`;

const GreetingTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const GreetingMessage = styled.p`
  font-size: 1.5em;
`;

const HappyBirthday = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const { width, height } = useWindowSize();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Optionally, hide the greeting after a few seconds
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    // Get the current count from localStorage
    const currentCount = localStorage.getItem('refreshCount');

    // If it exists, parse it and set it as the state, otherwise set it to 0
    const parsedCount = currentCount ? parseInt(currentCount) : 0;
    setCount(parsedCount);

    // Increment the counter and save it back to localStorage
    localStorage.setItem('refreshCount', parsedCount+1);
   
  }, []);
  console.log(count);
  if(count<2)
  return (
    <div>
      {showGreeting && (
        <>
          <Confetti width={width} height={height} />
          <GreetingContainer>
            <GreetingTitle>Happy Birthday Team WAB!</GreetingTitle>
            <GreetingMessage>
              Wishing you a day filled with happiness and a year filled with joy.
            </GreetingMessage>
          </GreetingContainer>
        </>
      )}
    </div>
  );
};

export default HappyBirthday;
