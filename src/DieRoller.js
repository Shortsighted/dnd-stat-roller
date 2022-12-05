import React from "react";
import styles from "./DieRoller.module.css"

export default class DieRoller extends React.Component{
    state = {
        dieType: 0,
        dieQuantity: 0,
        output: ['Ready to roll!']
    }

    onSubmit(event){
        event.preventDefault()
        this.setState({
            dieType: event.target.selectDieType.value,
            dieQuantity: event.target.inputDieQuantity.value
        }, () => this.setState({
            output: this.rollDice(this.state.dieType, this.state.dieQuantity)
        }))

        return false
    } 

    rollDice(dieType, dieQuantity){
        const temporaryArray = []
        const randomNumber = () => {
            return (
                Math.floor(
                    Math.random()*dieType + 1
                )
            )
        }

        for(let i=0; i<dieQuantity; i++){
            temporaryArray.push(randomNumber())
        }

        return [`You rolled: ${temporaryArray.map(number => {return ` ${number}`})}`,
                `Total: ${temporaryArray.reduce((accumulator, currentValue) => 
                        accumulator+currentValue)}`] 
    }

    render(){
        return(
            <div className={styles.mainBox}>
                <h2>Roll your dice!</h2>
                <form className={styles.formBox} onSubmit={(event) => this.onSubmit(event)}>
                    <div className={styles.labelBox}>
                        <label htmlFor="selectDieType">Choose the die type:</label>
                        <label htmlFor="inputDieQuantity">Input the number of dice:</label>
                    </div>
                    <div className={styles.inputBox}>
                    <select name="selectDieType" required={true}>
                            <option value="">---</option>
                            <option value="1">d1</option>
                            <option value="2">d2</option>
                            <option value="3">d3</option>
                            <option value="4">d4</option>
                            <option value="6">d6</option>
                            <option value="8">d8</option>
                            <option value="10">d10</option>
                            <option value="12">d12</option>
                            <option value="20">d20</option>
                            <option value="100">d100</option>
                        </select>
                        <input type="number" 
                                min={0} max={1000} 
                                name="inputDieQuantity" required={true} />
                    </div>
                    <div className={styles.buttonBox}>
                        <button>Roll</button>
                    </div>
                </form>
                <div className={styles.outputBox}>
                    {this.state.output.map((line) => {return <p>{line}</p>})}
                </div>
            </div>
        )
    }
}