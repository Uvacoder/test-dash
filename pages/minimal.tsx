import type { NextPage } from 'next'
import { useState, useEffect} from 'react';
import Head from 'next/head'
import { startWebGL } from '../src/webgl';

const Minimal: NextPage = () => {

    // useEffect(() => {
    //     startWebGL();
    // }, [])

    return (
        <>
            {/* <canvas id="webglcanvas" /> */}
        </>
    )
}

export default Minimal;
