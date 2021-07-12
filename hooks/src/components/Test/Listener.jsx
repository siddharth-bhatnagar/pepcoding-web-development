import React, { useEffect, useState } from 'react'

function Listener() {
    // Component Mounting
    useEffect(()=>{
        console.log("Mounting");
        window.addEventListener("mousemove", handleMouseMove);

        return ()=>{
            console.log("Unmounting");
            window.removeEventListener("mousemove", ()=>{
                console.log("Listener Removed");
            })
        }

    }, []);

    const handleMouseMove = (e) => {
        console.log("X: " + e.pageX, "Y: " + e.pageY);
    }

    return (
        <div>

        </div>
    )
}

export default Listener;
