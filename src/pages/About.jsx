import React from 'react';

import NavBar from '../components/NavBar';

import '../style/AboutStyle.css'

const About = () => {
 return (
    <>
    <NavBar />
    <div className='about-section'>
      <h2 className='about-title'>About</h2>
      <p className='about-text'>
      Step into the immersive world of Pokémon with my meticulously crafted Pokédex application, fueled by the boundless capabilities of React. Delve deep into the intricacies of each Pokémon's existence as we tap into the vast repository of the PokeAPI, uncovering a wealth of data ranging from their formidable stats to their awe-inspiring abilities.

Embark on a journey of discovery with a simple click on any Pokémon card, unveiling a rich tapestry of information tailored to that specific creature. But the adventure doesn't stop there – with the intuitive 'Previous' and 'Next' buttons serving as your trusty companions, seamlessly navigate through an ever-expanding universe of Pokémon, each page offering a new revelation, a new adventure.

Immerse yourself in the enchanting lore of Pokémon as you traverse through my Pokédex application, where every interaction brings you one step closer to becoming a true Pokémon master. So, brace yourself for an odyssey of exploration and enlightenment – the world of Pokémon awaits your discovery!
    
      </p>
    </div>
    </>
 );
};

export default About;
