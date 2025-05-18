export default function getCountryName() {
    const params = new URLSearchParams(window.location.search);
    return params.get("country") || "-";
}
