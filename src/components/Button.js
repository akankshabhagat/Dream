import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary',
    'btn--outline'];

const SIZES = ['btn--medium', 'btn--large']; // button size css classes

export const Button = ({  // 
    children, 
    type,
    onclick,
    buttonstyle,
    buttonsize

}) => {
    // we are setting defaults just in case the other happens
    const checkButtonstyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0]; // we are checking if btn style is given  if not apply the 0th index or btn primary class of css

    const  checkButtonsize= SIZES.includes(buttonsize) ? buttonsize: SIZES[0]// wearethe checking size is given if not use  the element at zeroth index btn --medium
    return(
<Link to='/sign-up'className='btn-mobile'>
<button className={`btn ${checkButtonstyle} ${checkButtonsize }`}
onclick={onclick} type={type}>
    {children}
</button>
</Link>
    );
};