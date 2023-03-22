const setOfCoordinatesY = (name, setCoordinate, clickCoordinate) => {
    if (name === "War") {
        return (
            setCoordinate === clickCoordinate ||
            setCoordinate + 1 === clickCoordinate ||
            setCoordinate + 2 === clickCoordinate
        )
    } else if (name === "Medieval") {
        return (
            setCoordinate === clickCoordinate ||
            setCoordinate + 1 === clickCoordinate ||
            setCoordinate + 2 === clickCoordinate ||
            setCoordinate + 3 === clickCoordinate ||
            setCoordinate + 4 === clickCoordinate ||
            setCoordinate + 5 === clickCoordinate 
        )
    } else {
        return (
            setCoordinate === clickCoordinate ||
            setCoordinate + 1 === clickCoordinate ||
            setCoordinate + 2 === clickCoordinate ||
            setCoordinate + 3 === clickCoordinate ||
            setCoordinate + 4 === clickCoordinate ||
            setCoordinate + 5 === clickCoordinate 
        )
    }
}

export default setOfCoordinatesY