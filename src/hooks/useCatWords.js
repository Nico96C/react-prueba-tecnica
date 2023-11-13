import { useEffect, useState } from "react";

export function useCatWords({ fact }) {
    const [threeFirstWords, setThreeFirstWords] = useState()

    useEffect(() => {
        if(!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        setThreeFirstWords(threeFirstWords)

    }, [fact])

    return {threeFirstWords: threeFirstWords}
}