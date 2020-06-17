import React from 'react'
// import './styles.css'
import 'dnb-ui-lib/style'
import Context from 'dnb-ui-lib/shared/Context'
import Provider from 'dnb-ui-lib/shared/Provider'
import { ToggleButton, DatePicker, Number, Dropdown, Section } from 'dnb-ui-lib'

const ChangeLocale = () => {
  const { locale, setLocale, update } = React.useContext(Context)
  console.log(locale)

  return (
    <>
      <ToggleButton.Group
        label="Choose:"
        variant="radio"
        value={locale}
        on_change={({ value: locale }) => {
          setLocale(locale)
          update({ locale })
        }}
      >
        <ToggleButton text="English" value="en-US" />
        <ToggleButton text="Norsk" value="nb-NO" />
      </ToggleButton.Group>

      <Dropdown
        left
        value={locale}
        data={{ 'en-US': 'English', 'nb-NO': 'Norsk' }}
        on_change={({ data: { selected_key: locale } }) => {
          setLocale(locale)
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <>
      <Provider locale="en-US">
        <Section spacing top>
          <ChangeLocale />
        </Section>
        <Section spacing top>
          <Number>12345678</Number>
          <DatePicker
            left
            // opened
            show_submit_button
            show_cancel_button
            show_reset_button
          />
        </Section>
      </Provider>
    </>
  )
}
