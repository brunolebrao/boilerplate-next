import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
