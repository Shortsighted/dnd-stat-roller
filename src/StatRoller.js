import React from "react";
import styles from "./StatRoller.module.css"

export default class Statroller extends React.Component{
    state = {
        output: <p>Ready to roll!</p>
    }

    createSingleStat(){
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
    
        temporaryArray.splice(temporaryArray.indexOf(temporaryNumber), 1)
        finalStat = temporaryArray.reduce((accumulator, currentValue) => 
                                            accumulator+currentValue)
    
        return finalStat
    }
    
    rollStats(){
        const temporaryArray = []
        for(let i=0; i<6; i++){
            temporaryArray.push(this.createSingleStat())
        }
    
        this.setState({
            output: <table className={styles.rollsTable}>
                        <thead>
                            <tr>
                                <th colSpan={6}>Rolls</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{temporaryArray[0]}</td>
                                <td>{temporaryArray[1]}</td>
                                <td>{temporaryArray[2]}</td>
                                <td>{temporaryArray[3]}</td>
                                <td>{temporaryArray[4]}</td>
                                <td>{temporaryArray[5]}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}>Total</td>
                                <td>{temporaryArray.reduce((accumulator, currentValue) => 
                                                        accumulator + currentValue)}</td>
                            </tr>
                        </tfoot>
                    </table>
        })

    }

    render(){
        return(
            <div className={styles.mainBox}>
                <h2>Roll Character Stats</h2>
                <div className={styles.outputBox}>
                    {this.state.output}
                </div>
                <button className={styles.button} onClick={() => this.rollStats()}>
                    Roll
                </button>
            </div>
        )
    }
}