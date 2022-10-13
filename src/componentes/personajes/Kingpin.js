import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Kingpin = ({
    id = 'Kingpin',
    personaje = 'Kingpin',
    realName = 'Wilson Grant Fisk',
    bornArea = 'NY, Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #50 (1967)',
    cause = 'Asesinó al capo Don Rigoletto y ocupó su lugar en el imperio criminal',
    powers = 'Cerebro del crimen; no tiene habilidades especiales, solo su intelecto y tiene una fuerza y agilidad casi atléticas a pesar de su gran tamaño del deporte japones llamado Sumo.',
    adds = 'Wilson Fisk comenzó su vida como un niño pobre en la ciudad de Nueva York, acosado por sus compañeros debido a su obesidad.',
    creators = 'Stan Lee y John Romita Sr.',
    alias = 'Calvo, Kingpin, Malicioso, El Rey o El Rey del Crimen, El Rey Pelón, Rey Pillo, El Lava Cerebros'
}) => {
const imagePath= `/assets/personajes/${id}.png`;
return (
    <div className='wrappPerson'>
    <div className='personWrap1'>
         <div className='imgWrap'>
            <img src={imagePath} className='card-imgIndividual' alt='Duende Verde'/>
            <div className='dataControlSmall'>
                <ul className='listDataControl'>
                    <li className='listData'>Nombre: <span className='styleData'>{ realName }</span></li>
                    <li className='listData'>Lugar de Nacimiento: <span className='styleData'>{ bornArea }</span></li>
                    <li className='listData'>Causa de sus poderes: <span className='styleData'>{ cause }</span></li>
                    <li className='listData'>Poderes: <span className='styleData'>{ powers }</span></li>
                    <li className='listData'>Añadidos: <span className='styleData'>{ adds }</span></li>
                    <li className='listData'> Primera aparición: <span className='styleData'>{ first_appearance }</span></li>
                    <li className='listData'>Creadores: <span className='styleData'>{ creators }</span></li>
                    <li className='listData'>Alias: <span className='styleData'>{ alias }</span></li>
                </ul>
            </div>
            <div className='buttonNavContainer'>
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Wilson Fisk alias Kingpin es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue creado por Stan Lee y John Romita Sr., y apareció por primera vez en The Amazing Spider-Man # 50 (julio de 1967). Actualmente es interpretado por Vincent D'Onofrio en el Universo Cinematográfico de Marvel.</p>
                        <p>Uno de los señores del crimen más temidos, peligrosos y poderosos del Universo Marvel, generalmente representado como el señor del crimen de la ciudad de Nueva York, fue presentado como un adversario de Spider-Man, pero luego pasó a amenazar a otros héroes de Marvel, convirtiéndose en el archienemigo de Daredevil, así como un enemigo recurrente de su hija adoptiva Echo y Punisher. El atuendo tradicional de Wilson consiste en su chaqueta de traje blanco y bastón característicos, aunque su apariencia ha cambiado a lo largo de los años. En todas las iteraciones, Wilson se representa con una apariencia extraordinariamente corpulenta. A pesar de la creencia popular, el personaje no tiene sobrepeso, sino que la mayor parte de su masa corporal es músculo, al igual que los luchadores de sumo. Si bien esto lo convierte en un enemigo peligroso para enfrentar en persona incluso a Spider-Man, el superhéroe y otros oponentes se burlan repetidamente de Wilson con sobrepeso por desprecio y burla.</p>
                        <p>El personaje se ha adaptado sustancialmente de los cómics a varias formas de medios, incluidas películas, series de televisión y videojuegos. Ha sido interpretado por John Rhys-Davies en la película de 1989 The Trial of the Incredible Hulk, Michael Clarke Duncan (†) en la película de 2003 Daredevil, Vincent D'Onofrio en las series del Universo Cinematográfico de Marvel Daredevil (2015-2018) en Netflix y regresará en Hawkeye (2021) y será el villano del Ojo de Halcón en Disney+; en Echo (2023) y en Daredevil: Born Again (2024) y será el villano de Daredevil, y con la voz de Liev Schreiber en la película animada de 2018 Spider-Man: Un nuevo universo. En 2009, Kingpin se clasificó como IGN el décimo más grande villano de cómic de todos los tiempos.</p> 
                        <p>El nombre "Kingpin" es una referencia al título de señor del crimen en la nomenclatura del argot de la Mafia.</p>
                        <p>Wilson Fisk comenzó su vida como un niño pobre en la ciudad de Nueva York, acosado por sus compañeros debido a su obesidad. Fisk comenzó a entrenar a sí mismo en el combate físico, usando su recién descubierta fuerza para intimidar a los agresores a unirse a su banda. Finalmente, fue descubierto por el señor del crimen, Don Rigoletto. Fisk se convirtió en el guardaespaldas y mano derecha de Don Rigoletto. Finalmente, Fisk mató a Don Rigoletto y tomó el control de su imperio criminal, convirtiéndose en una de las figuras más poderosas del inframundo de Nueva York.</p>
                        <p>Mientras que Kingpin disfrutó de una larga permanencia en su nueva posición, que había hecho enemigos tales como el sindicato del crimen, Maggia y el grupo terrorista HYDRA. Los dos grupos se unieron juntos para oponerse a Fisk, lo que le hace huir a Japón. Allí, comenzó una especie de negocios con el fin de recuperar su riqueza. Después de ganar suficiente dinero, Fisk volvió a Nueva York y comenzó una guerra de bandas, en un intento de reducir a la Maggia. Con el mundo de la delincuencia en el caos, Fisk fue capaz de intervenir y tomar el control.</p> 
                        <p>Fisk intentó una coalición de las turbas de Nueva York después de escuchar que Spider-Man al parecer había salido de la acción, y ordenó el secuestro de J. Jonah Jameson, pero fue frustrado por Spider-Man en su primer enfrentamiento con el trepamuros.</p>
                        <p>Mientras Fisk era un poderoso señor del crimen, se hizo pasar por un hombre de negocios legítimo, uno que hacía donaciones a obras de caridad, y parecía un hombre generoso y rico. Finalmente se conoció y luego se casó con una mujer llamada Vanessa, con quien tuvo un hijo, Richard Fisk. Vanessa no sabía que Fisk era un criminal cuando se casó con él, y cuando se enteró, amenazó con dejarlo si no renunciaba a su vida de crimen. Se retiró del crimen y la familia regresó a Japón.</p>
                        <p>Richard Fisk no se enteró de que su padre era un criminal hasta que estuvo en la universidad. Después de graduarse, Richard dijo a sus padres que iba a viajar a través de Europa. Tan sólo unos meses después de su partida, recibieron la noticia de que Richard, que estaba enojado después de conocer la verdad sobre su padre, había muerto en un accidente de esquí. Sin embargo, esto no fue lo que realmente sucedió. Resultó que Richard Fisk todavía estaba vivo, y se hace pasar por un señor del crimen rival, conocido como el Schemer, la intención de derrocar a su padre como el capo del crimen.</p> 
                        <p>Fisk contendió contra su rival y líder de pandillas, el intrigante, que resultó ser Richard disfrazado, y luchó contra Spider-Man en este encuentro.</p>
                        <p>En un momento dado, se convirtió en el gerente y director de la facción de Las Vegas de HYDRA.</p>
                        <p>A instancias de su esposa, Fisk después se despojó de su imperio criminal. Intentó sin éxito matar a Spider-Man, una vez más antes de retirarse del crimen.</p> 
                        <p>Wilson Fisk era un cerebro del crimen, inmiscuido en numerosas actividades ilegales tales como tráfico de estupefacientes, contrabando, asesinatos, entre otras. Pese a esto no tenía antecedentes criminales, ya que poseía un ejército de abogados, una estrategia financiera y criminal sin paralelo.</p>
                        <p>Fisk no tiene poderes sobrehumanos, mide 2,08 m (6′ 10″), pero su cuerpo de más de 200 kg (440 lb) es principalmente músculo sólido; es increíblemente fuerte y duradera significativamente por encima de la media humana; posee una notable fortaleza oculta por su apariencia extremadamente corpulenta. La mayor parte de su masa corporal es en realidad el músculo que se ha construido a la medida extraordinaria, como un superpesado luchador de sumo, o algunos levantadores de pesas olímpicos y los levantadores de pesas, pero a mayores niveles de fuerza. Ha demostrado ser lo suficientemente fuerte como para lanzar los hombres grandes a través de una habitación, rasgar las extremidades de personas (demostrado en un apretón de manos), aplastar el cráneo de un hombre con sus manos desnudas, y dejar huellas en las paredes de cemento después de golpearlas. Desafiando a su tamaño, es un maestro de muchas formas de combate armado y desarmado, especialmente la lucha de sumo. Su sello característico es el abrazo de oso.</p>
                        <p>Habitualmente usa una armadura Kevlar debajo de la ropa. Fisk a veces lleva un bastón que oculta un arma de rayo láser capaz de disparar una ráfaga de fuerza suficiente para vaporizar un arma de fuego (o la cabeza de una persona) a corta distancia; se lo conoce como su "bastón obliterador". Usa típicamente un bastón exornado de diamantes que esconde una cámara de gas para dormir muy comprimido, eficaz si se pulveriza a corta distancia directamente en la cara de su víctima. Debido a su riqueza y a la industria intelectual, Kingpin podría utilizar parafernalia mucho más avanzada, pero prefiere dejarla como último recurso. Como Fisk se convirtió en el enemigo de Spider-Man menos de Daredevil, se convirtió en algo más parecido a un naturalista mafioso que un cerebro criminal de cómic, y dependía menos de la ciencia ficción como armamento. Durante la serie de 1994, dependía de sus armas de fuego, que por ciertos motivos fueron censuradas, mostrándolo erróneamente.</p>
                    </div>
                </div>
    
                <div className='navegationPerson'> 
                    <a href="/personaje/HobGoblin"><button className='buttonNavigation'><FaArrowLeft/> Hobgoblin</button></a>
                    <br/>
                    <a href="/personaje/Kraven"><button className='buttonNavigation'>Kraven <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
