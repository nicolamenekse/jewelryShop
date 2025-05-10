// Temel seçiciler
export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;

// Filtre seçicileri
export const selectGenderFilter = (state) => state.users.genderFilter;
export const selectAvailabilityFilter = (state) => state.users.availabilityFilter;
export const selectAgeRange = (state) => state.users.ageRange;

// Filtrelenmiş kullanıcıları seç
export const selectFilteredUsers = (state) => {
    const users = selectUsers(state);
    const genderFilter = selectGenderFilter(state);
    const availabilityFilter = selectAvailabilityFilter(state);
    const { min, max } = selectAgeRange(state);

    return users.filter(user => {
        const genderMatch = !genderFilter || user.gender === genderFilter;
        const availabilityMatch = availabilityFilter === null || user.isAvailable === availabilityFilter;
        const ageMatch = user.age >= min && user.age <= max;

        return genderMatch && availabilityMatch && ageMatch;
    });
};

// İstatistik seçicileri
export const selectUserStats = (state) => {
    const users = selectUsers(state);
    return {
        totalUsers: users.length,
        availableUsers: users.filter(user => user.isAvailable).length,
        maleUsers: users.filter(user => user.gender === 'male').length,
        femaleUsers: users.filter(user => user.gender === 'female').length,
        averageAge: Math.round(users.reduce((acc, user) => acc + user.age, 0) / users.length) || 0,
        averageFriendCount: Math.round(users.reduce((acc, user) => acc + user.friendCount, 0) / users.length) || 0
    };
};

// Belirli bir kullanıcıyı ID'ye göre seç
export const selectUserById = (state, userId) => {
    const users = selectUsers(state);
    return users.find(user => user.id === userId);
};


