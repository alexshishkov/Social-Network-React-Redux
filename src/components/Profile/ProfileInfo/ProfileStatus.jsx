import React from 'react';
import c from "../Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        )
    }
    deActivateEditMode = () => {
        this.setState(
            {editMode: false}
        )
    }

    render() {
        return (
            <div className={c.wrap__status}>
                {!this.state.editMode &&
                <div className={c.status} onClick={this.activateEditMode}>{this.props.status}</div>
                }

                {this.state.editMode &&
                <div>
                    <input className={c.statusInput} autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;