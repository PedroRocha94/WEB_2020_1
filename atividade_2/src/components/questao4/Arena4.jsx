import React from 'react'


export default (props) => {
    return (
        <div class='arena'> 
            <h1>Arena: {props.nameArena}</h1>
            {React.Children.map(props.children, hero =>{
                return React.cloneElement(hero, {...props});
            })}
        </div>
        
    );
}

//export default Arena;