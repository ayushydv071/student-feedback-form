function isNietEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@niet\.co\.in$/i.test(email);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isNietEmail };
}
