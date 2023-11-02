import Classes from "../styles/styles.module.scss";

function CardItemBody({provider, email, password, category}){

    
    return(
        <>
            <div className={Classes.cardbody}>
            <h4 className={Classes.title}>{provider}</h4>
            <p className={Classes.descemail}>{email}</p> - <span className={Classes.desccategory}>{category}</span>
            </div>
        </>
    )
}

export default CardItemBody;