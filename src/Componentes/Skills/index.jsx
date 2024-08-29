import Card from "../Card";

function Skills({ skills }) {

  const Habilidades = [
    {
      titulo: "Node",
      nivel: "noob",
      tempoxp: "1 mês",
      color: "red"
    },
    {
      titulo: "CSS",
      nivel: "master",
      tempoxp: "10 meses",
      color:"blue"
    },
    {
      titulo: "Java",
      nivel: "Triste",
      tempoxp: "&",
      color:"gray"
    }
  
  ]












  return (
    <div className="skills">
      <h2>Habilidades</h2>
          <Card titulo="React" nivel="Caminhando.."/>
          <Card titulo="CSS" nivel="Lutando.."/>
        
       


    </div>
  );
}

export default Skills;