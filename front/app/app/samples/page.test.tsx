// page.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Samples from './page'

// fetchのモックを作成
;(global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'sample data' }),
  }),
)

describe('<Samples />', () => {
  it('calls fetchSamples when button is clicked', () => {
    render(<Samples />)

    const button = screen.getByText('sample')
    fireEvent.click(button)

    // クリック後にfetchが呼び出されたかをチェック
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/samples')
  })
})

// テストが終了した後にfetchのモックをクリア
afterEach(() => {
  jest.clearAllMocks()
})
