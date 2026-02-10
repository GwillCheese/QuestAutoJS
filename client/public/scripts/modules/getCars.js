import {carData} from "../../../data.js";
import {renderCars} from "./renderCarsData.js";
import {checkIsBodyTypeFiltered} from "./checkIsBodyTypeFiltered.js";

export const getCars = async (getFromQuery, filters = [], url = null) => {
    const filterOptions = filters
    
    // filter body type by url query parameters
    const clb = (curBodyType) => filterOptions.push({key: 'bodyType',value: curBodyType})
    if(getFromQuery) checkIsBodyTypeFiltered(clb)
    
    // Filter sample data
    let filteredData = carData.data
    
    // Apply filters
    if(filters.length > 0) {
        filteredData = filteredData.filter(car => {
            return filters.every(filter => {
                if(!filter.value) return true
                if(filter.key === 'bodyType') return car.bodyType === filter.value
                if(filter.key === 'make') return car.make._id === filter.value
                if(filter.key === 'model') return car.model._id === filter.value
                if(filter.key === 'color') return car.color._id === filter.value
                if(filter.key === 'price') return car.price <= filter.value
                return true
            })
        })
    }
    
    renderCars(filteredData)
}