import * as React from "react";


export class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }


    render() {
        if(this.state.hasError) {
            return <h1>Error</h1>
        }
             return this.props.children
    }

}
