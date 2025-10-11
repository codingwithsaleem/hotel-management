import apiClient from "../axios/api-client";
import {
  ApiResponse,
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RegisterRequest,
  ResendOtpRequest,
  ResetPasswordRequest,
  VerifyUserRequest,
} from "../types/auth.types";
import { clearAuthCookies, setAuthCookies } from "../utils/cookies";

class AuthService {
  private readonly basePath = "/auth";

  /**
   * Register a new user
   * POST /auth/user-register
   */
  async registerUser(data: RegisterRequest): Promise<ApiResponse> {
    const response = await apiClient.post(
      `${this.basePath}/user-register`,
      data
    );
    return response.data;
  }

  /**
   * Verify user registration
   * POST /auth/user-verify
   */
  async verifyUser(data: VerifyUserRequest): Promise<ApiResponse> {
    const response = await apiClient.post(`${this.basePath}/user-verify`, data);
    return response.data;
  }

  /**
   * User login
   * POST /auth/user-login
   */
  async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await apiClient.post(`${this.basePath}/user-login`, data);

    //store token in localstorage and cookies
    if (response.data.success && response) {
      const { tokens, user } = response.data.data;

      if (typeof window !== "undefined") {
        // Store in localStorage
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        //store in cookies for server-side access
        setAuthCookies(tokens);
      }
    }
    return response.data;
  }

  /**
   * Request password reset (send OTP)
   * POST /auth/forgot-password
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<ApiResponse> {
    const response = await apiClient.post(
      `${this.basePath}/forgot-password`,
      data
    );
    return response.data;
  }

  /**
   * Verify OTP for password reset
   * POST /auth/verify-forgot-password-otp
   */

  async verifyForgotPasswordOtp(data: VerifyUserRequest): Promise<ApiResponse> {
    const response = await apiClient.post(
      `${this.basePath}/verify-forgot-password-otp`,
      data
    );
    return response.data;
  }

  /**
   * Reset password
   * POST /auth/reset-password
   */
  async resetPassword(data: ResetPasswordRequest): Promise<ApiResponse> {
    const response = await apiClient.post(
      `${this.basePath}/reset-password`,
      data
    );
    return response.data;
  }

  /**
   * Resend verification OTP
   * POST /auth/resend-verification-otp
   */
  async resendOtp(data: ResendOtpRequest): Promise<ApiResponse> {
    const response = await apiClient.post(`${this.basePath}/resend-otp`, data);
    return response.data;
  }

  /**
   * Refresh JWT access token
   * POST /auth/refresh-token
   */
  async refreshToken(data: RefreshTokenRequest): Promise<ApiResponse> {
    const response = await apiClient.post(
      `${this.basePath}/refresh-token`,
      data
    );

    // Update tokens in localStorage on successful refresh
    if (response.data.success && response.data.data?.tokens) {
      const { tokens } = response.data.data;

      if (typeof window !== "undefined") {
        // Update localStorage
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);

        // Update cookies
        setAuthCookies(tokens);
      }
    }

    return response.data;
  }

  /**
   * Social login (Google/LinkedIn/Apple)
   * POST /auth/{provider}/login
   */
  async socialLogin(
    provider: "google" | "linkedin" | "apple",
    data: { email: string; providerId: string; idToken: string }
  ): Promise<ApiResponse<LoginResponse>> {
    console.log("Social login data:", data);
    const response = await apiClient.post(
      `${this.basePath}/${provider}/login`,
      data
    );

    // Store tokens/user same as regular login
    if (response.data.success && response.data) {
      const { tokens, user } = response.data.data;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        setAuthCookies(tokens);
      }
    }

    return response.data;
  }

  /**
   * Social register (Google/LinkedIn/Apple)
   * POST /auth/{provider}/register
   */
  async socialRegister(
    provider: "google" | "linkedin" | "apple",
    data: {
      idToken?: string;
      email: string;
      providerId: string;
      fullName?: string;
      firstName?: string;
      lastName?: string;
      avatar?: string;
    }
  ): Promise<ApiResponse<LoginResponse>> {
    const response = await apiClient.post(
      `${this.basePath}/${provider}/register`,
      data
    );

    // On register, backend may return tokens as well — store them if present
    if (response.data.success && response.data.data) {
      const { tokens, user } = response.data.data;
      if (tokens && typeof window !== "undefined") {
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        setAuthCookies(tokens);
      }
    }

    return response.data;
  }

  /**
   * User logout
   * POST /auth/logout
   */
  async logout(): Promise<ApiResponse> {
    const response = await apiClient.post(`${this.basePath}/logout`);

    // Clear tokens and user data from localStorage on logout
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      // Clear cookies
      clearAuthCookies();
    }

    return response.data;
  }

  /**
   * Get current user from localStorage
   */
  getCurrentUser() {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      return !!token;
    }
    return false;
  }

  /**
   * Get access token
   */
  getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken");
    }
    return null;
  }

  /**
   * Get refresh token
   */
  getRefreshToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("refreshToken");
    }
    return null;
  }
}

export const authService = new AuthService();
export default authService;
