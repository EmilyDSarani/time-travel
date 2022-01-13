import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should show current value', () => {
        render(<App />);

        const undo = screen.getByText('Undo');
        const redo = screen.getByText('Redo');
        const currentDate = screen.getByLabelText('currentDate');

        fireEvent.change(currentDate, {target: {value: '2022-01-01'}});
        screen.getByText('2022-01-01')
        
        fireEvent.change(currentDate, {target: {value: '2022-06-01'}});
        screen.getByText('2022-06-01')

        fireEvent.change(currentDate, {target: {value: '2022-10-01'}});
        screen.getByText('2022-10-01')

        fireEvent.click(undo);
        screen.getByText('2022-06-01')
        
        fireEvent.click(undo);
        screen.getByText('2022-01-01')

        fireEvent.click(redo);
        screen.getByText('2022-06-01')

        fireEvent.change(currentDate, {target: {value: '2022-12-01'}})
        screen.getByText('2022-12-01')

        fireEvent.click(undo);
        screen.getByText('2022-06-01')

        fireEvent.click(redo);
        screen.getByText('2022-12-01')

        fireEvent.click(redo);
        screen.getByText('2022-10-01')

        fireEvent.click(redo);
        screen.getByText('2022-10-01')

    })
})