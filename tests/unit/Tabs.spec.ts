import { mount } from '@vue/test-utils'
import MonthCalendar from '@/views/MonthCalendar.vue'
import DayCalendar from '@/views/DayCalendar.vue'
import WeekdayWaiverManager from '@/views/WeekdayWaiverManager.vue'
import PreferenceManager from '@/views/PreferenceManager.vue'
import { describe, expect, test } from 'vitest'

describe('Tab Bar', () => {
  test('It should open Month Calendar', () => {
    const wrapper = mount(MonthCalendar)
    expect(wrapper.text()).toMatch('Month Calendar')
  })
  test('MonthCalendar should contain a button with id "punch-button"', () => {
    const wrapper = mount(MonthCalendar)
    const button = wrapper.find('#punch-button')
    expect(button.exists()).toBe(true)
  })
  test('It should open DayCalendar', () => {
    const wrapper = mount(DayCalendar)
    expect(wrapper.text()).toMatch('Day Calendar')
  })
  test('DayCalendar should contain a button with id "punch-button"', () => {
    const wrapper = mount(DayCalendar)
    const button = wrapper.find('#punch-button')
    expect(button.exists()).toBe(true)
  })
  test('It should open Weekday Waiver Manager', () => {
    const wrapper = mount(WeekdayWaiverManager)
    expect(wrapper.text()).toMatch('Weekday Waiver Manager')
  })
  test('It should open Preferences Manager', () => {
    const wrapper = mount(PreferenceManager)
    expect(wrapper.text()).toMatch('Preference Manager')
  })
})

