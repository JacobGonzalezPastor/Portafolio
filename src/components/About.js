import React from 'react';
import { Containerdiv, Desp, Styledh3, Styledimg, Styledp } from '../Styles/Styledabout';

const About = () => {
    return (
        <Containerdiv>
            <Desp>
                <Styledh3>Dejame contarte un poco sobre mi</Styledh3>
                <Styledp>Soy una persona responsable, tranquila en situaciones
                    de estrés, amigable, sociable y dispuesto cumplir con las
                    distintas funciones encargadas, soy bueno trabajando
                    en equipo, me identifico como un buen líder, con
                    experiencias en diseño de prototipos e interfaces,
                    también tengo experiencias como desarrollador web y
                    desarrollador de software con bases en el lenguaje de
                    programación java, Html, Css, JavaScript, Php y
                    conocimientos básicos en Python, también tengo
                    conocimientos en base de datos MySql.
                </Styledp>
            </Desp>
            <div>
                <Styledimg src='https://i.imgur.com/T6CTB97.jpg' alt='Acerca'/>
            </div>
        </Containerdiv>
    )

};

export default About;
