export default function ContentCard({item}) {   
    console.log({item});
    return <div className="d-flex" style={{justifyContent:"center"}}>
        
        {
        (item.map((el) => <div className="card ms-5" style={{width: "15rem",float:"left"}}>
        <img className="card-img-top" 
        src={el.image}
        alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">
        {el.name}
        </h5>	
        </div>
    </div>))
    }

   </div>;
}