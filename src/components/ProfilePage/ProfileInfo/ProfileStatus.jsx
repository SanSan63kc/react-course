import React from 'react'
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    /* создаём локальный state */

    state={
        editMode:false, /* режим редактирования статуса */
        status:this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    /* Параметры функции по умолчанию */
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    onStatusChange=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    render(){
        return (
            <div className={styles.status__form}>
                <div>Статус:</div>
                {!this.state.editMode &&
                    <div className={styles.edit__text}>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "нет статуса"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.edit__text}>
                        <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onStatusChange} 
                        autoFocus={true}            
                        value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
    
}

export default ProfileStatus