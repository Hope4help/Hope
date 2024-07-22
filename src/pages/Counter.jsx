import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Odometer from 'odometer';

const OdometerStyles = createGlobalStyle`
  .odometer {
    font-family: "Helvetica Neue", sans-serif;
    line-height: 1.1em;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    text-align: center;
  }
  .odometer .odometer-digit {
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  .odometer .odometer-digit .odometer-digit-spacer {
    display: inline-block;
    vertical-align: middle;
    visibility: hidden;
  }
  .odometer .odometer-digit .odometer-digit-inner {
    text-align: left;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .odometer .odometer-digit .odometer-ribbon {
    display: block;
  }
  .odometer .odometer-digit .odometer-ribbon-inner {
    display: block;
    -webkit-backface-visibility: hidden;
  }
  .odometer .odometer-digit .odometer-value {
    display: block;
    -webkit-transform: translateZ(0);
  }
  .odometer .odometer-value.odometer-last-value {
    position: absolute;
  }
  .odometer.odometer-animating-up .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform 2s;
    -moz-transition: -moz-transform 2s;
    -ms-transition: -ms-transform 2s;
    -o-transition: -o-transform 2s;
    transition: transform 2s;
  }
  .odometer.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  .odometer.odometer-animating-down .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  .odometer.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform 2s;
    -moz-transition: -moz-transform 2s;
    -ms-transition: -ms-transform 2s;
    -o-transition: -o-transform 2s;
    transition: transform 2s;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
`;

const Container = styled.div`
  .wpo-counter-style-2 {
    padding: 50px 0;
  }
  .wpo-counter-grids {
    display: flex;
    justify-content: space-around;
  }
  .grid {
    text-align: center;
  }
  .grid h2 {
    font-size: 3rem;
  }
`;

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const odometers = document.querySelectorAll('.odometer');
    odometers.forEach(odometer => {
      observer.observe(odometer);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCounts({
        donations: 6200,
        fundsRaised: 80,
        volunteers: 245,
        projects: 605,
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (Object.keys(counts).length) {
      Object.keys(counts).forEach(key => {
        const odometer = new Odometer({
          el: document.querySelector(`.odometer-${key}`),
          value: 0,
          format: '(,ddd)',
          duration: 2000,
        });
        odometer.update(counts[key]);
      });
    }
  }, [counts]);

  return (
    <Container>
      <OdometerStyles />
      <div className="wpo-counter-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-counter-grids">
                <div className="grid">
                  <div>
                    <h2><span className="odometer odometer-donations" data-count={6200}>00</span>+</h2>
                  </div>
                  <p>Donation</p>
                </div>
                <div className="grid">
                  <div>
                    <h2><span className="odometer odometer-fundsRaised" data-count={80}>00</span>+</h2>
                  </div>
                  <p>Fund Raised</p>
                </div>
                <div className="grid">
                  <div>
                    <h2><span className="odometer odometer-volunteers" data-count={245}>00</span>+</h2>
                  </div>
                  <p>Volunteers</p>
                </div>
                <div className="grid">
                  <div>
                    <h2><span className="odometer odometer-projects" data-count={605}>00</span>+</h2>
                  </div>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
