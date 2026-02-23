import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@auth_token';
const USER_EMAIL_KEY = '@user_email';

export const authService = {
  // Store authentication token
  async storeToken(token: string, email: string): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        [TOKEN_KEY, token],
        [USER_EMAIL_KEY, email],
      ]);
    } catch (error) {
      console.error('Error storing auth token:', error);
      throw error;
    }
  },

  // Get authentication token
  async getToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  },

  // Get user email
  async getUserEmail(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(USER_EMAIL_KEY);
    } catch (error) {
      console.error('Error getting user email:', error);
      return null;
    }
  },

  // Remove authentication token (logout)
  async removeToken(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([TOKEN_KEY, USER_EMAIL_KEY]);
    } catch (error) {
      console.error('Error removing auth token:', error);
      throw error;
    }
  },

  // Check if user is authenticated
  async isAuthenticated(): Promise<boolean> {
    const token = await this.getToken();
    return token !== null;
  },

  // Simulate login (replace with actual API call)
  async login(email: string, password: string): Promise<{token: string}> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Simulate successful login with a mock token
    const token = `mock_token_${Date.now()}`;
    await this.storeToken(token, email);

    return {token};
  },

  // Logout
  async logout(): Promise<void> {
    await this.removeToken();
  },
};
