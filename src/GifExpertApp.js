import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball']);

/*     const handleAdd = ()=> {
        setCategories( [...categories, 'HunterXHunter']) con spreed operator
        setCategories(cats => [ ...cats, 'HunterXHunter' ])
    } */
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr />

            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp