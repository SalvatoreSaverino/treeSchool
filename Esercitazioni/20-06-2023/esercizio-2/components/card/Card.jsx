import './Card.css';

const Card = ({img, name, surname}) => {

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div style={{
          flex: 1
        }}>
          <div>
            <img src={img} width={"30%"} className="img-fluid rounded-start" alt="foto" />
          </div>
        </div>
        <div style={{
          flex: 1
        }}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{surname}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;