const React = require('react');
const DefaultLayout = require('./layouts/default');

function Index({project}) {
  return (
    <DefaultLayout>
      <h2 className="trial">Index</h2>
      {/* <p> I want to see {project[0].name}</p> */}

      {
        project.map((entry, i)=>{
            return(
              // <div>
              // <h2 key={i}>{entry.name}</h2>
              // <img src={entry.image}/>
              // </div>

                <li key={i}>
                  <a href={`/project/${i}`}> {entry.name} </a>

                  {/* <a href={`/projects`}>Go Back</a> */}
                  </li>

            )
        })
      }
    </DefaultLayout>
  );
}

module.exports = Index;