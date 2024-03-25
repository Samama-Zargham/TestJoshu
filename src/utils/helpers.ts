import AsyncStorage from "@react-native-async-storage/async-storage";



// Function to set a value in AsyncStorage
export const setAsyncStorageValue = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true; // Return true on success
    } catch (error) {
        console.error('Error setting AsyncStorage value:', error);
        return false; // Return false on failure
    }
};

// Function to get a value from AsyncStorage
export const getAsyncStorageValue = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // Parse the retrieved JSON string to an object
            return JSON.parse(value);
        } else {
            return null; // Key not found in AsyncStorage
        }
    } catch (error) {
        console.error('Error getting AsyncStorage value:', error);
        return null; // Return null on error
    }
};

// Function to remove a value from AsyncStorage
export const removeAsyncStorageValue = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        return true; // Return true on success
    } catch (error) {
        console.error('Error removing AsyncStorage value:', error);
        return false; // Return false on failure
    }
};

export const GOOGLE_MAPS_APIKEY = ''