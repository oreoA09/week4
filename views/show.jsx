const React = require('react');
const DefaultLayout = require('./layouts/default');

function Show({entry}) {
    return (
        <DefaultLayout> 
            <h2>Show</h2>
            <h3>{entry.name}</h3>
            {/* ternary if statement */}
            <p>and it {
                entry.hasDatabase ? <span> does </span> : <span>does not </span>
} 
have a database </p>
            <img src={entry.image} alt={entry.name}/>

            <button><a href={`/project`}>Go Back</a></button>
        </DefaultLayout>
        )
    }

    module.exports = Show