export default function Activity({username,textcolor}){
    let styles = {color: textcolor };
    return(
        <>
        <p style={styles}>hello {username} </p>
        </>
    );
}
