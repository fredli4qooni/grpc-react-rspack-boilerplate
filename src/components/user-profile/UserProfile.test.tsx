import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from './UserProfile';
import { useUserStore } from '../../store/useUserStore';

jest.mock('../store/userStore');

// menggunakan versi mock dari hook ini
const mockedUseUserStore = useUserStore as unknown as jest.Mock;
describe('UserProfile Component', () => {
    // 'beforeEach' berjalan sebelum setiap tes. Berguna untuk reset mock.
    beforeEach(() => {
        // Reset mock sebelum setiap tes untuk memastikan tes terisolasi
        mockedUseUserStore.mockClear();
    });

    it('should render the initial state correctly', () => {
        // Atur state yang akan dikembalikan oleh mock store
        mockedUseUserStore.mockReturnValue({
            user: null,
            isLoading: false,
            error: null,
            fetchUser: jest.fn(),
        });

        render(<UserProfile />);

        expect(screen.getByText('User Profile')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Fetch User Data/i })).toBeInTheDocument();
    });

    it('should display the loading state when isLoading is true', () => {
        mockedUseUserStore.mockReturnValue({
            isLoading: true,
            fetchUser: jest.fn(),
        });

        render(<UserProfile />);

        expect(screen.getByRole('button', { name: /Loading.../i })).toBeDisabled();
    });

    it('should display user data when the fetch is successful', () => {
        const mockUser = {
            userId: '123',
            name: 'John Doe',
            email: 'john.doe@example.com',
        };

        mockedUseUserStore.mockReturnValue({
            user: mockUser,
            isLoading: false,
            error: null,
        });

        render(<UserProfile />);

        expect(screen.getByText(`ID:`)).toBeInTheDocument();
        expect(screen.getByText(mockUser.userId)).toBeInTheDocument();
        expect(screen.getByText(mockUser.name)).toBeInTheDocument();
        expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    });

    it('should display an error message when there is an error', () => {
        mockedUseUserStore.mockReturnValue({
            user: null,
            isLoading: false,
            error: 'Failed to fetch',
        });

        render(<UserProfile />);

        expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument();
    });

    it('should call fetchUser with the correct user ID when the button is clicked', async () => {
        const mockFetchUser = jest.fn();
        mockedUseUserStore.mockReturnValue({
            user: null,
            isLoading: false,
            error: null,
            fetchUser: mockFetchUser,
        });

        render(<UserProfile />);
        const fetchButton = screen.getByRole('button', { name: /Fetch User Data/i });

        await userEvent.click(fetchButton);

        expect(mockFetchUser).toHaveBeenCalledTimes(1);
        expect(mockFetchUser).toHaveBeenCalledWith('123');
    });
});