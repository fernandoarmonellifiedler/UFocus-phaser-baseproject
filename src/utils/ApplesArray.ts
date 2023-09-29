export const applesArray = Array.from({ length: 20 }, () => ({
    top: `${Math.abs(Math.random() * 55)}vh`,
    left: `${Math.abs(Math.random() * 55)}vw`,
}));