export const spaceClean = (e:string):string => {
    return e.replace(/ /g, '')
}

export const thousandsSeparator = (e:string):string => {
    let reSeparator = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    return e.replace(reSeparator, '$& ')
}