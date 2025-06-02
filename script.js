function showSection(sectionName , event) {
    // Hide all sections
    const sections = ['dashboard', 'alerts', 'forecast', 'sectors', 'mobile', 'data-viz'];
    sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
        element.style.display = 'none';
    }
    });

    // Show additional sector cards when sectors is selected
    const healthSector = document.getElementById('health-sector');
    if (healthSector) {
    healthSector.style.display = sectionName === 'sectors' ? 'block' : 'none';
    }

    // Show selected section
    const selectedElement = document.getElementById(sectionName);
    if (selectedElement) {
    selectedElement.style.display = 'block';
    }

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    });
    if (event && event.target) {
    event.target.classList.add('active');
    }
    
}

    // Simulate real-time updates
    function updateWeatherData() {
    const temps = [22, 23, 24, 25, 26];
    const currentTemp = temps[Math.floor(Math.random() * temps.length)];
    document.querySelector('.temperature').textContent = currentTemp + '°C';

    // Update humidity
    const humidity = Math.floor(Math.random() * 40) + 40;
    document.querySelector('.detail-value').textContent = humidity + '%';
    }

    // Update weather every 30 seconds (simulated)
    setInterval(updateWeatherData, 30000);

    // Simulate alert notifications
    function showNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('MeteoRwanda Alert', {
        body: 'Heavy rain expected in your area within the next hour.',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⛈️</text></svg>'
    });
    }
    }

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
    }

    // Show notification every 2 minutes (demo purposes)
    setInterval(showNotification, 120000);

    // Initialize dashboard view
    document.addEventListener('DOMContentLoaded', function() {
    showSection('dashboard');
    });