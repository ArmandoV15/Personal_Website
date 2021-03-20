export const homeObjOne = {
    id: 'About',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'A little about me',
    headline: 'Who is Armando Valdez?',
    description: 'Motivated Computer Science student pasionate about programming and ' +
    'looking forward to brining my talents to the Computer Sceince industry.',
    description2:'Proficient in many Object-Oriented Programming languages '+
    'and have a growing interest in Web development and Algorithms',
    buttonLabel: 'View Full Resume',
    imgStart: false,
    img: require('../../Images/Me.PNG').default,
    alt: 'alt',
    dark: true,
    primary: true,
    darkText: false,
    redirect: 'Home'
};

export const homeObjTwo = {
    id: 'Experience',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'My Experience',
    headline: 'The Work I have Done',
    description: 'Over the course of my education I have taken part in many group prjects ' + 
    'that have developed my communication and colaberative skills.',
    description2: 'Having my Senior Design project sponsored by Boeing has also given ' + 
    'me insight into what it takes to develop a well rounded product.',
    buttonLabel: 'View Projects',
    imgStart: true,
    img: require('../../Images/Exp.svg').default,
    alt: 'alt',
    dark: false,
    primary: false,
    darkText: true,
    redirect: 'Projects'
};

export const homeObjThree = {
    id: 'Contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Contact',
    headline: 'Feel free to reach out if you have any questions or would like to chat!',
    description: 'Phone:',
    description2: 'Email:',
    buttonLabel: 'View Projects',
    imgStart: true,
    img: require('../../Images/Contact.svg').default,
    alt: 'alt',
    dark: false,
    primary: false,
    darkText: true,
    redirect: 'Projects'
};
