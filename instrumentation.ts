import type { Instrumentation } from "next";

/**
 * Logs every error thrown while rendering a page or running a route on the server, with where it happened.
 * The log line carries the error's digest, which the error pages show visitors as their "Reference", so a
 * report from a visitor can be matched to the log. Point this at an error tracker (Sentry, etc.) later.
 */
export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  const error = err as Error & { digest?: string };
  console.error("[server] request failed", {
    digest: error.digest,
    message: error.message,
    method: request.method,
    path: request.path,
    route: context.routePath,
    kind: context.routeType,
  });
};
