import {carData} from "../../../data.js";
import {renderFilters} from "./renderFilters.js";

export const getOptions = async () => {
    try {
        // Extract unique makes, models, and colors from sample data
        const makes = [...new Set(carData.data.map(car => car.make))].map(make => ({
            _id: make._id || make.id, // Use id if _id is undefined
            name: make.name
        }));
        
        const models = [...new Set(carData.data.map(car => car.model))].map(model => ({
            _id: model._id || model.id, // Use id if _id is undefined
            name: model.name
        }));
        
        const colors = [...new Set(carData.data.map(car => car.color))].map(color => ({
            _id: color._id || color.id, // Use id if _id is undefined
            name: color.name
        }));
        
        console.log('Makes:', makes);
        console.log('Models:', models);
        console.log('Colors:', colors);
        
        // render options
        renderFilters({makes, models, colors})
    } catch (err) {
        console.error({err})
    }
}