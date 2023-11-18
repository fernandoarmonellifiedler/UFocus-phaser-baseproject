export const applesArray = Array.from({ length: 10 }, () => ({
    top: `${Math.abs(Math.random() * 39) + 12}vh`,
    left: `${Math.abs(Math.random() * 23) + 20}vw`,
}));