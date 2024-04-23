"use client"
import {useEffect, useState} from "react";

export default function Page() {
    useEffect(() => {
        console.log("example")
    }, []);
    return(
        <div>
            demo1
        </div>
    );
}