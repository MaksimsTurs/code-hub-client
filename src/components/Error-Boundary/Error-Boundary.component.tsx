// import scss from "./Error-Boundary.module.scss";

import { Fragment, Component } from "react";

import type { ErrorInfo, ReactNode } from "react";
import type { TErrorBoundaryProps, TErrorBoundaryState } from "./Error-Boundary.component.type";

class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
  constructor(props: TErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(_: Error): TErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.info(`Error: ${error.message}`)
    console.info(`Error occured in: ${errorInfo.componentStack}`)
  }

  render(): ReactNode {
    return(
      <Fragment>{this.state.hasError ? this.props.fallbackComponent : this.props.children}</Fragment>
    )
  }
};

export default ErrorBoundary;