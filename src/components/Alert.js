import React from 'react'

export default function Alerts(props) {
    return (
      <div>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mb-2`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.message}
      </div>}
      </div>
    )
}
