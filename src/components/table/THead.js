import propTypes from 'prop-types'; 

function THead ({titles}) {
 
    return (
        <thead>
            <tr>
                {titles.map((title, id) => <th key={id}>{title}</th>
                )}
            </tr>
        </thead>
    )
}

THead.propTypes = {
    titles: propTypes.arrayOf(propTypes.string)
  }

export default THead;