import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterPage from '../../views/RegisterPageView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '../../stores/user'

describe('RegisterPage', () => {
  it('renders register form correctly', () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            users: {
              users: []
            }
          }
        })]
      }
    })

    // Check if form elements exist
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('validates form inputs', async () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn
        })]
      }
    })

    const usersStore = useUsersStore()
    const form = wrapper.find('form')
    
    await wrapper.find('input[type="text"]').setValue('testuser')
    await wrapper.find('input[type="email"]').setValue('test@email.com')
    await wrapper.find('input[type="password"]').setValue('password123')

    await form.trigger('submit')

    expect(usersStore.addUser).toHaveBeenCalled()
  })
})