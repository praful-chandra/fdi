import React from 'react'
import Footer from "../footer.component";

function withFooter(child) {
    console.log(child);
    return (
        <>
            {child}
            <Footer />
        </>
    )
}

export default withFooter
