/**
 * Utility function for generating a string of CSS class names from an array.
 * It filters out falsy values (e.g., empty strings) and joins the valid class names with spaces.
 *
 * @param {Array<string>} classes - An array of CSS class names to be processed.
 * @returns {string} - A space-separated string of valid CSS class names.
 */

export const getClasses = (classes) => classes.filter(Boolean).join(" ");
// We use the filter(Boolean) method to remove any falsy values (e.g., empty strings or null) from the classes array.
// This ensures that you don't include empty classes in the final class string.
