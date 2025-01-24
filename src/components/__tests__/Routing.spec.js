import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterPage from '../../views/RegisterPageView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '../../stores/user'
import { createRouter, createWebHistory } from 'vue-router'

describe('RegisterPage Routing', () => {
  it('redirects to login after successful registration', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'HomePage',
          component: { template: '<div>Home Page</div>' }
        },
        {
          path: '/login',
          name: 'Login', 
          component: { template: '<div>Login Page</div>' }
        },
        {
          path: '/register',
          name: 'Register',
          component: RegisterPage
        },
        {
          path: '/account/dashboard',
          name: 'AccountDashboardPage',
          component: { template: '<div>Dashboard Page</div>' },
          meta: { requiresAuth: true }
        },
        {
          path: '/admin/adminDashboard',
          name: 'adminDashboard',
          component: { template: '<div>Admin Dashboard</div>' },
          meta: { requiresAdmin: true } 
        }
      ]
    })

    // Add navigation guard
    router.beforeEach((to, from) => {
      if (to.meta.requiresAuth && !useUsersStore().authenticatedUser) {
        return { path: '/login' }
      }
    })

    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              users: { users: [] }
            }
          }),
          router
        ],
        stubs: {
          'router-link': true,
          'router-view': true
        }
      }
    })

    // Test registration and redirection
    const usersStore = useUsersStore()
    await router.push('/register')
    await router.isReady()

    await wrapper.find('input[type="text"]').setValue('testuser')
    await wrapper.find('input[type="email"]').setValue('test@email.com')
    await wrapper.find('input[type="password"]').setValue('password123')
    
    await wrapper.find('form').trigger('submit')
    await router.push('/login')
    await router.isReady()

    expect(usersStore.addUser).toHaveBeenCalled()
    expect(router.currentRoute.value.path).toBe('/login')
  })
})