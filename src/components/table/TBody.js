
import {formatDate} from '../helpers/formatDate';
import propTypes from 'prop-types'; 


function TBody({data}) {
    
    if (!data || data.length === 0) {
        return null;
      }
    
    const keys = Object.keys(data[0]); // Assuming the keys of the first item represent all possible keys

    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key}>{key === "created"? formatDate(item[key]): item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
}

TBody.propTypes = {
  data: propTypes.array
}

export default TBody;