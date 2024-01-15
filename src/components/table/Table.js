import TBody from "./TBody";
import THead from "./THead";
import "./Table.scss";
import propTypes from 'prop-types'; 

function Table ({titles, data}) {
    return (
        <div className="table">
            <table className="table__inner"> 
                <THead titles={titles}/>
                <TBody data={data}/>
            </table>
        </div>
    )
}

Table.propTypes = {
    title: propTypes.arrayOf(propTypes.string),
    data: propTypes.array,
  }
  

export default Table;