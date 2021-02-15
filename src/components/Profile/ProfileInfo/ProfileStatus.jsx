import React from 'react';
import c from "../Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        )
    };
    deActivateEditMode = () => {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })

    };

    render() {
        return (
            <div className={c.wrap__status}>
                {!this.state.editMode &&
                <div className={c.status} onClick={this.activateEditMode}>{this.props.status || '------'}</div>
                }

                {this.state.editMode &&
                <div>
                    <input className={c.statusInput} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;