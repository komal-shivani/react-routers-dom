import React from 'react'
// import convert from 'convert-units'

class Convertunits extends React.Component{
    constructor(){
        super()
        this.state={
            unitInput:"",
            convertedUnit:""
        }
    }

    inputHnadle=(e)=>{
        const unitInput=e.target.value
        this.setState(()=>({unitInput}))
    }
    convertunitHandle=(e)=>{
      const value=e.target.value
      let convertedUnit=e.target.value
        if(value==='km'){
            convertedUnit=(this.state.unitInput*1000)
        } else if(value==='cm'){
            convertedUnit=(this.state.unitInput/100)
        } else if(value==='mm'){
            convertedUnit=(this.state.unitInput*1000)
        } else if(value==='foot'){
            convertedUnit=(this.state.unitInput*3.281)
        } else if(value==='inch'){
            convertedUnit=(this.state.unitInput*39.37)
        }
         this.setState(()=>({convertedUnit}))
    }
        render(){
        return(
            <div>
                <form>
                    <label> Enter the unit in meter
                        <input type="number" value={this.state.unitInput}
                         onChange={this.inputHnadle}/>
                    </label>
                    <br/>
                   
                    {/*   value={this.state.convertedUnit} */}
                    <select onChange={this.convertunitHandle}>
                    
                    <option value="">select-unit</option>
                    <option value="km">kilometer</option>
                    <option value="cm">centimeter</option>
                    <option value="mm">milimeter</option>
                    <option value="foot">foot</option>
                    <option value="inch">inch</option>
                    </select>
                    <h2>{this.state.convertedUnit}</h2>
                </form>
            </div>
        )
    }
}  


export default Convertunits