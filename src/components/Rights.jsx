import styled from "styled-components";

function Rights() {
    return(
    <Txt>
        <h2>Hey, this beautiful project to practice React Js and an API was made thanks to  
            <a href="https://www.youtube.com/c/DevEd">
                Dev Ed 
            </a>
        one of my favourites Youtubers
        </h2>
    </Txt>
    );
}

const Txt = styled.div`
    display: block;
    margin: 2em 0;
    text-decoration: none;

    a {
        margin: 0 1rem;
    }
`;




export default Rights;