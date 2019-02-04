export const getIdFromUrl = (url) => {
    const splited = url.split('/');
    const filtered = splited.filter(e => e);
    return filtered.reverse()[0];
}