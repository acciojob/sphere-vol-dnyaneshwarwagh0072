function volume_sphere() {
    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);
    const volumeField = document.getElementById("volume");
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return;
    }
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
}
 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
