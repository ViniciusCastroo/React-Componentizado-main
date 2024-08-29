
export default function Card({titulo, nivel,tempoxp}) {

    return ( 
        <div className="skill-card">
        <h3>Titulo: {titulo}</h3>
        <p>Nível: {nivel}</p>
        <p>tempo xp: {xp}</p>
    </div>
     )
}

