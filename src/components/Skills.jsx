const Skills = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl m-5 text-center font-bold">Skills</h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 bg-base-200 py-10">
        <div>
          <h3 className="text-3xl mb-3 font-bold">Front-end Skills</h3>
          <ul className="list-disc list-inside text-2xl">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>React js</li>
            <li>Daisy UI</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div >
          <h3 className="text-3xl mb-3 font-bold">Back-end Skills</h3>
          <ul className="list-disc list-inside text-2xl">
            <li>Java-Script (ES6)</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node Js</li>
            <li>Rest APIs</li>
            <li>Next Js</li>
          </ul>
        </div>
        <div >
          <h3 className="text-3xl mb-3 font-bold">Tools</h3>
          <ul className="list-disc list-inside text-2xl">
            <li> Vs Code</li>
            <li>Figma</li>
            <li>GitHub</li>
            <li>npm</li>
            <li>Chrome Dev Tools</li>
            <li>React Developer Tools</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Chat GPT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
