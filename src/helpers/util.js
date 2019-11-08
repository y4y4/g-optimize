export const checkRequired = param => {
    throw new Error(`Missing parameter: ${param}`);
};