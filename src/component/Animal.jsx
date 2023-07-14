export default function Animal(props){
    const { name, species, age, description } = props.animal;
    return(
        <>
        <ul>
            <li>Name ={name}</li>
        </ul>
        </>
    )
}