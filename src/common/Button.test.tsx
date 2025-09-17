import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

// 'describe' mengelompokkan tes untuk satu komponen
describe('Button Component', () => {
    // 'it' atau 'test' adalah satu kasus uji individual
    it('should render with the correct text', () => {
        // Arrange (Persiapan): Render komponen
        render(<Button>Click Me</Button>);

        // Act (Aksi): (Tidak ada aksi untuk tes render sederhana)

        // Assert (Pernyataan): Periksa hasilnya
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call the onClick handler when clicked', async () => {
        // 'jest.fn()' membuat sebuah fungsi mock
        const handleClick = jest.fn();

        // Arrange: Render komponen dengan prop onClick
        render(<Button onClick={handleClick}>Submit</Button>);
        const buttonElement = screen.getByText('Submit');

        // Act: Simulasikan klik pengguna
        await userEvent.click(buttonElement);

        // Assert: Pastikan fungsi mock dipanggil
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when the disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);
        const buttonElement = screen.getByText('Disabled Button');

        // Matcher .toBeDisabled() berasal dari @testing-library/jest-dom
        expect(buttonElement).toBeDisabled();
    });
});