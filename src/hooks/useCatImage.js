import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        fetch(`https://cataas.com/cat/says/Cat?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const { _id } = response
                setImageUrl(CAT_PREFIX_IMAGE_URL + "/" + _id)
            })


    }, [fact])

    return { imageUrl: `${imageUrl}` }
}