import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPageView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '@/stores/user'

describe('RegisterPage', () => {
  it('renders register form correctly', () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn
        })]
      }
    })

    // Check if form elements exist
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('submits form with user data', async () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn
        })]
      }
    })

    const store = useUsersStore()

    // Fill in the form
    await wrapper.find('input[type="text"]').setValue('testuser')
    await wrapper.find('input[type="email"]').setValue('test@test.com')
    await wrapper.find('input[type="password"]').setValue('password123')

    // Submit the form
    await wrapper.find('form').trigger('submit')

    // Check if store action was called with correct data
    expect(store.addUser).toHaveBeenCalledWith(
      'testuser',
      'test@test.com',
      'password123'
    )
  })

  it('shows error message when registration fails', async () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            users: {
              users: [
                { name: 'testuser', email: 'test@test.com', password: 'password123' }
              ]
            }
          }
        })]
      }
    })

    // Fill in the form with existing user data
    await wrapper.find('input[type="text"]').setValue('testuser')
    await wrapper.find('input[type="email"]').setValue('test@test.com')
    await wrapper.find('input[type="password"]').setValue('password123')

    // Submit the form
    await wrapper.find('form').trigger('submit')

    // Check if error message is displayed
    expect(wrapper.find('.error-message').text()).toBe('Já existe um utilizador com esse nome ou email')
  })
})