        import React from 'react'
      
        class HashTag extends React.Component{
            constructor(){
                super()
                this.state={
                    name:'',
                    res:''
                }
            }

            handleName=(e)=>{
                const name=e.target.value
                this.setState(()=>({name}))
                
            }

            handleSubmit=(e)=>{
                e.preventDefault()
                const formData={
                    name:this.state.name }
                 console.log(formData)
              
                let names=this.state.name
                let words=names.split('')
                let output='#'
                for(let i=0;i<words.length;i++){
                   output=output+words[i].slice(0)
                  }
                const res=output
                this.setState(()=>({res})) 
                }
                

            render(){
                return(
                    <div>
                        <form onSubmit={this.handleSubmit}>
                        <label>enter your name:
                            <input type="text" values={this.state.name}
                            onChange={this.handleName}/>
                        </label>
                        
                        <input type="submit"/>
                        <h3>{this.state.res}</h3>
                        </form>
                    </div>
                )
            }
        }

        export default HashTag