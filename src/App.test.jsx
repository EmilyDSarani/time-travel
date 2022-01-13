import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should show current value', () => {
        render(<App />);
    })
})