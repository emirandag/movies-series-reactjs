import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

/**
* @vitest-environment jsdom
*/
describe('Footer', () => {
  test('should render the correct elements', () => {
    render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
    )
    expect(screen.getByText('Creado por @emirandag')).toBeInTheDocument()
  })

})