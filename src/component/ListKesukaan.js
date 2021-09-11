import React from 'react'


function listKesukaan(props) {
    return (
        <>
            <div>
                <h2>Favorit</h2>
            </div>
            <div>
                {props.data2.map((data2) => (
                    <h3 key={data2.key}> Makanan : {data2.makanan}<br /> Film : {data2.film}<br /> Hobi : {data2.hobi}</h3>
                ))}
            </div>
        </>
    )
}

export default listKesukaan
