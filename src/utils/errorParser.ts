/**
 * Extracts a user-friendly error message from an API error response.
 * Filters out raw backend code, technical stack traces, and localhost URLs.
 * 
 * @param error The unknown error object caught in a try/catch block
 * @param fallback A default message to use if parsing fails
 * @returns A clean, actionable error string
 */
export function getErrorMessage(error: any, fallback: string = 'An unexpected error occurred.'): string {
  if (!error) return fallback;

  // Handle Axios errors
  if (error.isAxiosError && error.response) {
    const status = error.response.status;
    const data = error.response.data;

    if (status === 422) {
      // Typically validation errors
      if (data.errors && typeof data.errors === 'object') {
        const firstKey = Object.keys(data.errors)[0];
        const firstError = data.errors[firstKey];
        const message = Array.isArray(firstError) ? firstError[0] : firstError;
        return `Validation error: ${message}`;
      }
      if (data.message) {
        return `Validation error: ${data.message}`;
      }
    }

    if (status === 401) return 'Authentication error. Please log in again.';
    if (status === 403) return 'Permission denied. You do not have access to this action.';
    if (status >= 500) return 'Server error. Please try again later.';

    if (data && data.message) {
      // Ensure the message doesn't contain obvious technical stack traces or SQL errors
      const msgStr = String(data.message);
      if (msgStr.toLowerCase().includes('sql') || msgStr.includes('127.0.0.1') || msgStr.includes('localhost') || msgStr.includes('Exception')) {
        return 'A technical error occurred on the server. Please contact support.';
      }
      return msgStr;
    }
  } else if (error.request) {
    // Axios error where request was made but no response received
    return 'Network error. Please check your internet connection.';
  }

  // Handle standard JS errors
  if (error instanceof Error) {
    if (error.message === 'Network Error') {
      return 'Network error. Please check your internet connection.';
    }
    // Only return the message if it looks clean (no massive stack traces)
    if (error.message.length < 150 && !error.message.includes('localhost') && !error.message.includes('http')) {
      return error.message;
    }
  }

  // Handle string errors
  if (typeof error === 'string') {
    if (error.length < 150 && !error.includes('localhost') && !error.includes('http')) {
      return error;
    }
  }

  return fallback;
}
