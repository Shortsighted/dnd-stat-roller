function createSingleStat(){
    const randomNumber = () => {return Math.floor(Math.random()*6)+1}
    const temporaryArray = []
    let temporaryNumber = 7
    let finalStat
    
    for(let i=0; i<4; i++){
        temporaryArray.push(randomNumber())
    }
    
    temporaryArray.forEach(
        number => {
            temporaryNumber > number && (temporaryNumber = number)
        }
    )

    console.log(temporaryArray)

    temporaryArray.splice(temporaryArray.indexOf(temporaryNumber), 1)
    finalStat = temporaryArray.reduce((accumulator, currentValue) => accumulator+currentValue)

    console.log(finalStat)

    return finalStat
}

function createAllStats(quantity){
    const temporaryArray = []
    for(let i=0; i<quantity; i++){
        temporaryArray.push(createSingleStat())
    }

    
    console.log(`${temporaryArray} = ${temporaryArray.reduce((accumulator, currentValue) => accumulator+currentValue)}`)
}

createAllStats(6)