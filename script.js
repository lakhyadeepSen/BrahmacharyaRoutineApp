const tasks = [
    { id: 'wake-up', label: 'Wake up 4am', icon: '🌅' },
    { id: 'meditation', label: 'Meditation 5mins', icon: '🧘' },
    { id: 'exercise', label: 'Exercise 30 mins', icon: '💪' },
    { id: 'bath', label: 'Take bath cold shower', icon: '🚿' },
    { id: 'worship', label: 'Worship God', icon: '🙏' },
    { id: 'hanuman', label: 'Hanuman Chalisa', icon: '📿' },
    { id: 'study', label: 'Study', icon: '📚' },
    { id: 'bhajans', label: 'Listen to Bhajans', icon: '🎵' },
    { id: 'mala', label: 'Mala Jaap', icon: '⭐' },
    { id: 'sleep', label: 'Sleep at 9pm', icon: '🌙' },
    { id: 'save-virya', label: 'Save वीर्य', icon: '🌟' }
];

const badges = [
    { id: 'streak-1', icon: '🌱', requirement: 1, description: 'Seed of Discipline: First Day Complete' },
    { id: 'streak-2', icon: '🍃', requirement: 2, description: 'Sprouting Spirit: 2 Days Strong' },
    { id: 'streak-3', icon: '🌿', requirement: 3, description: 'Growing Grace: 3 Days of Dedication' },
    { id: 'streak-4', icon: '🎋', requirement: 4, description: 'Bamboo Beginning: 4 Days of Strength' },
    { id: 'streak-5', icon: '🌳', requirement: 5, description: 'Rooted Resolve: 5 Days Grounded' },
    { id: 'streak-6', icon: '🪷', requirement: 6, description: 'Blooming Brilliance: 6 Days of Growth' },
    { id: 'streak-7', icon: '🎯', requirement: 7, description: 'Week Warrior: 7 Day Streak' },
    { id: 'streak-30', icon: '🏆', requirement: 30, description: 'Monthly Master: 30 Day Streak' },
    { id: 'streak-60', icon: '🌟', requirement: 60, description: 'Radiant Resolve: 2 Months' },
    { id: 'streak-90', icon: '💫', requirement: 90, description: 'Divine Discipline: 3 Months' },
    { id: 'streak-120', icon: '✨', requirement: 120, description: 'Celestial Champion: 4 Months' },
    { id: 'streak-150', icon: '🌠', requirement: 150, description: 'Spiritual Sage: 5 Months' },
    { id: 'streak-180', icon: '⚡', requirement: 180, description: 'Energy Master: 6 Months' },
    { id: 'streak-210', icon: '🔮', requirement: 210, description: 'Mystic Warrior: 7 Months' },
    { id: 'streak-240', icon: '💎', requirement: 240, description: 'Diamond Discipline: 8 Months' },
    { id: 'streak-270', icon: '🏹', requirement: 270, description: 'Archer of Awareness: 9 Months' },
    { id: 'streak-300', icon: '🗡️', requirement: 300, description: 'Sword of Strength: 10 Months' },
    { id: 'streak-330', icon: '🛡️', requirement: 330, description: 'Shield of Serenity: 11 Months' },
    { id: 'streak-365', icon: '👑', requirement: 365, description: 'Crown of Control: 1 Year' },
    { id: 'streak-547', icon: '🔱', requirement: 547, description: 'Trident of Truth: 1.5 Years' },
    { id: 'streak-730', icon: '🌞', requirement: 730, description: 'Solar Sovereign: 2 Years' },
    { id: 'streak-912', icon: '🌈', requirement: 912, description: 'Rainbow Warrior: 2.5 Years' },
    { id: 'streak-1095', icon: '🐉', requirement: 1095, description: 'Dragon of Discipline: 3 Years' },
    { id: 'streak-1277', icon: '🦁', requirement: 1277, description: 'Lion of Light: 3.5 Years' },
    { id: 'streak-1460', icon: '🐘', requirement: 1460, description: 'Elephant of Enlightenment: 4 Years' },
    { id: 'streak-1642', icon: '🦅', requirement: 1642, description: 'Eagle of Evolution: 4.5 Years' },
    { id: 'streak-1825', icon: '🕉️', requirement: 1825, description: 'Om of Omniscience: 5 Years' },
    { id: 'streak-2007', icon: '☸️', requirement: 2007, description: 'Dharma Wheel: 5.5 Years' },
    { id: 'streak-2190', icon: '🏺', requirement: 2190, description: 'Amrit Vessel: 6 Years' },
    { id: 'streak-2372', icon: '🎭', requirement: 2372, description: 'Master of Maya: 6.5 Years' },
    { id: 'streak-2555', icon: '🕯️', requirement: 2555, description: 'Eternal Flame: 7 Years' },
    { id: 'streak-2737', icon: '📿', requirement: 2737, description: 'Sacred Mala: 7.5 Years' },
    { id: 'streak-2920', icon: '🌺', requirement: 2920, description: 'Lotus of Liberation: 8 Years' },
    { id: 'streak-3102', icon: '🎋', requirement: 3102, description: 'Bamboo of Balance: 8.5 Years' },
    { id: 'streak-3285', icon: '🌳', requirement: 3285, description: 'Tree of Transformation: 9 Years' },
    { id: 'streak-3467', icon: '💠', requirement: 3467, description: 'Diamond of Divinity: 9.5 Years' },
    { id: 'streak-3650', icon: '🕊️', requirement: 3650, description: 'Dove of Dharma: 10 Years' }
];

// Initialize state
let state = {
    completedTasks: {},
    streak: 0,
    points: 0,
    lastCompletedDate: '',
    unlockedBadges: [],
    taskHistory: {},
    dailyCompletion: false,
    pointsAwardedToday: false  // New flag to track if points were awarded today
};

// Load state from localStorage
try {
    const savedState = localStorage.getItem('brahmacharyaState');
    if (savedState) {
        state = JSON.parse(savedState);
    }
} catch (error) {
    console.log('localStorage not available');
}

// Reset functionality
document.getElementById('resetButton').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        state = {
            completedTasks: {},
            streak: 0,
            points: 0,
            lastCompletedDate: '',
            unlockedBadges: [],
            taskHistory: {}
        };
        saveState();
        createTaskElements();
        updateProgress();
        updateBadges();
        showAchievementPopup('Progress has been reset');
    }
});

function saveState() {
    try {
        localStorage.setItem('brahmacharyaState', JSON.stringify(state));
    } catch (error) {
        console.log('localStorage not available');
    }
}

function showAchievementPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}

function updateBadges() {
    const achievementsDiv = document.getElementById('achievements');
    achievementsDiv.innerHTML = '';

    badges.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.className = `badge ${state.unlockedBadges.includes(badge.id) ? 'unlocked' : ''}`;

        const tooltip = document.createElement('div');
        tooltip.className = 'badge-tooltip';
        tooltip.textContent = badge.description;

        badgeElement.textContent = badge.icon;
        badgeElement.appendChild(tooltip);
        achievementsDiv.appendChild(badgeElement);
    });
}

function checkAchievements() {
    badges.forEach(badge => {
        if (state.streak >= badge.requirement && !state.unlockedBadges.includes(badge.id)) {
            state.unlockedBadges.push(badge.id);
            showAchievementPopup(`🎉 Achievement Unlocked: ${badge.description}!`);
            state.points += badge.requirement;
        }
    });

    updateBadges();
    saveState();
}

function createTaskElements() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = `task ${state.completedTasks[task.id] ? 'completed' : ''}`;

        div.innerHTML = `
            <input type="checkbox" id="${task.id}" 
                   ${state.completedTasks[task.id] ? 'checked' : ''}>
            <label for="${task.id}">
                <span>${task.icon}</span>
                ${task.label}
            </label>
        `;

        div.querySelector('input').addEventListener('change', (e) => {
            handleTaskToggle(task.id, e.target.checked);
        });

        taskList.appendChild(div);
    });
}

function handleTaskToggle(taskId, checked) {
    const today = new Date().toDateString();
    
    // Reset daily flags if it's a new day
    if (state.lastCompletedDate !== today) {
        state.dailyCompletion = false;
        state.pointsAwardedToday = false;
    }

    state.completedTasks[taskId] = checked;
    const taskDiv = document.querySelector(`#${taskId}`).parentElement;
    taskDiv.className = `task ${checked ? 'completed' : ''}`;

    const allCompleted = tasks.every(task => state.completedTasks[task.id]);

    if (allCompleted && !state.dailyCompletion) {
        // First time completing all tasks for the day
        state.streak++;
        if (!state.pointsAwardedToday) {
            state.points += 100;
            state.pointsAwardedToday = true; // Mark points as awarded for today
        }
        state.lastCompletedDate = today;
        state.dailyCompletion = true;
        showAchievementPopup(`🎉 All tasks completed! +100 points`);
        checkAchievements();
    } else if (!allCompleted && state.dailyCompletion) {
        // Tasks were all complete but now they're not
        state.streak--;
        if (state.pointsAwardedToday) {
            state.points -= 100;
            state.pointsAwardedToday = false; // Reset points awarded flag
        }
        state.dailyCompletion = false;
        showAchievementPopup(`⚠️ Daily progress incomplete. Streak and points adjusted.`);
        
        // Ensure streak and points don't go negative
        if (state.streak < 0) state.streak = 0;
        if (state.points < 0) state.points = 0;
        
        // Remove badges that are no longer valid
        state.unlockedBadges = state.unlockedBadges.filter(badgeId => {
            const badge = badges.find(b => b.id === badgeId);
            return badge.requirement <= state.streak;
        });
    }

    updateProgress();
    updateBadges();
    saveState();
}

function updateProgress() {
    const completed = Object.values(state.completedTasks).filter(Boolean).length;
    const percentage = Math.round((completed / tasks.length) * 100);

    document.getElementById('progress').textContent = `${percentage}% Complete`;
    document.getElementById('streak').textContent = `${state.streak} Day Streak`;
    document.getElementById('points').textContent = `${state.points} Points`;
}

function updateDateDisplay() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById('dateDisplay').textContent = now.toLocaleDateString('en-US', options);
}

function checkAndResetDaily() {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    if (state.lastCompletedDate !== today) {
        // If we missed yesterday, reset streak
        if (state.lastCompletedDate !== yesterdayString) {
            state.streak = 0;
            state.dailyCompletion = false;
            state.pointsAwardedToday = false;  // Reset points awarded flag
            showAchievementPopup('❌ Streak reset! Complete all tasks today to start a new streak!');
        }

        // Reset tasks for the new day
        state.completedTasks = {};
        state.dailyCompletion = false;
        state.pointsAwardedToday = false;  // Reset points awarded flag
        saveState();
        createTaskElements();
        updateProgress();
        updateDateDisplay();
        updateBadges();
    }
}

// Initialize
createTaskElements();
updateProgress();
updateDateDisplay();
updateBadges();

// Check for day change every minute
setInterval(checkAndResetDaily, 60000);

// Update date display every second
setInterval(updateDateDisplay, 1000);