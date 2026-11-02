"use client";

import { Component, type ReactNode } from "react";

/**
 * Wraps decorative pieces (like the globe). If one throws while rendering, it is left out and the page
 * carries on, instead of the error taking the whole page down to the error screen.
 */
export default class QuietBoundary extends Component<{ children: ReactNode; name: string; fallback?: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(`[${this.props.name}] failed to render; leaving it out`, error);
  }

  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}
