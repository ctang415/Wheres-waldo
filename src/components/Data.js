import React from "react";

const Data = ({ scores }) => {
    if (scores.length !== 0) {
    return (
        Object.values(scores).map(item => {
            return (
                item.map(data => {
                    return (
                        Object.values(data).map(x => {
                            return (
                                <div className="leader-data-record" key={x.name}>
                                    <span className="column-one">{x.name}</span>
                                    <span className="column-two">{x.time}</span>
                                    <span className="column-three">{x.date}</span>
                                </div>
                            )
                        })  
                    )
                })
            )
        })
    )
    }
}

export default Data