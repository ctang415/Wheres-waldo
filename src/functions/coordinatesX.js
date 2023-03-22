const setOfCoordinatesX = (name, setCoordinate, clickCoordinate) => {
    if (name === "War") {
        return (
        setCoordinate === clickCoordinate ||
        setCoordinate + 1 === clickCoordinate ||
        setCoordinate + 2 === clickCoordinate
        )
    } else if (name === "Medieval") {
        return (
        setCoordinate === clickCoordinate ||
        setCoordinate + 1 === clickCoordinate
        )
    } else {
        return (
        setCoordinate === clickCoordinate ||
        setCoordinate + 1 === clickCoordinate ||
        setCoordinate + 2 === clickCoordinate
        )
    }
}

export default setOfCoordinatesX
