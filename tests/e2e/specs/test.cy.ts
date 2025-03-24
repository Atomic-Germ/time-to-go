describe('Opening the App', () => {
  it('defaults to Month calendar', () => {
    cy.visit('/')
    cy.contains('ion-title', 'MonthCalendar')
  })
  it('shows the Punch In button', () => {
    cy.visit('/tabs/tab1')
    cy.contains('ion-button', 'Punch In').should('exist')
  })
})

describe('Tapping Day Calendar icon', () => {
  it('opens the Day calendar', () => {
    cy.visit('/tabs/tab2')
    cy.contains('ion-title', 'DayCalendar')
  })
  it('shows the Punch In button', () => {
    cy.visit('/tabs/tab2')
    cy.contains('ion-button', 'Punch In').should('exist')
  })
});

describe('Tapping the Weekday Waiver Manager icon', () => {
  it('opens the Weekly Waiver Manager', () => {
    cy.visit('/tabs/tab3')
    cy.contains('ion-title', 'Weekday Waiver Manager')
  })
  it('does not show the Punch In button', () => {
    cy.visit('/tabs/tab3')
    cy.contains('ion-button', 'Punch In').should('not.exist')
  })
})

describe('Tapping the Preference Manager icon', () => {
  it('opens the Preference Manager', () => {
    cy.visit('/tabs/tab4')
    cy.contains('ion-title', 'Preferences')
  })
  it('does not show the Punch In button', () => {
    cy.visit('/tabs/tab4')
    cy.contains('ion-button', 'Punch In').should('not.exist')
  })
})
