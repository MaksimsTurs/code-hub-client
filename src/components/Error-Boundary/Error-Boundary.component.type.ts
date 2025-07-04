import type { PropsWithChildren, ReactNode } from "react";

export type TErrorBoundaryProps = PropsWithChildren<{
  fallbackComponent?: ReactNode
}>;

export type TErrorBoundaryState = {
  hasError: boolean
};