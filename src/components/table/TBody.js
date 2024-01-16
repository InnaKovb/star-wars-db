
import { useState } from 'react';
import {formatDate} from '../helpers/formatDate';
import propTypes from 'prop-types'; 


function TBody({data}) {

    const [expandedText, setExpandedText] = useState({});
    const toggleExpand = (rowIndex, columnIndex) => {
      const cellKey = `${rowIndex}-${columnIndex}`;
      console.log('Toggle Expand:', cellKey);
      setExpandedText((prevExpandedText) => (
        prevExpandedText === cellKey ? null : cellKey
      ));
    }
    

    if (!data || data.length === 0) {
        return null;
      }
    
    const keys = Object.keys(data[0]); // Assuming the keys of the first item represent all possible keys

    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {keys.map((key, columnIndex) => {
              if (key === "created") {
                  return <td key={columnIndex}>{formatDate(item[key])}</td>;
              } else if (key === "opening_crawl") {
                  return (
                    <td key={columnIndex}>
                      {item[key].length > 150 ? (
                        <>
                        {expandedText === `${index}-${columnIndex}` ? item[key] : item[key].slice(0, 150)}
                        <span onClick={() => toggleExpand(index, columnIndex)} style={{ cursor: 'pointer', color:"#e1f038" }}>
                          ... (Click on me)
                        </span>
                      </>
                      ) : (item[key])}
                    </td>
                  );
              } else {
                return <td key={columnIndex}>{item[key]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    );
}

TBody.propTypes = {
  data: propTypes.array
}

export default TBody;