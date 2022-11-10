import { getData } from '../helpers/getData';
import { description } from './description';

const buildData = async (newArray, urlDepartments, urlCities, departmentState) => {
    const departments =  await getData(urlDepartments)

    newArray = [...departments]
    departments.forEach( async (item, i) => {
        const response = await getData(`${urlCities}${item.id}`)
        const longitud = response.length;
        item.ciudades = longitud
        item.description = description[i]
    })
    console.log(newArray);
    departmentState(newArray)
}

export {buildData}
