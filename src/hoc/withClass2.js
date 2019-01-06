import React, { Component } from 'react';

// hoc wrapper as function that is called on the export. See App.js for example.
const withClass2 = (WrappedComponent, className) => {
    // Original (without ref)
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }

    // With "forward" ref
    // const AnyClass = class extends Component {
    //     render() {
    //         return (
    //             <div className={className}>
    //                 <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
    //             </div>
    //         )
    //     }
    // }

    // return React.forwardRef((props, ref)=> {
    //     return <AnyClass {...props} forwardedRef={ref}/>
    // });
}

export default withClass2;