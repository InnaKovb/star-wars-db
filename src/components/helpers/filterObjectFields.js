import { v4 as uuidv4 } from 'uuid';

/** 
 * Remove unused fields from objects, prepare data for view.
 **/ 

export const filterObjects = (objects, fields) => {
  
    return objects?.map(object => {
      const filteredObject = {};
  
      for (const field of fields) {
        if (field === 'id') {
          filteredObject[field] = uuidv4();
        } else if (object.hasOwnProperty(field)) {
          filteredObject[field] = object[field];
        }
      }
   return filteredObject;
    });
  }