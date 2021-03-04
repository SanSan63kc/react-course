import React from 'react'
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    /* создаём локальный state */
    state={
        editMode:false /* режим редактирования статуса */
    }

    activateEditMode=()=>{
        this.setState({/* ф-я асинхронная */
            editMode:true 
        })
    }

    deactivateEditMode=()=>{
        this.setState({/* ф-я асинхронная */
            editMode:false 
        })
    }
    
    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
    
}

export default ProfileStatus